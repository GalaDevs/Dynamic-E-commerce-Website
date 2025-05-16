"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"
import { products } from "@/lib/products"
import RelatedProducts from "@/components/related-products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("m")

  const product = products.find((p) => p.id === params.id) || products[0]

  const colors = [
    { name: "Black", value: "black" },
    { name: "White", value: "white" },
    { name: "Blue", value: "blue" },
  ]

  const sizes = [
    { name: "S", value: "s" },
    { name: "M", value: "m" },
    { name: "L", value: "l" },
    { name: "XL", value: "xl" },
  ]

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="container px-4 py-10 md:px-6">
      <Link
        href="/marketplace"
        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Marketplace
      </Link>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border bg-background">
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">{product.reviews} reviews</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
            {product.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-600 dark:bg-red-900/20 dark:text-red-400">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>
            )}
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="font-medium">Color</div>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`relative h-8 w-8 rounded-full border ${
                      selectedColor === color.value ? "ring-2 ring-primary ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor === color.value && <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium">Size</div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium ${
                      selectedSize === size.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-medium">Quantity</div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="w-12 text-center">{quantity}</div>
                <Button variant="outline" size="icon" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button size="lg" className="gap-2" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Heart className="h-5 w-5" />
              Add to Wishlist
            </Button>
            <Button variant="outline" size="icon" className="sm:ml-auto">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>

          <Separator />

          <div className="space-y-2">
            <div className="font-medium">Product Details</div>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              <li>Material: Premium quality materials</li>
              <li>Dimensions: Varies by size</li>
              <li>Care: Machine washable</li>
              <li>Origin: Ethically manufactured</li>
              <li>SKU: {product.id}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <Tabs defaultValue="description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-4 pt-4">
            <h3 className="text-lg font-medium">Product Description</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {product.description} Our products are designed with both style and functionality in mind, ensuring that
                you get the best of both worlds.
              </p>
              <p>
                Crafted from premium materials, this product is built to last. The attention to detail is evident in
                every stitch and finish, making it not just a purchase, but an investment in quality.
              </p>
              <p>
                Whether you're looking for something for everyday use or a special occasion, this product is versatile
                enough to meet your needs. Its timeless design ensures that it will remain stylish for years to come.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="space-y-4 pt-4">
            <h3 className="text-lg font-medium">Technical Specifications</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-medium">Dimensions</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Height: Varies by size</li>
                  <li>Width: Varies by size</li>
                  <li>Depth: Varies by size</li>
                  <li>Weight: Lightweight</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Materials</h4>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Outer: Premium fabric</li>
                  <li>Inner: Soft lining</li>
                  <li>Trims: High-quality finishes</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Customer Reviews</h3>
              <Button>Write a Review</Button>
            </div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Customer {i + 1}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(Date.now() - i * 86400000).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${
                            j < 5 - i ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {i === 0
                      ? "Absolutely love this product! The quality is exceptional and it looks even better in person. Highly recommend!"
                      : i === 1
                        ? "Great product for the price. Shipping was fast and the item was well-packaged."
                        : "Good product overall. There were a few minor issues but customer service was helpful in resolving them."}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold">Related Products</h2>
        <RelatedProducts currentProductId={product.id} />
      </div>
    </div>
  )
}

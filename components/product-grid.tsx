"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/components/cart-provider"

export default function ProductGrid({ products }) {
  const { toast } = useToast()
  const { addToCart } = useCart()

  const handleQuickAdd = (product) => {
    addToCart({
      ...product,
      quantity: 1,
      selectedColor: "black",
      selectedSize: "m",
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h2 className="text-xl font-semibold">No products found</h2>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group relative overflow-hidden rounded-lg border bg-background">
          <Link href={`/marketplace/${product.id}`} className="relative block overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            {product.isNew && <Badge className="absolute left-2 top-2">New</Badge>}
            {product.discount && (
              <Badge variant="destructive" className="absolute right-2 top-2">
                {product.discount}% OFF
              </Badge>
            )}
          </Link>
          <div className="p-4">
            <Link href={`/marketplace/${product.id}`}>
              <h3 className="font-medium">{product.name}</h3>
            </Link>
            <div className="mt-1 flex items-center justify-between">
              <div>
                <span className="font-medium">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < product.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="w-full" onClick={() => handleQuickAdd(product)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

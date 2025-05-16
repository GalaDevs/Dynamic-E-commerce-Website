"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const { toast } = useToast()
  const [promoCode, setPromoCode] = useState("")
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = isPromoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal - discount + shipping

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === "discount10") {
      setIsPromoApplied(true)
      toast({
        title: "Promo code applied",
        description: "10% discount has been applied to your order.",
      })
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code.",
        variant: "destructive",
      })
    }
  }

  const handleCheckout = () => {
    toast({
      title: "Checkout initiated",
      description: "This would normally redirect to a payment page.",
    })
  }

  return (
    <div className="container px-4 py-10 md:px-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center space-y-4 py-10">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
          </div>
          <Button asChild>
            <Link href="/marketplace">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                  <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
                <Separator className="my-4" />
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="grid gap-4 sm:grid-cols-[100px_1fr] sm:gap-6"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-md bg-muted">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="grid gap-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">
                              <Link href={`/marketplace/${item.id}`} className="hover:underline">
                                {item.name}
                              </Link>
                            </h3>
                            <div className="mt-1 text-sm text-muted-foreground">
                              {item.selectedColor && <span className="capitalize">Color: {item.selectedColor}</span>}
                              {item.selectedSize && (
                                <span className="ml-2 capitalize">Size: {item.selectedSize.toUpperCase()}</span>
                              )}
                            </div>
                          </div>
                          <div className="text-right font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                              <span className="sr-only">Decrease quantity</span>
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                              <span className="sr-only">Increase quantity</span>
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-muted-foreground"
                            onClick={() => removeFromCart(item)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/marketplace">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Order Summary</h2>
                <Separator className="my-4" />
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {isPromoApplied && (
                    <div className="flex items-center justify-between text-green-600 dark:text-green-400">
                      <span>Discount (10%)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-600 dark:text-green-400">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between font-medium">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium">Promo Code</div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handlePromoCode}>
                        Apply
                      </Button>
                    </div>
                    <div className="text-xs text-muted-foreground">Try "DISCOUNT10" for 10% off</div>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>

                  <div className="text-center text-xs text-muted-foreground">
                    By proceeding, you agree to our Terms of Service and Privacy Policy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

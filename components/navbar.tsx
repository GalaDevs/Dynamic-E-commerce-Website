"use client"

import { useState, useEffect } from "react"
import LinkWrapper from "@/components/link-wrapper"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export default function Navbar() {
  const { cart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="grid gap-6 text-lg font-medium">
              <LinkWrapper href="/" className="flex items-center gap-2 text-lg font-semibold">
                <ShoppingCart className="h-5 w-5" />
                <span>ModernShop</span>
              </LinkWrapper>
              <LinkWrapper href="/" className="hover:text-foreground/80 transition-colors">
                Home
              </LinkWrapper>
              <LinkWrapper href="/marketplace" className="hover:text-foreground/80 transition-colors">
                Shop
              </LinkWrapper>
              <LinkWrapper href="/about" className="hover:text-foreground/80 transition-colors">
                About
              </LinkWrapper>
              <LinkWrapper href="/contact" className="hover:text-foreground/80 transition-colors">
                Contact
              </LinkWrapper>
            </nav>
          </SheetContent>
        </Sheet>

        <LinkWrapper href="/" className="flex items-center gap-2 text-lg font-semibold mr-4 md:mr-8">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden md:inline-block">ModernShop</span>
        </LinkWrapper>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <LinkWrapper href="/" className="font-medium transition-colors hover:text-foreground/80">
            Home
          </LinkWrapper>
          <LinkWrapper href="/marketplace" className="font-medium transition-colors hover:text-foreground/80">
            Shop
          </LinkWrapper>
          <LinkWrapper href="/about" className="font-medium transition-colors hover:text-foreground/80">
            About
          </LinkWrapper>
          <LinkWrapper href="/contact" className="font-medium transition-colors hover:text-foreground/80">
            Contact
          </LinkWrapper>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search products..." className="w-[200px] md:w-[300px]" />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <ModeToggle />

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>

          <Button variant="ghost" size="icon" asChild className="relative">
            <LinkWrapper href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {cartItemsCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </LinkWrapper>
          </Button>
        </div>
      </div>
    </header>
  )
}

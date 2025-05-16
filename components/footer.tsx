import LinkWrapper from "@/components/link-wrapper"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ModernShop</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              Your premium destination for quality products and exceptional shopping experiences.
            </p>
            <div className="flex gap-4">
              <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </LinkWrapper>
              <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </LinkWrapper>
              <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </LinkWrapper>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkWrapper href="/marketplace" className="text-muted-foreground hover:text-foreground">
                  All Products
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/marketplace" className="text-muted-foreground hover:text-foreground">
                  Featured
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/marketplace" className="text-muted-foreground hover:text-foreground">
                  New Arrivals
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/marketplace" className="text-muted-foreground hover:text-foreground">
                  Best Sellers
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/marketplace" className="text-muted-foreground hover:text-foreground">
                  Sale
                </LinkWrapper>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkWrapper href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Press
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </LinkWrapper>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Shipping & Returns
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Size Guide
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Track Order
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="#" className="text-muted-foreground hover:text-foreground">
                  Terms & Conditions
                </LinkWrapper>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ModernShop. All rights reserved.</p>
          <p className="mt-2">
            <LinkWrapper href="#" className="underline underline-offset-4 hover:text-foreground">
              Privacy Policy
            </LinkWrapper>{" "}
            •{" "}
            <LinkWrapper href="#" className="underline underline-offset-4 hover:text-foreground">
              Terms of Service
            </LinkWrapper>
          </p>
        </div>
      </div>
    </footer>
  )
}

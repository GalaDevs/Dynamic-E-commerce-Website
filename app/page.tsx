import { ArrowRight } from "lucide-react"
import Link from "next/link"
import FeaturedProducts from "@/components/featured-products"
import { Button } from "@/components/ui/button"
import NewsletterSignup from "@/components/newsletter-signup"
import HeroSection from "@/components/hero-section"
import CategoryShowcase from "@/components/category-showcase"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Categories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our curated collection of premium products
            </p>
          </div>
        </div>
        <CategoryShowcase />
      </section>

      <section className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our most popular items, handpicked for quality and style
            </p>
          </div>
        </div>
        <FeaturedProducts />
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/marketplace" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Premium Quality, Exceptional Service
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We pride ourselves on offering only the finest products, backed by our commitment to customer
                satisfaction.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="mb-4 text-4xl font-bold">🚚</div>
                <h3 className="text-xl font-bold">Free Shipping</h3>
                <p className="text-muted-foreground">On all orders over $50</p>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="mb-4 text-4xl font-bold">🔄</div>
                <h3 className="text-xl font-bold">Easy Returns</h3>
                <p className="text-muted-foreground">30-day money back guarantee</p>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="mb-4 text-4xl font-bold">🔒</div>
                <h3 className="text-xl font-bold">Secure Payments</h3>
                <p className="text-muted-foreground">Protected by industry standards</p>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="mb-4 text-4xl font-bold">💬</div>
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-muted-foreground">Always here to help you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  )
}

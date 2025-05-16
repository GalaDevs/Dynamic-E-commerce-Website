import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 py-12">
      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">About Us</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Founded in 2015, ModernShop began with a simple mission: to provide high-quality products with exceptional
              customer service. What started as a small online store has grown into a trusted e-commerce destination for
              thousands of customers worldwide.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team is passionate about curating the finest selection of products, ensuring that every item meets our
              strict standards for quality, design, and functionality.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2574&auto=format&fit=crop"
              alt="Our team working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">🌱</div>
              <h3 className="text-xl font-bold">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing our environmental impact through sustainable practices and eco-friendly
                products.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">🤝</div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-muted-foreground">
                We believe in building strong relationships with our customers, partners, and the communities we serve.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">✨</div>
              <h3 className="text-xl font-bold">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on quality, ensuring that every product meets our high standards.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">🔍</div>
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in honest communication and being transparent about our products and practices.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">💡</div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-muted-foreground">
                We're constantly exploring new ideas and technologies to improve our products and services.
              </p>
            </div>
            <div className="rounded-xl border bg-background p-6 shadow-sm">
              <div className="mb-4 text-4xl font-bold">❤️</div>
              <h3 className="text-xl font-bold">Customer Focus</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do, and their satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[400px] overflow-hidden rounded-xl order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
              alt="Our team"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our diverse team of experts is passionate about delivering the best possible experience for our customers.
              From product curation to customer support, we work together to ensure that every aspect of your shopping
              journey exceeds expectations.
            </p>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With backgrounds in retail, technology, design, and customer service, our team brings a wealth of
              knowledge and experience to ModernShop.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/marketplace">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

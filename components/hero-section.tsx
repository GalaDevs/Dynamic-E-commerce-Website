import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LinkWrapper from "@/components/link-wrapper"

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>
      <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Style with Modern Essentials
          </h1>
          <p className="mt-6 text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our curated collection of premium products designed for the modern lifestyle.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <LinkWrapper href="/marketplace">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </LinkWrapper>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <LinkWrapper href="/about">Learn More</LinkWrapper>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

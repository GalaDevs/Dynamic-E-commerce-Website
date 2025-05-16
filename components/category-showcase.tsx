import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LinkWrapper from "@/components/link-wrapper"

export default function CategoryShowcase() {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2701&auto=format&fit=crop",
      description: "Cutting-edge gadgets and devices",
    },
    {
      name: "Clothing",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2670&auto=format&fit=crop",
      description: "Stylish apparel for every occasion",
    },
    {
      name: "Home & Kitchen",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2574&auto=format&fit=crop",
      description: "Essentials for modern living",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3 mt-8">
      {categories.map((category) => (
        <div key={category.name} className="group relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60" />
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            width={600}
            height={400}
            className="h-[300px] w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
            <h3 className="text-2xl font-bold">{category.name}</h3>
            <p className="mt-2 text-sm text-white/80">{category.description}</p>
            <Button asChild variant="outline" className="mt-4 border-white text-white hover:bg-white hover:text-black">
              <LinkWrapper href="/marketplace" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </LinkWrapper>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

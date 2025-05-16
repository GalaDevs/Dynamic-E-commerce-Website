"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    })

    setEmail("")
  }

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-primary-foreground/80 md:text-xl">
            Stay updated with our latest products, exclusive offers, and style tips.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-xs text-primary-foreground/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}

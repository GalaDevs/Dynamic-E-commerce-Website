"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"

// This component helps with proper path handling for GitHub Pages
export default function LinkWrapper({
  href,
  children,
  className,
  ...props
}: {
  href: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}) {
  const pathname = usePathname()
  const isProduction = process.env.NODE_ENV === "production"

  // Only modify external links or anchors
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  // For internal links, add the basePath in production
  const modifiedHref = isProduction ? `/modernshop${href}` : href

  return (
    <Link href={modifiedHref} className={className} {...props}>
      {children}
    </Link>
  )
}

# ModernShop E-commerce Website

A modern, responsive e-commerce website built with Next.js and Tailwind CSS.

## Features

- **Multiple Pages**: Home, About, Marketplace, Product Details, Cart, Contact
- **Responsive Design**: Works on all devices
- **Dark/Light Mode**: Theme toggle functionality
- **Shopping Cart**: Add, remove, and update items
- **Product Filtering**: Filter and sort products
- **Modern UI**: Clean design with animations

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/yourusername/modernshop.git
cd modernshop
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to GitHub:

\`\`\`bash
git add .
git commit -m "Your commit message"
git push
\`\`\`

2. GitHub Actions will automatically build and deploy your site to GitHub Pages.

3. Your site will be available at `https://yourusername.github.io/modernshop/`

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:

\`\`\`bash
npm run build
\`\`\`

2. The static site will be generated in the `out` directory.

3. You can then upload these files to GitHub Pages or any static hosting service.

## Project Structure

\`\`\`
modernshop/
├── app/                  # Next.js App Router
│   ├── about/            # About page
│   ├── cart/             # Cart page
│   ├── contact/          # Contact page
│   ├── marketplace/      # Marketplace pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── lib/                  # Utility functions and data
├── public/               # Static assets
└── ...config files
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="wrapper">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-primary">
            Kayana
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#products" className="hover:text-primary">
              Products
            </Link>
            <Link href="/#about" className="hover:text-primary">
              About
            </Link>
            <Link href="/#partners" className="hover:text-primary">
              Partners
            </Link>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <Button asChild>
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              href="/#products"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Products
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              About
            </Link>
            <Link
              href="/#partners"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Partners
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 hover:bg-accent rounded-md"
            >
              Blog
            </Link>
            <div className="px-4 pt-2">
              <Button asChild className="w-full">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

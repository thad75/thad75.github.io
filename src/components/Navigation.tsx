"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/80 backdrop-blur-md dark:bg-[#222831]/80 border-b border-[#C08552] dark:border-[#393E46] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8]">TS</Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="/#about" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">About</Link>
            <Link href="/#projects" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Projects</Link>
            <Link href="/#publications" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Publications</Link>
            <Link href="/#speaking" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Speaking</Link>
            <Link href="/#posts" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Posts</Link>
            <Link href="/#blog" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Blog</Link>
            <Link href="/#contact" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Contact</Link>
            <a
              href="https://calendly.com/tharsan-senthivel"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#C08552] dark:bg-[#DFD0B8] text-[#FFF8F0] dark:text-[#222831] rounded-full font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Book a meeting
            </a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

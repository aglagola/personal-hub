"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Now", href: "/now" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/80">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-serif text-xl font-bold tracking-tight">
                        AG
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-stone-900 dark:hover:text-stone-50",
                                    pathname === link.href
                                        ? "text-stone-900 dark:text-stone-50"
                                        : "text-stone-500 dark:text-stone-400"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ModeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900">
                    <Container>
                        <nav className="flex flex-col py-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-stone-900 dark:hover:text-stone-50",
                                        pathname === link.href
                                            ? "text-stone-900 dark:text-stone-50"
                                            : "text-stone-500 dark:text-stone-400"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </Container>
                </div>
            )}
        </header>
    );
}

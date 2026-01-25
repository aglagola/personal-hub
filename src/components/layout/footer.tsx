import { Container } from "@/components/ui/container";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-stone-50 py-12 dark:border-stone-800 dark:bg-stone-900">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="flex flex-col gap-2">
                        <span className="font-serif text-lg font-bold">Adam Glagola</span>
                        <p className="text-sm text-stone-500 dark:text-stone-400">
                            Building for the long term.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="https://twitter.com/adamglagola" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="https://github.com/adamglagola" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">GitHub</span>
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/adamglagola" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link href="mailto:adam@example.com" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
                    &copy; {new Date().getFullYear()} Adam Glagola. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

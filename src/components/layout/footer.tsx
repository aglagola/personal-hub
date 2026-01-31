import { Container } from "@/components/ui/container";
import { Linkedin, Mail, Instagram, Youtube } from "lucide-react";
import { XIcon } from "@/components/ui/icons";

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
                        <a href="https://www.instagram.com/adamglagola" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://www.youtube.com/@AdamGlagola-o3" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">YouTube</span>
                            <Youtube className="h-5 w-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/adam-g-2b015579/" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://x.com/adamglagola" target="_blank" rel="noreferrer" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">X (Twitter)</span>
                            <XIcon className="h-5 w-5" />
                        </a>
                        <a href="mailto:adamglagolaco@gmail.com" className="text-stone-500 transition-colors hover:text-stone-900 dark:hover:text-stone-50">
                            <span className="sr-only">Email</span>
                            <Mail className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-stone-200 pt-8 text-center text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
                    &copy; {new Date().getFullYear()} Adam Glagola. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}

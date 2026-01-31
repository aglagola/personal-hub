import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Instagram, Youtube, Mail, Code, Brain, Music, Atom, Quote, Dumbbell, Video } from "lucide-react";

export default function NowPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="relative py-24 overflow-hidden">
                    {/* Background: Focus / Active State */}
                    <div className="absolute inset-0 -z-10 h-full w-full bg-stone-50 dark:bg-stone-950">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    </div>

                    <Container className="relative z-10">
                        <div className="max-w-2xl mx-auto">
                            <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl mb-8">
                                Now
                            </h1>
                            <div className="prose prose-stone dark:prose-invert">
                                <p className="lead">
                                    This is a "now" page. It tells you what I'm focused on at this exact point in my life.
                                </p>
                                <div className="my-8 h-px w-full bg-stone-200 dark:bg-stone-800" />

                                <h3 className="text-xl font-bold mb-6">Current Focus</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Creating what I consider to be healthy habits
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></svg>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Expanding my reach
                                            </span>
                                            <div className="flex gap-4">
                                                <a href="https://www.instagram.com/adamglagola" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-pink-600 transition-colors">
                                                    <Instagram className="h-5 w-5" />
                                                    <span className="sr-only">Instagram</span>
                                                </a>
                                                <a href="https://www.youtube.com/@AdamGlagola-o3" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-red-600 transition-colors">
                                                    <Youtube className="h-5 w-5" />
                                                    <span className="sr-only">YouTube</span>
                                                </a>
                                                <a href="mailto:adamglagolaco@gmail.com" className="text-stone-500 hover:text-emerald-600 transition-colors">
                                                    <Mail className="h-5 w-5" />
                                                    <span className="sr-only">Email</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Building Discipline and Resilience
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-6 mt-12">Projects</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Code className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Building this website
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-6 mt-12">Learning</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Brain className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Impacts of AI on society
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Music className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Musical Instruments (Guitar, Piano)
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Atom className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Physics
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Quote className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Philosophy
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Dumbbell className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Physical Fitness
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start group">
                                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-50 transition-colors group-hover:bg-stone-900 group-hover:text-stone-50 dark:group-hover:bg-stone-50 dark:group-hover:text-stone-900">
                                            <Video className="h-3.5 w-3.5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                                                Video/Music Production
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-stone-500 mt-12 italic border-t border-stone-100 dark:border-stone-900 pt-6">
                                    Last updated: January 31, 2026
                                </p>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

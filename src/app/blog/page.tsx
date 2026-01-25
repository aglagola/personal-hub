import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="py-12 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
                    <Container>
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
                            Blog & Reflections
                        </h1>
                        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
                            Long-form thoughts on philosophy, technology, and the pursuit of excellence.
                        </p>
                    </Container>
                </section>

                <section className="py-12">
                    <Container>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <Card key={i} className="flex flex-col border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
                                    <CardHeader>
                                        <div className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-2">Category</div>
                                        <CardTitle className="text-xl">
                                            <Link href={`/blog/post-${i}`} className="hover:underline">
                                                The Title of Blog Post {i}
                                            </Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-stone-600 dark:text-stone-300 line-clamp-3 mb-4">
                                            A brief excerpt of the blog post goes here. It should be engaging and give the reader a reason to click through.
                                        </p>
                                        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-stone-500 dark:text-stone-400">
                                            <span>Jan {i + 10}, 2026</span>
                                            <span>5 min read</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

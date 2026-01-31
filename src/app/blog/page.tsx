import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import blogData from "@/content/blog/posts.json";

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
                            {Object.entries(blogData).map(([slug, post]) => (
                                <Card key={slug} className="flex flex-col border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
                                    <CardHeader>
                                        <div className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-2">{post.category}</div>
                                        <CardTitle className="text-xl">
                                            <Link href={`/blog/${slug}`} className="hover:underline">
                                                {post.title}
                                            </Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-stone-600 dark:text-stone-300 line-clamp-3 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto pt-4 flex items-center justify-between text-sm text-stone-500 dark:text-stone-400">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
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

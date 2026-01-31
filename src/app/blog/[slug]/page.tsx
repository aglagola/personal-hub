import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import blogData from "@/content/blog/posts.json";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = blogData[slug as keyof typeof blogData];

    if (!post) {
        // In a real app, you might want to show a custom 404
        return (
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <Container className="flex-1 py-24 text-center">
                    <h1 className="text-4xl font-serif mb-4">Post not found</h1>
                    <Link href="/blog" className="text-stone-500 hover:text-stone-900 underline">Return to blog</Link>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <article className="py-24">
                    <Container>
                        <div className="max-w-3xl mx-auto">
                            <Link href="/blog" className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 mb-8 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                            </Link>

                            <header className="mb-12">
                                <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 mb-4">
                                    {post.title}
                                </h1>
                                <time className="text-stone-500 dark:text-stone-400 font-medium">
                                    {post.date}
                                </time>
                            </header>

                            <div
                                className="prose prose-stone prose-lg dark:prose-invert"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </Container>
                </article>
            </main>
            <Footer />
        </div>
    );
}

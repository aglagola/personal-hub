import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Placeholder data - in a real app this would likely come from MDX files or a CMS
const posts = {
    "post-1": {
        title: "The Art of Discipline",
        date: "Jan 12, 2026",
        content: `
      <p>Discipline is often misunderstood as a form of punishment or self-restriction. We tend to view the disciplined person as someone who denies themselves the pleasures of life—someone who says "no" to the second slice of cake, "no" to sleeping in, "no" to the immediate gratification.</p>
      <p>But this view is inverted. Discipline is not about restriction; it is about freedom.</p>
      <h2>The Freedom of Structure</h2>
      <p>When you have discipline, you are free from the tyranny of your own impulses. You are free from the chaos of indecision. When you have a plan and the discipline to execute it, you remove the burden of constant negotiation with yourself.</p>
      <p>Jocko Willink famously says, "Discipline equals freedom." It sounds like a paradox, but it's the fundamental truth of high performance.</p>
      <h2>Building the Muscle</h2>
      <p>Start small. The goal isn't to become a Navy SEAL overnight. The goal is to keep promises to yourself. If you say you're going to wake up at 6 AM, do it. If you say you're going to write for 30 minutes, do it.</p>
      <p>Every time you keep a promise to yourself, you build trust. And that trust is the foundation of confidence.</p>
    `
    },
    "post-2": {
        title: "Minimalism in Code and Life",
        date: "Jan 15, 2026",
        content: `
      <p>We have a tendency to overcomplicate things. In software engineering, we add layers of abstraction "just in case." In life, we accumulate possessions "just in case."</p>
      <p>But complexity is the enemy of execution.</p>
      <h2>The Power of Subtraction</h2>
      <p>Antoine de Saint-Exupéry wrote: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."</p>
      <p>This applies to your codebase, your schedule, and your mind.</p>
    `
    }
};

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts[slug as keyof typeof posts];

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

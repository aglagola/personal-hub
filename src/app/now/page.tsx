import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

                                <h3>Current Focus</h3>
                                <ul>
                                    <li>Building a personal digital legacy.</li>
                                    <li>Training for a marathon.</li>
                                    <li>Reading "Meditations" by Marcus Aurelius.</li>
                                </ul>

                                <h3>Projects</h3>
                                <p>
                                    Working on a new SaaS product for developer productivity.
                                </p>

                                <h3>Learning</h3>
                                <p>
                                    Deep diving into systems programming and Rust.
                                </p>

                                <p className="text-sm text-stone-500 mt-12">
                                    Last updated: January 2026
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

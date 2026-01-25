import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="py-24">
                    <Container>
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                            {/* Content Column */}
                            <div className="prose prose-stone dark:prose-invert prose-lg">
                                <h1 className="font-serif text-4xl sm:text-5xl not-prose mb-8">About Adam</h1>

                                <p className="lead">
                                    I am a builder, thinker, and lifelong learner. My mission is to simplify the complex and build things that last.
                                </p>

                                <h2>My Story</h2>
                                <p>
                                    [Personal story placeholder] I started coding when I was... I realized that technology could...
                                </p>

                                <h2>Philosophy</h2>
                                <p>
                                    I believe in discipline, clarity, and continuous improvement. In a world of noise, I seek signal.
                                </p>

                                <h2>Experience</h2>
                                <ul>
                                    <li>Role at Company A</li>
                                    <li>Role at Company B</li>
                                </ul>

                                <h2>Contact</h2>
                                <p>
                                    The best way to reach me is via email at <a href="mailto:adamglagolaco@gmail.com" className="font-medium hover:underline">adamglagolaco@gmail.com</a> or on <a href="https://x.com/adamglagola" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-stone-900 dark:text-stone-50 hover:text-stone-600 dark:hover:text-stone-300 transition-all underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900 dark:hover:decoration-stone-50">X</a>.
                                </p>
                            </div>

                            {/* Image Column */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/about-profile.png"
                                    alt="Adam Glagola - About"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

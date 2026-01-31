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

                                <p className="lead text-2xl font-light italic text-stone-700 dark:text-stone-300">
                                    I am a receiver. My mission is to be a vessel of creation for the good of all consciousness.
                                </p>

                                <h2>My Story</h2>
                                <p>
                                    My Name is Adam Glagola. <br />
                                    Born on November 16th, 1990 in Chicago, Illinois.
                                </p>

                                <h2>Philosophy</h2>
                                <blockquote className="not-prose border-l-2 border-stone-900 dark:border-stone-50 pl-6 my-8 flex flex-col gap-4">
                                    <p className="text-xl italic leading-relaxed text-stone-800 dark:text-stone-200">
                                        "I try to remain receptive, and open to all possible outcomes in any given situation."
                                    </p>
                                    <p className="text-xl italic leading-relaxed text-stone-800 dark:text-stone-200">
                                        "I also tend to likeness of having a strong awareness as a foundation for life’s endeavors."
                                    </p>
                                </blockquote>

                                <h2>Experience</h2>
                                <div className="not-prose space-y-8 mt-8">
                                    <div className="group relative border-l border-stone-300 dark:border-stone-700 pl-6 pb-2 transition-colors hover:border-stone-900 dark:hover:border-stone-50">
                                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">Sr. Delivery Tech Arch Analyst</h3>
                                        <p className="text-lg text-stone-600 dark:text-stone-400">Accenture • 2015 — 2020</p>
                                    </div>

                                    <div className="group relative border-l border-stone-300 dark:border-stone-700 pl-6 pb-2 transition-colors hover:border-stone-900 dark:hover:border-stone-50">
                                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">Bachelor of Science Degree</h3>
                                        <p className="text-lg text-stone-600 dark:text-stone-400">Economics & MIS • Illinois State University</p>
                                    </div>

                                    <div className="group relative border-l border-stone-300 dark:border-stone-700 pl-6 pb-2 transition-colors hover:border-stone-900 dark:hover:border-stone-50">
                                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-50">NJCAA Division I Baseball</h3>
                                        <p className="text-lg text-stone-600 dark:text-stone-400">South Suburban College</p>
                                    </div>
                                </div>

                                <h2>Contact</h2>
                                <p>
                                    The best way to reach me is via email at <a href="mailto:adamglagolaco@gmail.com" className="font-medium hover:underline">adamglagolaco@gmail.com</a> or on <a href="https://x.com/adamglagola" target="_blank" rel="noopener noreferrer" className="font-bold text-xl text-stone-900 dark:text-stone-50 hover:text-stone-600 dark:hover:text-stone-300 transition-all underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900 dark:hover:decoration-stone-50">X</a>.
                                </p>
                            </div>

                            {/* Image Column */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src="/adam-about.jpg"
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

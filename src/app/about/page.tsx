import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="py-24">
                    <Container>
                        <div className="max-w-2xl mx-auto prose prose-stone dark:prose-invert">
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
                                The best way to reach me is via email at adam@example.com or on Twitter.
                            </p>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

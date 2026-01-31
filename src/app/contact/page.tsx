import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="py-24">
                    <Container>
                        <div className="max-w-xl mx-auto">
                            <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl mb-6">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-stone-600 dark:text-stone-400 mb-8">
                                Open to Collab, Discuss new Projects, Creative ideas, or Opportunities.
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                        <input type="text" id="name" className="flex h-10 w-full rounded-md border border-stone-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                        <input type="email" id="email" className="flex h-10 w-full rounded-md border border-stone-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your email" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-stone-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can I help you?" />
                                </div>

                                <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
                            </form>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

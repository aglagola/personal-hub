import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40 bg-stone-50 dark:bg-stone-950">
          <Container>
            <div className="flex flex-col items-start gap-8 max-w-2xl">
              <h1 className="font-serif text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-7xl">
                Adam Glagola
              </h1>
              <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-300">
                Builder, Thinker, Disciplined. <br />
                Exploring the intersection of technology, philosophy, and human potential.
                This is my digital headquarters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:bg-stone-950 dark:ring-offset-stone-950 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300"
                  />
                  <Button>Join the Community</Button>
                </div>
              </div>
              <p className="text-sm text-stone-500 dark:text-stone-400">
                Join 1,000+ others exploring growth and creation. No spam.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured / Philosophy Section */}
        <section className="py-24 border-t border-stone-200 dark:border-stone-800">
          <Container>
            <div className="mb-12">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
                Latest Reflections
              </h2>
              <p className="mt-2 text-stone-600 dark:text-stone-400">
                Thoughts on mindset, gym, and code.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Placeholder Blog Posts */}
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-transparent border-stone-200 dark:border-stone-800 shadow-none hover:bg-stone-100/50 dark:hover:bg-stone-900/50 transition-colors">
                  <CardHeader>
                    <div className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-2">Philosophy</div>
                    <CardTitle className="text-xl">The Art of Discipline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 dark:text-stone-300 line-clamp-3">
                      Discipline is not about punishment; it's about freedom. How structuring your day can liberate your mind.
                    </p>
                    <Link href={`/blog/post-${i}`} className="inline-flex items-center mt-4 text-sm font-medium text-stone-900 hover:underline dark:text-stone-50">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">View All Articles</Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}

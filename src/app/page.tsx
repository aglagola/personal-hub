import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { ArrowRight, Mail, Instagram, Youtube, Linkedin } from "lucide-react";
import { XIcon } from "@/components/ui/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-stone-50 dark:bg-stone-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-stone-400 opacity-20 blur-[100px] dark:bg-indigo-900/30"></div>
          </div>

          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 max-w-2xl mx-auto lg:mx-0">
                <h1 className="font-serif text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-7xl">
                  Adam Glagola
                </h1>
                <p className="text-xl leading-relaxed text-stone-600 dark:text-stone-300">
                  Builder, Thinker, Disciplined. <br />
                  Exploring the intersection of technology, philosophy, and human potential.
                  This is my digital headquarters.
                </p>

                <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
                  <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-stone-200/50 dark:shadow-none hover:shadow-xl transition-all hover:-translate-y-0.5 bg-stone-900 text-white dark:bg-stone-50 dark:text-stone-900">
                    <Link href="/projects">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800">
                    <Link href="/about">
                      About Me
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center lg:justify-start">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:bg-stone-950 dark:ring-offset-stone-950 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300"
                    />
                    <Button>Join the Community</Button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-6 mt-2 justify-center lg:justify-start">
                  <a href="https://www.instagram.com/adamglagola" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-transform hover:scale-110">
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/@AdamGlagola-o3" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 transition-transform hover:scale-110">
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>
                  <a href="https://www.linkedin.com/in/adam-g-2b015579/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-transform hover:scale-110">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="https://x.com/adamglagola" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-stone-700 dark:hover:text-stone-300 transition-transform hover:scale-110">
                    <XIcon className="h-6 w-6" />
                    <span className="sr-only">X (Twitter)</span>
                  </a>
                  <a href="mailto:adamglagolaco@gmail.com" className="text-emerald-600 hover:text-emerald-700 transition-transform hover:scale-110">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>

                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Join 1,000+ others exploring growth and creation. No spam.
                </p>
              </div>

              {/* Hero Image */}
              <div className="relative mx-auto aspect-square w-full max-w-[400px] lg:max-w-[500px] overflow-hidden rounded-2xl shadow-2xl shadow-stone-200 dark:shadow-none grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/adam-hero.jpg"
                  alt="Adam Glagola - Builder & Thinker"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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

import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import projectsData from "@/content/projects/projects.json";

export default function ProjectsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
                <section className="py-12 bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800">
                    <Container>
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl">
                            Projects
                        </h1>
                        <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
                            A collection of experiments, products, and open source contributions.
                        </p>
                    </Container>
                </section>

                <section className="py-12">
                    <Container>
                        <div className="grid gap-6">
                            {projectsData.map((project, i) => (
                                <div key={i} className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start border border-stone-200 dark:border-stone-800 rounded-lg p-8 hover:bg-stone-50 dark:hover:bg-stone-900/50 transition-colors">
                                    <div>
                                        <div className="aspect-video w-full rounded-md bg-stone-200 dark:bg-stone-800 object-cover flex items-center justify-center text-stone-400">
                                            <span>Image Placeholder</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col h-full">
                                        <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-50 mb-2">{project.title}</h2>
                                        <p className="text-stone-600 dark:text-stone-300 mb-6 flex-1">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-4">
                                            {project.links.github && (
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={project.links.github} className="flex items-center gap-2">
                                                        <Github className="w-4 h-4" /> Code
                                                    </Link>
                                                </Button>
                                            )}
                                            {project.links.live && (
                                                <Button size="sm" asChild>
                                                    <Link href={project.links.live} className="flex items-center gap-2">
                                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    );
}

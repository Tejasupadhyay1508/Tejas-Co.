"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { About } from "@/components/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/50 bg-card/40 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-10 space-y-4">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              More about me
            </p>
            <h1 className="text-4xl font-bold">About Tejas Upadhyay</h1>
            <p className="text-muted-foreground max-w-2xl">
              A deeper dive into my background, what motivates me, and the principles that guide my work.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <About />

        <section className="bg-card/40 border border-card-border rounded-3xl p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">What drives me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I enjoy solving complex problems, crafting experiences that feel effortless, and learning new technologies that
            expand what&apos;s possible. Curiosity keeps me experimenting, and collaboration keeps me grounded.
          </p>
        </section>
      </main>
    </div>
  );
}

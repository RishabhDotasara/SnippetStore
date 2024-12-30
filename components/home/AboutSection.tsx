"use client"
import { Code2, Share2, Tags } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col cursor-pointer items-center p-8 text-center group hover:bg-primary-500/5 dark:hover:bg-primary-500/10 rounded-xl transition-all duration-300">
      <div className="mb-6 p-4 rounded-full bg-primary-500/10 dark:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-primary-500 dark:text-primary-400">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground/80 dark:text-muted-foreground/70">
        {description}
      </p>
    </div>
  );
}

function Quote() {
  return (
    <figure className="max-w-lg mx-auto my-12 text-center italic">
      <blockquote className="text-lg text-muted-foreground/90">
      &quot;Great code deserves to be shared&quot;
      </blockquote>
    </figure>
  );
}

export function AboutSection() {
  return (
    <section className="py-32 border-t border-border dark:border-gray-600 dark:text-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-primary-500 to-primary-500/70 dark:from-primary-400 dark:to-primary-400/70 bg-clip-text text-transparent">
            Share Code Snippets
          </span>
        </h2>
        <Quote />
      </div>
      
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto px-8">
        <FeatureCard
          icon={<Code2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />}
          title="Beautiful Sharing"
          description="Syntax highlighting that makes your code shine"
        />
        <FeatureCard
          icon={<Tags className="w-6 h-6 text-primary-500 dark:text-primary-400" />}
          title="Smart Tags"
          description="Organize and discover trending snippets"
        />
        <FeatureCard
          icon={<Share2 className="w-6 h-6 text-primary-500 dark:text-primary-400" />}
          title="Easy Collaboration"
          description="Share instantly with your team"
        />
      </div>
    </section>
  );
}
import { Github, Linkedin, Twitter } from "lucide-react";

export const ConnectSection = () => {
  return (
    <section id="connect" className="py-24 px-4 bg-secondary/40">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let’s <span className="text-primary">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Follow me on social media or explore my work online.
        </p>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/anujkcs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://x.com/anujkvcs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/anujkvcs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-4 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Github />
          </a>
        </div>
      </div>
    </section>
  );
};

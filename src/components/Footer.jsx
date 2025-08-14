import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card border-t border-border mt-12 flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Anuj Verma. All rights reserved.
            </p>
            <div className="flex items-center gap-4 ml-auto">
                <a
                    href="https://github.com/anujkvcs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="#hero"
                    aria-label="Back to top"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                >
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
    );
};

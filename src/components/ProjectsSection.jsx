import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Conference Expense Planner",
    description: "Plan and track conference expenses easily with a responsive UI and intuitive features.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://conference-event-planner-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Little Lemon Restaurant",
    description: "A responsive frontend restaurant website designed for Little Lemon using modern web technologies. Built with HTML5, CSS3, JavaScript (ES6+), JSX, and React.js, the site features interactive components, reusable layouts, and a clean user interface to showcase the restaurant's menu, booking form, and branding effectively.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "JavaScript", "CSS"],
    demoUrl: "https://little-lemon-rho-three.vercel.app/",
  },
];

export const ProjectsSection = () => {
  return (
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one is crafted with performance, design, and user experience in mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                          <span
                              key={`${project.id}-${index}`}
                              className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                          >
                      {tag}
                    </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                    <div className="flex justify-start items-center">
                      <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

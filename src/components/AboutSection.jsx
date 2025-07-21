import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Full Stack Developer | Tech Enthusiast | Lifelong Learner
              </h3>

              <p className="text-muted-foreground">
                I am Anuj Kumar Verma, a certified Full Stack Software Engineer with credentials from Meta, and currently pursuing my Bachelor in Computer Science at University of the People.
              </p>

              <p className="text-muted-foreground">
                I specialize in building dynamic, scalable web applications using modern tools like React, Django, and SQL. I thrive on turning complex problems into intuitive digital solutions and enjoy collaborating on projects that make real-world impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  Get In Touch
                </a>


              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Building responsive, full-stack applications using React, Django, and REST APIs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Creating clean, user-centric interfaces with a focus on accessibility and interaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Project Experience</h4>
                    <p className="text-muted-foreground">
                      Built and deployed real-world apps including booking systems, portfolios, and full-stack solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

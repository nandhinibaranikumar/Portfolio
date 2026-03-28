import { motion } from "framer-motion";
import { Code2, GraduationCap, Languages, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-8 text-white shadow-[var(--shadow-elegant)]">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/55">Profile Snapshot</p>
                    <h3 className="mt-3 text-3xl font-bold">{personal.name}</h3>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Code2 className="mb-3 h-5 w-5 text-white/80" />
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">Focus</p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Full-stack learning, software fundamentals, and practical project building.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <GraduationCap className="mb-3 h-5 w-5 text-white/80" />
                    <p className="text-xs uppercase tracking-[0.25em] text-white/45">Current Path</p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Growing through academic work, certifications, and hands-on development.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/45">Current Goal</p>
                  <p className="mt-3 text-base leading-7 text-white/85">
                    Build meaningful software, strengthen problem-solving skills, and turn learning into real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">{personal.aboutHeading}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personal.aboutIntro}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {personal.aboutBody}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {personal.aboutOutro}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-3 rounded-lg bg-card border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold">{personal.location}</p>
              </div>
              <div className="p-2 rounded-lg bg-card border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-semibold text-sm break-all">{personal.email}</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5" />
                <h4 className="font-semibold">Languages</h4>
              </div>
              <div className="space-y-3">
                {personal.languages.map((language) => (
                  <div key={language.name} className="flex items-center justify-between text-sm">
                    <span>{language.name}</span>
                    <span className="font-medium text-muted-foreground">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

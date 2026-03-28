import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6"
        >
          {portfolioData.education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover-lift bg-card shadow-[var(--shadow-elegant)] border-border/50 group">
                <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:bg-foreground/10 transition-colors duration-300">
                  <GraduationCap className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground font-medium mb-4">
                  {edu.year}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

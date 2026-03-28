import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Award, Trophy, Star, Target } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    "achievement-1": Trophy,
    "achievement-2": Award,
    "achievement-3": Star,
    "achievement-4": Target,
  } as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my professional journey
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.key];

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full text-center hover-lift bg-card shadow-[var(--shadow-elegant)] border-border/50 group">
                  <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-foreground/10 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

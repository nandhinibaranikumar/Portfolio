import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { portfolioData } from "@/data/portfolioData";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Add your verified certifications, workshops, or training credentials here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.certifications.map((certification) => (
            <motion.div
              key={`${certification.title}-${certification.year}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-border/50 shadow-sm hover-lift">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{certification.year}</p>
                <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
                <p className="text-muted-foreground mb-6">{certification.issuer}</p>
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

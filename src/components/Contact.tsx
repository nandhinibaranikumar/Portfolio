import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Contact = () => {
  const { personal, social } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project, role, or collaboration in mind? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card shadow-[var(--shadow-elegant)] border-border/50 h-full">
              <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {personal.availability} If you have an internship, freelance project, or
                collaboration in mind, I would love to hear from you.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-muted-foreground">{personal.location}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-black text-white border-black shadow-[var(--shadow-elegant)] h-full">
              <h3 className="text-2xl font-semibold mb-4">Quick Actions</h3>
              <p className="text-white/70 mb-6">
                Keep these links updated so recruiters can reach you and review your work fast.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-white text-black hover:bg-white/90" asChild>
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Open Resume
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

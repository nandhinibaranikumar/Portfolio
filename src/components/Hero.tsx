import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Hero = () => {
  const { personal, social } = portfolioData;
  const firstLine = personal.role;
  const secondLine = personal.secondaryRole;
  const [typedFirstLine, setTypedFirstLine] = useState("");
  const [typedSecondLine, setTypedSecondLine] = useState("");
  const [isTypingFirstLine, setIsTypingFirstLine] = useState(true);

  useEffect(() => {
    let index = 0;
    setTypedFirstLine("");
    setTypedSecondLine("");
    setIsTypingFirstLine(true);

    const interval = window.setInterval(() => {
      index += 1;
      if (index <= firstLine.length) {
        setTypedFirstLine(firstLine.slice(0, index));
        setIsTypingFirstLine(true);
      } else {
        const secondIndex = index - firstLine.length;
        setTypedSecondLine(secondLine.slice(0, secondIndex));
        setIsTypingFirstLine(false);
      }

      if (index >= firstLine.length + secondLine.length) {
        window.clearInterval(interval);
      }
    }, 45);

    return () => window.clearInterval(interval);
  }, [firstLine, secondLine]);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white mb-4">
              {personal.welcomeText}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {personal.name}
            </h1>
            <div className="text-lg md:text-2xl font-medium text-white mb-4 min-h-[5rem]">
              <p>
                {typedFirstLine}
                {isTypingFirstLine && <span className="ml-1 inline-block animate-pulse">|</span>}
              </p>
              <p>
                {typedSecondLine}
                {!isTypingFirstLine && <span className="ml-1 inline-block animate-pulse">|</span>}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-white mb-8">
              <MapPin className="w-4 h-4" />
              <span>{personal.location}</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-white/30 bg-transparent text-white hover:bg-white hover:text-black font-semibold px-8 py-6 text-base rounded-xl"
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 px-6 py-6 rounded-xl"
                asChild
              >
                <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-5"
            >
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-white/75 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-white/40 font-mono">
                {personal.heroCode.fileName}
              </span>
            </div>
            <pre className="p-6 text-sm leading-7 text-white/80 overflow-x-auto font-mono">
              {personal.heroCode.snippet}
            </pre>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

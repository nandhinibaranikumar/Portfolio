import { portfolioData } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-sm tracking-[0.25em] uppercase text-white/60">
            {portfolioData.personal.name}
          </p>
          <p className="text-sm text-white/80">&copy; {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

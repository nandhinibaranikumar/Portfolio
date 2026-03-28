export const portfolioData = {
  site: {
    title: "Nandhini Sri | Portfolio",
    description: "Nandhini Sri Portfolio",
    author: "Nandhini Sri",
    ogTitle: "Nandhini Sri | Portfolio",
    ogDescription:
      "Portfolio of Nandhini Sri, a Computer Science student and aspiring software developer.",
  },
  personal: {
    name: "Nandhini Baranikumar",
    initials: "NBK",
    role: "Computer Science Student",
    secondaryRole: "Aspiring Software Developer",
    tagline:
      "Focused on building clean web experiences, strengthening problem-solving skills, and growing through real projects.",
    welcomeText: "Hello, I'm",
    aboutHeading: "About Me",
    aboutIntro:
      "I am a B.Sc Computer Science student passionate about programming, full-stack development, and building meaningful software solutions.",
    aboutBody:
      "I enjoy learning modern technologies and applying them to real-world problems through practical, user-focused projects.",
    aboutOutro:
      "My goal is to grow as a software developer while contributing innovative and impactful solutions in the tech industry.",
    location: "Chennai, India",
    email: "nandhinibaranikumar@gmail.com",
    resumeUrl: "/resume.pdf",
    availability:
      "I am currently looking for opportunities to grow as a developer and open to internships, collaborations, and discussions.",
    languages: [
      { name: "Tamil", level: "Native" },
      { name: "English", level: "Professional" },
    ],
    heroCode: {
      fileName: "developer.ts",
      snippet: `const developer = {
  name: "Nandhini sri B",
  role: "Computer Science Student",
  location: "Chennai, India",
  skills: ["Java", "Python", "C++",
           "HTML", "CSS", "Bootstrap"],
  isPassionate: () => true
};`,
    },
  },
  social: {
    github: "https://github.com/nandhinibaranikumar",
    linkedin: "https://www.linkedin.com/in/nandhinibaranikumar/",
  },
  skills: [
    {
      key: "frontend",
      title: "Programming Languages",
      description: "Core languages I use for problem solving and development",
      skills: ["Java", "Python", "C++"],
    },
    {
      key: "backend",
      title: "Web Technologies",
      description: "Building responsive interfaces with web fundamentals",
      skills: ["HTML", "CSS", "Bootstrap"],
    },
    {
      key: "database",
      title: "Development",
      description: "Foundations for full-stack and software engineering work",
      skills: ["Full Stack Development Basics", "Database Management", "Computer Architecture"],
    },
    {
      key: "soft",
      title: "Tools & Soft Skills",
      description: "Tools and teamwork skills that support my workflow",
      skills: ["Git", "GitHub", "Problem Solving", "Communication", "Teamwork"],
    },
  ],
  projects: [
    {
      title: "SustainHire",
      description:
        "A full-stack platform that connects students with sustainability-focused internships.",
      techStack: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Netlify",
        "Render",
      ],
      github: "https://github.com/nandhinibaranikumar",
      demo: "https://sustainhiresoftware.netlify.app/",
    },
  ],
  education: [
    {
      degree: "B.Sc Computer Science",
      institution: "M.O.P. Vaishnav College for Women (Autonomous), Chennai",
      year: "Present",
      description:
        "Focused on computer science fundamentals, programming, databases, and software development.",
      highlights: ["CGPA: 9.35"],
    },
    {
      degree: "Higher Secondary Education",
      institution: "Velammal Matriculation Higher Secondary School, Chennai",
      year: "2022 - 2024",
      description:
        "Completed higher secondary education with strong academic performance.",
      highlights: ["Percentage: 93.7%"],
    },
  ],
  achievements: [
    {
      key: "achievement-1",
      title: "Academic Excellence",
      description: "Maintained strong academic performance with 9.35 CGPA in B.Sc Computer Science.",
      year: "Present",
    },
    {
      key: "achievement-2",
      title: "Full Stack Learning",
      description: "Actively learning full-stack development and building practical software projects.",
      year: "2024",
    },
    {
      key: "achievement-3",
      title: "Software Project Development",
      description: "Passionate about building real-world software applications.",
      year: "2024",
    },
    {
      key: "achievement-4",
      title: "Continuous Improvement",
      description: "Continuously improving programming and development skills.",
      year: "Ongoing",
    },
  ],
  certifications: [
    {
      title: "Digital Application Fundamentals - STEM",
      issuer: "NASSCOM",
      year: "2026",
      credentialUrl: "/certificates/digital-application-fundamentals.pdf",
    },
    {
      title: "Google Cloud - Generative AI",
      issuer: "NASSCOM",
      year: "2025",
      credentialUrl: "/certificates/google-cloud-generative-ai.pdf",
    },
    {
      title: "Python Certification",
      issuer: "NIIT Anna Nagar",
      year: "2025",
      credentialUrl: "/certificates/python-certificate.pdf",
    },
    {
      title: "MySQL Certification",
      issuer: "NIIT Anna Nagar",
      year: "2025",
      credentialUrl: "/certificates/mysql-certificate.pdf",
    },
    {
      title: "Java Certification",
      issuer: "NIIT Anna Nagar",
      year: "2026",
      credentialUrl: "/certificates/java-certificate.pdf",
    },
  ],
} as const;

import { motion } from "framer-motion";

const projects = [
  {
    title: "Zynk",
    description: "Sync with the city. A platform to connect with local events and activities.",
    status: "Built 🔥",
    tech: ["React", "Standard CSS", "Node.js", "MongoDB", "Express", "Axios", "Nodemailer"],
    badge: "Coming Soon",
    github: "https://github.com/manyaa-fr/Zynk.git",
    live: "https://zynk-self.vercel.app/",
  },
  {
    title: "SpookySeekers",
    description: "Ghost stories platform with Express + MongoDB. Post, like, comment, and get haunted 👻",
    status: "Built 🔥",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    badge: "Live",
    github: "https://github.com/kalviumcommunity/S84_SpookySeekers.git",
    live: null,
  },
  {
    title: "Netflix Home Page Clone",
    description: "A HTML + CSS powered Netflix-inspired platform with responsive UI.",
    status: "Built 🔥",
    tech: ["HTML", "CSS"],
    badge: "Live",
    github: "https://github.com/manyaa-fr/Netflix-clone.git",
    live: "https://netflix-clone-chi-ebon.vercel.app/",
  }];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Projects = () => {
  const handleCardClick = (project) => {
    if (project.live) {
      window.open(project.live, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-8 bg-[#d1bfa7]"
    >
      {/* Full-width container */}
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl font-serif text-[#49494b] mb-12 text-center">
          My Projects
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              onClick={() => handleCardClick(project)}
              className={`bg-[#f8f5f0] rounded-lg shadow-md hover:shadow-lg border border-[#bd8c7d]/30 p-6 text-left transition-all ${
                project.live 
                  ? 'cursor-pointer hover:scale-105 hover:border-[#bd8c7d]/50 active:scale-95' 
                  : 'cursor-default'
              }`}
              style={{ 
                cursor: project.live ? 'pointer' : 'default',
                userSelect: 'none'
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-[#bd8c7d]">
                  {project.title}
                </h3>
                {project.live && (
                  <span className="text-xs text-[#bd8c7d] opacity-70">
                    Click to visit →
                  </span>
                )}
              </div>
              <p className="text-[#8e8e90] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#bd8c7d]/10 text-[#49494b] px-3 py-1 text-sm rounded-full border border-[#bd8c7d]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
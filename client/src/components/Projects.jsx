import { motion } from "framer-motion";

const projects = [
  {
    title: "Netflix Clone",
    description: "A HTML + CSS powered Netflix-inspired platform with responsive UI.",
    status: "Built 🔥",
    tech: ["HTML", "CSS"],
    badge: "Live",
    github: "https://github.com/manyaa-fr/Netflix-clone.git",
    live: "https://netflix-clone-chi-ebon.vercel.app/",
  },
  {
    title: "SpookySeekers",
    description: "Ghost stories platform with Express + MongoDB. Post, like, comment, and get haunted 👻",
    status: "Built 🔥",
    tech: ["React", "Node.js", "MongoDB"],
    badge: "Live",
    github: "https://github.com/kalviumcommunity/S84_SpookySeekers.git",
    live: null,
  },
  {
    title: "REITrade",
    description: "REITrade is an upcoming platform where real estate meets real-time trading. A dashboard-first experience designed to simplify and democratize property investing — just like trading stocks.",
    status: "Under Construction",
    tech: ["React", "Node.js", "MongoDB", "Tailwind", "WebSockets"],
    badge: "Coming Soon",
    github: null,
    live: null,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Projects = () => {
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
              className="bg-[#f8f5f0] rounded-lg shadow-md hover:shadow-lg border border-[#bd8c7d]/30 p-6 text-left transition-all"
            >
              <h3 className="text-2xl font-semibold mb-3 text-[#bd8c7d]">
                {project.title}
              </h3>
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
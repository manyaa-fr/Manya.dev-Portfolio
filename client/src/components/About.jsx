import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center px-8 py-20 bg-[#f8f5f0] relative overflow-hidden"
    >
      {/* Soft background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#bd8c7d]/10 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-[#d1bfa7]/20 blur-xl"></div>
      </div>

      {/* Content container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Section title */}
        <motion.h2
          className="text-4xl md:text-5xl font-serif font-bold text-[#49494b] mb-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          About <span className="text-[#bd8c7d]">Me</span>
        </motion.h2>

        {/* Content card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg border border-[#bd8c7d]/20">
          <motion.p
            className="text-lg md:text-xl text-[#49494b] leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm <span className="text-[#bd8c7d] font-semibold">Manya</span>, a passionate full-stack developer who blends{" "}
            <span className="text-[#bd8c7d] font-medium">aesthetics</span> with{" "}
            <span className="text-[#8e8e90] font-medium">functionality</span>.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-[#49494b] leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Whether it's building spooky platforms <span className="text-xl">👻</span>, car enthusiast hubs{" "}
            <span className="text-xl">🚗</span>, or Netflix clones{" "}
            <span className="text-xl">🎬</span> — I love crafting smooth, scrollable, animated digital stories.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-12 h-px bg-[#bd8c7d]/50"></div>
            <span className="text-[#8e8e90] text-sm">Currently working on</span>
            <div className="w-12 h-px bg-[#bd8c7d]/50"></div>
          </motion.div>

          <motion.p
            className="text-center mt-4 text-[#49494b] font-medium"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-[#bd8c7d]">ChaoSpeed</span> + battling OneDrive{" "}
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              🫠
            </motion.span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
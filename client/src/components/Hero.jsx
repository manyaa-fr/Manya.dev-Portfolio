import { motion, useMotionValue, useTransform } from "framer-motion";
import me from "../assets/me.jpg";

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Create 3D parallax effects
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  const textX = useTransform(x, [-100, 100], [-5, 5]);
  const textY = useTransform(y, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center px-8 bg-[#0a0a0a] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#bd8c7d] opacity-20"
            style={{
              width: Math.random() * 10 + 1,
              height: Math.random() * 10 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              x: useTransform(x, [-100, 100], [Math.random() * 20 - 10, Math.random() * 20 - 10]),
              y: useTransform(y, [-100, 100], [Math.random() * 20 - 10, Math.random() * 20 - 10]),
            }}
          />
        ))}
      </div>

      {/* Floating 3D content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Text content with parallax */}
        <motion.div 
          className="md:w-1/2 text-left"
          style={{
            x: textX,
            y: textY,
          }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#bd8c7d] to-[#d1bfa7]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-white">Manya</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#8e8e90] mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-white">Crafting experiences that </span>
            <span className="text-[#d1bfa7]">hit</span>
            <span className="text-white"> harder than a V8.</span>
          </motion.p>

          <motion.a
            href="#projects"
            className="inline-flex items-center gap-3 group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-2xl text-[#bd8c7d] font-medium border-b-2 border-[#bd8c7d] pb-1">
              View My Work
            </span>
            <motion.span
              className="text-3xl text-[#d1bfa7]"
              animate={{
                x: [0, 8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* 3D floating image */}
        <motion.div
          className="md:w-1/2 relative"
          style={{
            rotateX,
            rotateY,
          }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Floating image with glow */}
            <motion.div
              className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#bd8c7d]/50 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={me} 
                alt="Manya" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#bd8c7d]/20 pointer-events-none"
              style={{
                scale: 1.1,
                rotateX: useTransform(rotateX, val => val * 0.5),
                rotateY: useTransform(rotateY, val => val * 0.5),
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-[#d1bfa7]/10 pointer-events-none"
              style={{
                scale: 1.2,
                rotateX: useTransform(rotateX, val => val * 0.3),
                rotateY: useTransform(rotateY, val => val * 0.3),
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute bottom-10 left-10 text-4xl text-[#bd8c7d]/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"</>"}
      </motion.div>
    </section>
  );
};

export default Hero;
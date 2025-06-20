import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#f8f5f0]/90 backdrop-blur-md shadow-sm" : "bg-[#f8f5f0]/70 backdrop-blur-sm"}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with subtle shine effect */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-serif font-bold tracking-wider text-[#49494b]"
        >
          <span className="text-[#bd8c7d]">M</span>anya.dev
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <motion.a
                href={item.link}
                className="relative px-3 py-2 text-[#49494b] font-medium"
                whileHover={{ color: "#bd8c7d" }}
              >
                {item.name}
                <motion.span
                  layoutId={`nav-underline-${index}`}
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-[#bd8c7d] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div className="space-y-1.5">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#49494b]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#49494b]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#49494b]"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f8f5f0] shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={item.link}
                    className="block py-2 text-[#49494b] hover:text-[#bd8c7d] transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
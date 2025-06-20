import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center p-8 bg-[#d1bfa7]">
      {/* Full-width container */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        {/* Content card */}
        <div className="bg-[#f8f5f0] rounded-lg shadow-xl p-12 border border-[#bd8c7d]/30">
          <h2 className="text-4xl font-serif text-[#49494b] mb-6 text-center">
            Let's Connect
          </h2>
          
          <p className="text-lg text-[#8e8e90] mb-10 text-center max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              { icon: FaEnvelope, link: "mailto:manya002408@gmail.com" },
              { icon: FaGithub, link: "https://github.com/manyaa-fr" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/in/manya-behl-782261306/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                whileHover={{ y: -5 }}
                className="text-[#49494b] hover:text-[#bd8c7d] text-2xl transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Email button */}
          <div className="text-center">
            <motion.a
              href="mailto:manya002408@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-[#bd8c7d] text-white px-8 py-3 rounded-full font-medium text-lg shadow-md hover:shadow-lg transition-all"
            >
              Send Message
              <FaPaperPlane className="ml-1" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
import { motion } from "framer-motion"
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa"

const socialLinks = [
  { icon: FaTwitter, url: "https://twitter.com/compose101" },
  { icon: FaGithub, url: "https://github.com/compose101" },
  { icon: FaDiscord, url: "https://discord.gg/compose101" },
]

const SocialLinks = () => {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Stay Connected</h2>
      <div className="flex justify-center space-x-8">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-purple-400 transition-colors duration-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <link.icon />
          </motion.a>
        ))}
      </div>
    </section>
  )
}

export default SocialLinks


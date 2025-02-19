import { motion, useScroll, useTransform } from "framer-motion"

const features = [
  { title: "AI-Powered Composition", description: "Create stunning content with the help of advanced AI" },
  { title: "Real-Time Collaboration", description: "Work together seamlessly with your team, anywhere, anytime" },
  { title: "Cross-Platform Sync", description: "Access your work from any device, always in perfect sync" },
  { title: "Advanced Analytics", description: "Gain insights into your creative process and productivity" },
]

const FeaturesPreview = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <div className="w-full h-full bg-gradient-to-t from-transparent to-black opacity-50" />
      </motion.div>
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">What's Coming?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesPreview


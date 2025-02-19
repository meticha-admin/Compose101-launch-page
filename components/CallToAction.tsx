import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { createClient } from "@supabase/supabase-js"

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL || "",
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
// )

const CallToAction = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: { email: string }) => {
    try {
      // const { error } = await supabase.from("waitlist").insert([{ email: data.email }])

      // if (error) throw error

      alert("Thank you for joining the waitlist!")
      reset()
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
    <section className="py-16 px-4">
      <motion.div
        className="max-w-md mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Join the Waitlist</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
          </div>
          <motion.button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Early Access
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default CallToAction


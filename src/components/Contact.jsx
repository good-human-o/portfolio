// src/components/Contact.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // Simulate message sending
    setTimeout(() => {
      console.log("Message Sent:", data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-6 bg-black text-white text-center overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-cyan-500/10 via-pink-500/10 to-green-400/10 blur-3xl" />

      <motion.div
        className="z-10 relative max-w-md mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8 font-orbitron">Contact Me</h2>

        <form onSubmit={handleSubmit(onSubmit)} 
        className="space-y-5 text-left" 
        action="https://formspree.io/f/xdkebrjj" 
        method="POST">
          <div>
            <label className="text-sm text-cyan-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              {...register("name", { required: true })}
              className="w-full bg-black border border-cyan-400 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition"
            />
            {errors.name && <p className="text-pink-400 text-sm mt-1">Name is required.</p>}
          </div>

          <div>
            <label className="text-sm text-cyan-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full bg-black border border-cyan-400 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition"
            />
            {errors.email && <p className="text-pink-400 text-sm mt-1">Valid email required.</p>}
          </div>

          <div>
            <label className="text-sm text-cyan-300">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Your message..."
              {...register("message", { required: true })}
              className="w-full bg-black border border-cyan-400 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none transition"
            ></textarea>
            {errors.message && <p className="text-pink-400 text-sm mt-1">Message is required.</p>}
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-xl font-bold transition duration-300 ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-cyan-400 text-black hover:bg-pink-500 hover:text-white shadow-md shadow-cyan-500/30"
              }`}
            >
              {isSubmitting ? "Transmitting..." : "Send Message 🚀"}
            </button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-cyan-300 font-mono"
              >
                ✔ Message sent successfully. Transmission complete.
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

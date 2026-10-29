
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Tailored Solutions",
    description:
      "Digital solutions designed around your business goals, needs, and vision.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "Modern tools and scalable architecture to support your digital growth.",
  },
  {
    number: "03",
    title: "User-Centric Design",
    description:
      "Clean, intuitive interfaces that create smooth and engaging user experiences.",
  },
  {
    number: "04",
    title: "Quality & Reliability",
    description:
      "A focus on performance, maintainability, and attention to detail.",
  },
  {
    number: "05",
    title: "Transparent Communication",
    description:
      "Clear communication and collaboration throughout every project.",
  },
  {
    number: "06",
    title: "Growth-Focused Approach",
    description:
      "Technology choices that help your business evolve and move forward.",
  },
];

export default function WhyAshvera() {
  return (
    <section
      id="why-ashvera"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Why <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ashvera?</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            We combine technology, creativity, and strategic thinking to turn
            your ideas into meaningful digital experiences.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/[0.05]"
            >
              <span className="mb-6 inline-flex text-sm font-bold tracking-widest text-cyan-400">
                {reason.number}
              </span>

              <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                {reason.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {reason.description}
              </p>

              <div className="mt-6 h-px w-12 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.08] p-8 text-center md:p-12"
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Your Vision. Our Technology. Shared Success.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Have an idea or a business challenge? Let's explore how Ashvera
            Technology can help bring your vision to life.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}

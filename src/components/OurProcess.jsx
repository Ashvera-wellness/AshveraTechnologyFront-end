
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover & Strategize",
    description:
      "We learn about your goals, audience, challenges, and requirements to define a clear project roadmap.",
    points: ["Goal alignment", "Requirement gathering"],
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "We map out the user experience, technical architecture, and project plan before development begins.",
    points: ["UI/UX planning", "Technical strategy"],
  },
  {
    number: "03",
    title: "Develop & Test",
    description:
      "We build your solution with a focus on functionality, responsive design, performance, and quality.",
    points: ["Development", "Quality testing"],
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We prepare your project for launch and help keep it reliable with agreed maintenance and improvements.",
    points: ["Deployment", "Ongoing support"],
  },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#070b16] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            How We Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            A clear, collaborative journey that transforms your ideas into
            thoughtful, reliable digital solutions.
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line on larger screens */}
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/50 to-blue-500/10 lg:block" />

          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative"
            >
              <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-[#0b1425] text-lg font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                {step.number}
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-400/35 group-hover:bg-white/[0.045]">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-cyan-300">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-slate-400">
            Have a vision? We’ll help you plan the next step.
          </p>

          <a
            href="#contact"
            className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-105"
          >
            Start Your Project ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

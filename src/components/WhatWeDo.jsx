import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Responsive, modern websites built for performance, usability, and business growth.",
    tags: ["Responsive UI", "Performance", "SEO"],
  },
  {
    number: "02",
    icon: "⚙",
    title: "Custom Software",
    description:
      "Purpose-built software that streamlines workflows and addresses your unique business needs.",
    tags: ["Custom Apps", "Automation"],
  },
  {
    number: "03",
    icon: "✳",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and thoughtful user journeys that make every interaction feel effortless.",
    tags: ["UI Design", "User Experience"],
  },
  {
    number: "04",
    icon: "▣",
    title: "E-Commerce Solutions",
    description:
      "Flexible online shopping experiences designed to showcase products and simplify purchasing.",
    tags: ["Online Stores", "Integration"],
  },
  {
    number: "05",
    icon: "⌘",
    title: "API & Backend Development",
    description:
      "Reliable server-side systems and API integrations that connect your digital products.",
    tags: ["REST APIs", "Backend Systems"],
  },
  {
    number: "06",
    icon: "↗",
    title: "Maintenance & Optimization",
    description:
      "Ongoing improvements to website speed, reliability, and overall digital performance.",
    tags: ["Performance", "Support"],
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            What We Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Digital Solutions.
            <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Real Possibilities.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            We combine modern technology, thoughtful design, and practical
            problem-solving to turn your ideas into powerful digital products.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:bg-cyan-400/[0.04]"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.08] text-2xl text-cyan-300 transition duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                  {service.icon}
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-600">
                  {service.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                {service.title}
              </h3>

              <p className="mt-4 min-h-20 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-7 h-px w-10 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-400">
            Have a project in mind? Let’s discuss what’s possible.
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:scale-105"
          >
            Discuss Your Project ↗
          </a>
        </div>
      </div>
    </section>
  );
}

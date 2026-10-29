
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Business Website",
    description:
      "A modern, responsive website designed to strengthen a brand's online presence and generate customer inquiries.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
    demo: "#",
    code: "#",
  },
  {
    number: "02",
    category: "Business Solutions",
    title: "Admin Dashboard",
    description:
      "A clean dashboard concept for organizing business data, monitoring activity, and simplifying everyday workflows.",
    tech: ["React", "REST API", "Dashboard UI"],
    gradient: "from-violet-400/20 via-blue-500/10 to-transparent",
    demo: "#",
    code: "#",
  },
  {
    number: "03",
    category: "E-Commerce",
    title: "Online Store",
    description:
      "A shopping experience concept with product discovery, organized product pages, and a responsive layout.",
    tech: ["React", "API Integration", "Responsive UI"],
    gradient: "from-teal-400/20 via-cyan-500/10 to-transparent",
    demo: "#",
    code: "#",
  },
];

export default function Projects() {
  return (
    <section
      // id="projects"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Our Work
            </p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              Explore the kinds of digital experiences we create through
              thoughtful design, modern technology, and a focus on usability.
            </p>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-full border border-cyan-400/40 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Start a Project ↗
          </a>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
            >
              {/* Abstract project preview */}
              <div
                className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="relative w-[82%] rounded-xl border border-white/15 bg-[#080e1c]/90 p-4 shadow-2xl transition duration-500 group-hover:scale-105">
                  <div className="mb-4 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <div className="ml-3 h-2 w-2/5 rounded-full bg-white/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 h-14 rounded-lg bg-cyan-400/15" />
                    <div className="h-14 rounded-lg bg-blue-400/15" />
                    <div className="h-8 rounded-lg bg-white/[0.06]" />
                    <div className="h-8 rounded-lg bg-white/[0.06]" />
                    <div className="h-8 rounded-lg bg-white/[0.06]" />
                  </div>
                </div>

                <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-slate-300">
                  {project.number}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-5 border-t border-white/10 pt-5 text-sm">
                  <a
                    href={project.demo}
                    className="font-medium text-cyan-300 transition hover:text-white"
                  >
                    Live Preview ↗
                  </a>
                  <a
                    href={project.code}
                    className="font-medium text-slate-400 transition hover:text-white"
                  >
                    Source Code ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* <p className="mt-8 text-center text-xs leading-6 text-slate-500">
          Replace these sample concepts and placeholder links with your actual
          completed projects before publishing.
        </p> */}
      </div>
    </section>
  );
}


import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, LayoutDashboard, ShoppingBag } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Website Design & Development",
    title: "Corporate Business Website",
    description:
      "A premium business website that builds trust, showcases services, and helps turn visitors into potential customers.",
    features: [
      "Modern Brand Identity",
      "Mobile-Friendly Experience",
      "Lead Generation",
    ],
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    category: "Business Management",
    title: "Smart Admin Dashboard",
    description:
      "A centralized business dashboard that organizes important information, simplifies daily operations, and supports better decision-making.",
    features: [
      "Clear Data Overview",
      "Workflow Management",
      "Performance Tracking",
    ],
    gradient: "from-violet-400/20 via-blue-500/10 to-transparent",
    icon: LayoutDashboard,
  },
  {
    number: "03",
    category: "E-Commerce Solutions",
    title: "Online Shopping Experience",
    description:
      "An intuitive online store designed to showcase products, simplify shopping, and create a smooth customer journey from browsing to checkout.",
    features: [
      "Product Discovery",
      "Simple Checkout Journey",
      "Responsive Storefront",
    ],
    gradient: "from-teal-400/20 via-cyan-500/10 to-transparent",
    icon: ShoppingBag,
  },
];

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
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
              Ideas Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-400">
              We create thoughtful digital experiences that strengthen brands,
              simplify business operations, and help businesses connect with
              their customers.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 px-6 py-3 font-medium text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Start a Project
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05]"
              >
                {/* Visual Preview */}
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl border border-white/15 bg-[#080e1c]/80 shadow-2xl transition duration-500 group-hover:scale-110 group-hover:border-cyan-400/40">
                    <Icon
                      size={48}
                      strokeWidth={1.2}
                      className="text-cyan-300"
                    />
                  </div>

                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-slate-300">
                    {project.number}
                  </span>

                  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-snug transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Key Highlights
                    </p>

                    <ul className="space-y-3">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-slate-400"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/[0.08] to-cyan-400/[0.08] p-8 text-center sm:p-10"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">
            Have an Idea Worth Building?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Let's discuss your goals and create a digital solution tailored
            to your business needs.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Let's Work Together
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

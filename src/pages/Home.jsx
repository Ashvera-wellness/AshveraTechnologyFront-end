import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Rocket, Code2, Clock3, Headset } from "lucide-react";
import { Link } from "react-router-dom";
import WhyAshvera from "../components/WhyAshvera";
import Projects from "../components/Projects";
import WhatWeDo from "../components/WhatWeDo";
import OurProcess from "../components/OurProcess";
import FAQ from "../components/FAQ";

const highlights = [
  { Icon: Rocket, label: "Scalable Solutions" },
  { Icon: Code2, label: "Clean Code" },
  { Icon: Clock3, label: "On-Time Delivery" },
  { Icon: Headset, label: "Dedicated Support" },
];

export default function App() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#030914] text-white"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_42%,rgba(0,105,255,0.23),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_83%_88%,rgba(0,218,198,0.15),transparent_35%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="pointer-events-none absolute -right-36 top-32 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[110px]" />

      {/* Hero */}
      <section className="relative mx-auto grid min-h-[calc(100svh-94px)] max-w-[1540px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-2 lg:px-12 lg:py-8">
        {/* Decorative neon streaks */}
        <div className="pointer-events-none absolute right-[14%] top-[22%] -z-10 hidden h-[2px] w-[42%] rotate-[-24deg] glow-line opacity-80 lg:block" />
        <div className="pointer-events-none absolute right-[20%] top-[50%] -z-10 hidden h-[3px] w-[43%] rotate-[-12deg] glow-line opacity-70 lg:block" />

        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[720px] pt-3 lg:pt-0"
        >
          <p className="mb-6 flex flex-wrap items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-sm">
            <span>Build</span>
            <span>•</span>
            <span>Innovate</span>
            <span>•</span>
            <span>Grow</span>
            <span className="ml-1 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600" />
          </p>

          <h1 className="max-w-[720px] text-[clamp(2.6rem,5.2vw,5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
            Turning Your Ideas Into Powerful{" "}
            <span className="bg-gradient-to-r from-[#087BFF] via-[#05C8EF] to-[#20E4C2] bg-clip-text text-transparent">
              Digital Solutions.
            </span>
          </h1>

          <p className="mt-6 max-w-[590px] text-[15px] leading-7 text-slate-300 sm:text-[17px] sm:leading-[1.8]">
            We build custom software, modern web applications and scalable
            digital solutions that help businesses grow, operate smarter and
            stay ahead in the digital world.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <Link
              to="/contact"
              href="#contact"
              className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#087BFF] via-[#079BFA] to-[#2BE1CD] px-7 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,117,255,.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_38px_rgba(0,203,220,.25)]"
            >
              Discuss Your Project
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href="#services"
              className="group inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full border border-cyan-400/80 px-7 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/10"
            >
              Explore Our Services
              <ArrowRight
                size={20}
                className="text-cyan-300 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-4 xl:gap-x-7">
            {highlights.map(({ Icon, label }, i) => (
              <motion.div
                key={label}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1, duration: 0.45 }}
                className="flex items-center gap-2.5 whitespace-nowrap text-[11px] text-slate-300 sm:text-xs"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-400/80 text-cyan-300">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Laptop visual - no floating technology badges */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="relative flex min-h-[280px] items-center justify-center sm:min-h-[410px] lg:min-h-[600px]"
        >
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { scale: [1, 1.06, 1], opacity: [0.45, 0.75, 0.45] }
            }
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[16%] top-[20%] h-[55%] w-[65%] rounded-full bg-blue-500/20 blur-[75px]"
          />
          <div className="absolute inset-x-0 bottom-[12%] h-[24%] rounded-full bg-cyan-400/10 blur-[65px]" />
          <motion.img
            src="/images/ashvera-laptop.webp"
            alt="Laptop with code editor in a blue and teal illuminated workspace"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 max-h-[620px] w-full object-contain drop-shadow-[0_15px_40px_rgba(0,126,255,.18)]"
          />
        </motion.div>
      </section>

      {/* Minimal anchor sections so navbar and CTAs have meaningful destinations */}
      <section
        id="services"
        className="scroll-mt-8 border-t border-white/10 bg-[#050C18] px-5 py-16 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan-300"></p>
          <WhatWeDo />
        </div>
      </section>
      <section
        id="projects"
        className="scroll-mt-8 px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold"></h2>
          <Projects />
          <p className="mt-2 text-slate-400"></p>
        </div>
      </section>
      <section
        id="why-us"
        className="scroll-mt-8 bg-[#050C18] px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold"></h2>
          <WhyAshvera />
        </div>
      </section>
      <section id="process" className="scroll-mt-8 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold"></h2>
          <OurProcess />
        </div>
      </section>
      <section
        id="faq"
        className="scroll-mt-8 bg-[#050C18] px-5 py-12 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mt-2 text-slate-400"></p>
          <FAQ />
        </div>
      </section>
      <section id="contact" className="scroll-mt-8 px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-blue-950/60 to-teal-950/30 p-7 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-cyan-300">
            Let's talk
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>

          <Link
            to="/contact"
            href="ashveralegacies@gmail.com"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 px-6 py-3 font-semibold"
          >
            Contact Ashvera <ArrowRight size={18} />
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Email — ashveralegacies@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does Ashvera Technology offer?",
    answer:
      "We offer web development, custom software solutions, UI/UX design, e-commerce development, API integration, and website maintenance, depending on your project needs.",
  },
  {
    question: "How do I start a project with Ashvera?",
    answer:
      "Contact us with your idea, goals, and requirements. We'll discuss your needs, explore possible solutions, and outline the next steps.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the scope, features, complexity, and timeline. Once we understand your requirements, we can discuss an appropriate estimate.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines vary depending on the project's size and complexity. We'll establish a realistic schedule after reviewing the requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. We aim to create responsive websites that adapt to mobile phones, tablets, laptops, and desktop screens.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can help improve an existing website's design, usability, performance, and functionality based on your goals.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-launch maintenance and support can be discussed according to your project requirements and the agreed service plan.",
  },
  {
    question: "How can I contact Ashvera Technology?",
    answer:
      "Use the contact form on our website to share your project details and preferred contact information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p> */}

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Everything you need to know about working with Ashvera Technology.
            Can't find your answer? Get in touch with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-cyan-400/40 bg-cyan-400/[0.04]"
                    : "border-white/10 bg-white/[0.025] hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left md:px-7  "
                >
                  <span className="flex items-start gap-4">
                    <span className="mt-0.5 text-sm font-semibold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-medium leading-7  ${
                        isOpen ? "text-cyan-200" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 border-cyan-400/40 text-cyan-300"
                        : "text-slate-400"
                    }`}
                  >
                    {/* Horizontal line */}
                    <span className="absolute h-[1.5px] w-[9px] rounded-full bg-slate-400" />

                    {/* Vertical line */}
                    <span className="absolute h-[9px] w-[1.5px] rounded-full bg-slate-400" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/[0.07] px-6 pb-6 pt-4 pl-[4.25rem] text-sm leading-7 text-slate-400 md:px-7 md:pl-[4.75rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.07] to-blue-500/[0.07] p-8 text-center"
        >
          <h3 className="text-2xl font-semibold">Still have questions?</h3>

          <p className="mt-3 text-slate-400">
            Let's discuss your idea and find the right way forward.
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Contact Us ↗
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

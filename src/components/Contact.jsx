import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setStatus("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus("Your form is ready, but message delivery is not connected yet.");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050914] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Let's Start a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Have a project in mind? Share your ideas with us, and let's explore
            the possibilities together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold">Let's connect</h3>
            <p className="mt-4 leading-7 text-slate-400">
              Share your goals, ask a question, or tell us about a challenge
              you're looking to solve.
            </p>

            <div className="mt-9 space-y-6">
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="mt-1 break-all font-medium text-cyan-300">
                  ashveralegacies@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">What we value</p>
                <p className="mt-1 font-medium text-white">
                  Clear communication. Thoughtful solutions.
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Our approach</p>
                <p className="mt-1 font-medium text-white">
                  Understand. Build. Improve.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-5">
              <p className="font-medium text-cyan-200">
                Have an exciting idea?
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tell us what you're envisioning. We'll take it from there.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold">Send us a message</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fields marked * are required.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Full name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Email address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Service interested in
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 text-slate-300 outline-none focus:border-cyan-400"
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Custom Software</option>
                  <option>UI/UX Design</option>
                  <option>E-Commerce</option>
                  <option>API & Backend Development</option>
                  <option>Maintenance & Optimization</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-budget"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Estimated budget
                </label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 text-slate-300 outline-none focus:border-cyan-400"
                >
                  <option value="">Select a range</option>
                  <option>Under ₹10,000</option>
                  <option>₹10,000–₹30,000</option>
                  <option>₹30,000–₹75,000</option>
                  <option>₹75,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm text-slate-300"
              >
                Tell us about your project *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describe your idea, goals, or requirements..."
                className="w-full resize-y rounded-xl border border-white/10 bg-[#080e1c] px-4 py-3 outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/10"
            >
              Send Message ↗
            </button>

            {status && (
              <p role="status" className="mt-4 text-sm text-amber-300">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

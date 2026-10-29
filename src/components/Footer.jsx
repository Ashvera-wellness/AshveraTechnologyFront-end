import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Web Development",
  "Custom Software",
  "UI/UX Design",
  "E-commerce Solutions",
  "API Integration",
];

const quickLinks = [
  ["Home", "/"],
  ["Services", "/#services"],
  ["Projects", "/#projects"],
  ["About Us", "/#why-us"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030914] text-white">
      <div className="mx-auto max-w-[1540px] px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/" aria-label="Ashvera Technology home">
              <img
                src="/images/ashvera-logo.png"
                alt="Ashvera Technology"
                className="mb-5 h-auto w-[210px] max-w-full object-contain"
              />
            </a>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Turning your ideas into powerful digital solutions.
              We build modern, scalable technology that helps
              businesses innovate, grow, and succeed.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              Let's Talk <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-sm text-slate-400 transition hover:text-cyan-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />
                <a
                  href="mailto:ashveralegacies@gmail.com"
                  className="break-all transition hover:text-cyan-300"
                >
                  ashveralegacies@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-400"
                />
                <span>
                  Let's connect and build something great together.
                </span>
              </li>
            </ul>

            <a
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Ashvera Technology.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-500">
            Built with innovation and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}

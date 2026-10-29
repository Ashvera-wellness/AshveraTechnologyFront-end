
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  ["Home", "/#home"],
  ["Services", "/#services"],
  ["Projects", "/#projects"],
  ["Why Us", "/#why-us"],
  ["Process", "/#process"],
  ["FAQ", "/#faq"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/[0.09] bg-[#030914]/90 text-white backdrop-blur-md">
      <nav className="mx-auto flex min-h-[94px] max-w-[1540px] items-center justify-between gap-5 px-5 py-3 sm:px-8 xl:px-12">
        <a href="/" aria-label="Ashvera Technology home" className="shrink-0">
          <img
            src="/images/ashvera-logo.png"
            alt="Ashvera Technology"
            className="h-auto w-[220px] max-w-[45vw] object-contain sm:w-[265px]"
          />
        </a>

        <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="py-3 text-[14px] text-slate-300 transition-colors hover:text-cyan-300"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden items-center gap-3 rounded-full border border-cyan-400/90 px-6 py-3 text-sm font-medium transition duration-300 hover:bg-cyan-400 hover:text-[#03101b] sm:flex"
        >
          Get a Quote <ArrowRight size={18} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-white/15 p-3 text-cyan-200 xl:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050D19] px-5 py-4 xl:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 sm:grid-cols-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-cyan-300"
              >
                {label}
              </a>
            ))}

            <Link
                to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-semibold text-cyan-300"
            >
              Get a Quote <ArrowRight size={16} className="inline" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

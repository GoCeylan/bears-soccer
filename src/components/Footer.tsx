import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/bears-logo.jpeg"
                alt="Ottawa Bears Soccer Club Logo"
                width={36}
                height={36}
                className="rounded-full bg-white p-0.5"
              />
              <span className="font-bold">Ottawa Bears Soccer Club</span>
            </div>
            <p className="text-sm text-white/60">
              Adult recreational soccer in Nepean, Ottawa. Competing in the
              Ottawa Carleton Soccer League (OCSL).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-400 mb-3 uppercase text-xs tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { href: "/about", label: "About Us" },
                { href: "/teams", label: "Our Teams" },
                { href: "/news", label: "News" },
                { href: "/contact", label: "Contact / Join" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-400 mb-3 uppercase text-xs tracking-widest">
              League
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href="https://ocslonline.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  OCSL Website
                </a>
              </li>
              <li>
                <a
                  href="https://ocslonline.ca/standings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Standings
                </a>
              </li>
              <li>
                <a
                  href="https://ocslonline.ca/schedule/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Schedule
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Ottawa Bears Soccer Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

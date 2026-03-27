import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the Ottawa Bears Soccer Club — our history, values, and community in Nepean, Ottawa.",
};

const milestones = [
  { year: "Early 2000s", event: "Club founded in Nepean, Ottawa" },
  { year: "2004", event: "Ottawa Cup Champions — Men's Recreational MR1" },
  { year: "2005", event: "Ottawa Cup Champions — back-to-back title" },
  { year: "Today", event: "5 teams across men's and women's OCSL divisions" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">About the Bears</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-[#111827] mb-4">Who We Are</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Ottawa Bears Soccer Club is one of Nepean's most established
                adult recreational soccer organizations. We compete in the
                Ottawa Carleton Soccer League (OCSL) across multiple men's and
                women's divisions, welcoming players of all skill levels who
                share a love of the beautiful game.
              </p>
              <p>
                Our club culture is built on community, competitiveness, and
                fun. Whether you're a competitive player looking for a
                challenging division or someone just getting back into the sport,
                the Bears have a team for you.
              </p>
              <p>
                The club's proudest moments remain the back-to-back Ottawa Cup
                titles in 2004 and 2005 — a testament to the talent and
                dedication of our members over the years.
              </p>
            </div>

            <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-[#111827] mb-2">Jersey Colors</h3>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-gray-400" />
                  <div className="w-8 h-8 rounded-full bg-[#111827] border-2 border-gray-600" />
                </div>
                <span className="text-gray-600 text-sm">Gray with black detailing</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center mb-10">
              <Image
                src="/bears-logo.jpeg"
                alt="Ottawa Bears Soccer Club Logo"
                width={180}
                height={180}
                className="rounded-full bg-white border-4 border-gray-100 shadow-lg"
              />
            </div>

            <h2 className="text-2xl font-extrabold text-[#111827] mb-6">Club History</h2>
            <div className="space-y-4">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-4 items-start">
                  <div className="shrink-0 w-20 text-right">
                    <span className="text-xs font-bold text-gray-400 uppercase">{year}</span>
                  </div>
                  <div className="w-px bg-gray-200 self-stretch" />
                  <p className="text-gray-700 text-sm pt-0.5">{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#111827] mb-10 text-center">
            What We're About
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "⚽",
                title: "Competitive Fun",
                desc: "We play to win, but we play to enjoy. Every match is a chance to compete hard and have a good time.",
              },
              {
                icon: "🤝",
                title: "Community",
                desc: "The Bears are more than a team — we're a tight-knit group of players and friends based in Nepean.",
              },
              {
                icon: "🏆",
                title: "Winning Tradition",
                desc: "Two Ottawa Cup titles and a legacy of strong play across men's and women's divisions.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-[#111827] mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-4">Want to be part of it?</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for new players. Reach out and join the Bears.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#111827] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

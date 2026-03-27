import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5", label: "Active Teams" },
  { value: "2004", label: "Est." },
  { value: "2×", label: "Ottawa Cup Champions" },
  { value: "OCSL", label: "League" },
];

const teams = [
  { name: "Men's Rec 5", type: "Men's Recreational" },
  { name: "Men's OT6", type: "Men's Open" },
  { name: "Men's OT7", type: "Men's Open" },
  { name: "Women's Rec 1", type: "Women's Recreational" },
  { name: "Women's Rec 4-B", type: "Women's Recreational" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">
              Nepean, Ottawa · OCSL
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Ottawa Bears
              <br />
              <span className="text-gray-400">Soccer Club</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mb-8">
              A proud adult recreational soccer club competing in the Ottawa
              Carleton Soccer League. Back-to-back Ottawa Cup champions. All
              skill levels welcome.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/contact"
                className="bg-white text-[#111827] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Join the Club
              </Link>
              <Link
                href="/teams"
                className="border border-white/30 text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors"
              >
                Our Teams
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/bears-logo.jpeg"
              alt="Ottawa Bears Soccer Club"
              width={220}
              height={220}
              className="rounded-full bg-white p-3 shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1f2937] text-white border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold">{value}</div>
              <div className="text-gray-400 text-sm mt-1 uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 uppercase tracking-widest text-xs mb-2">Who we are</p>
            <h2 className="text-3xl font-extrabold text-[#111827] mb-4">
              More than a soccer club
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in the early 2000s, the Ottawa Bears Soccer Club has grown
              into one of Nepean&apos;s most established adult recreational soccer
              organizations. We field men&apos;s and women&apos;s teams across multiple
              OCSL divisions, welcoming players of all skill levels.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our back-to-back Ottawa Cup titles in 2004 and 2005 remain a
              highlight of the club&apos;s history — and we&apos;re always hungry for
              more.
            </p>
            <Link
              href="/about"
              className="text-[#111827] font-semibold border-b-2 border-[#111827] pb-0.5 hover:opacity-60 transition-opacity"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111827] text-white rounded-xl p-6 flex flex-col gap-2">
              <span className="text-4xl font-extrabold">2×</span>
              <span className="text-gray-400 text-sm">Ottawa Cup Champions</span>
              <span className="text-gray-500 text-xs">2004 · 2005</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-2">
              <span className="text-4xl font-extrabold text-[#111827]">5</span>
              <span className="text-gray-500 text-sm">Teams across Men&apos;s &amp; Women&apos;s divisions</span>
            </div>
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col gap-2 col-span-2">
              <span className="text-lg font-bold text-[#111827]">Nepean, Ottawa</span>
              <span className="text-gray-500 text-sm">
                Home field in Nepean — part of the Ottawa Carleton Soccer League
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Teams preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gray-400 uppercase tracking-widest text-xs mb-2">OCSL</p>
              <h2 className="text-3xl font-extrabold text-[#111827]">Our Teams</h2>
            </div>
            <Link
              href="/teams"
              className="text-sm font-semibold text-[#111827] border-b border-[#111827] pb-0.5 hover:opacity-60 transition-opacity"
            >
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teams.map((team) => (
              <div
                key={team.name}
                className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#111827] rounded-full flex items-center justify-center text-white text-lg shrink-0">
                  ⚽
                </div>
                <div>
                  <div className="font-semibold text-[#111827]">{team.name}</div>
                  <div className="text-gray-400 text-sm">{team.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to play?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Whether you&apos;re a seasoned player or just getting back into the game,
            there&apos;s a spot for you on the Bears. Get in touch and we&apos;ll find the
            right team for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#111827] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

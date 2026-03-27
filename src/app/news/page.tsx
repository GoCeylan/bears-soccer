import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and announcements from the Ottawa Bears Soccer Club.",
};

// Placeholder posts — replace with a CMS or MDX files when ready
const posts = [
  {
    slug: "welcome-2025-season",
    title: "Welcome to the 2025 OCSL Season",
    date: "2025-04-01",
    excerpt:
      "The new OCSL season is underway. All five Bears teams have registered and schedules are live on ocslonline.ca. Good luck to every squad this year!",
  },
  {
    slug: "join-the-bears",
    title: "Looking for Players — All Divisions",
    date: "2025-03-15",
    excerpt:
      "We have openings across several teams heading into the new season. Whether you're a goalkeeper, midfielder, or striker, we want to hear from you. Drop us a message on the Contact page.",
  },
  {
    slug: "ottawa-cup-legacy",
    title: "Remembering the 2004 & 2005 Ottawa Cup Runs",
    date: "2025-02-20",
    excerpt:
      "Twenty years on, we look back at the back-to-back Ottawa Cup Men's Recreational titles that put the Bears on the map. The winning culture lives on.",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">
            Club Updates
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">News</h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center py-20">
              No posts yet. Check back soon!
            </p>
          ) : (
            <div className="divide-y divide-gray-100">
              {posts.map((post) => (
                <article key={post.slug} className="py-8 first:pt-0">
                  <time className="text-xs text-gray-400 uppercase tracking-wide">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-xl font-extrabold text-[#111827] mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            Have club news to share?{" "}
            <Link
              href="/contact"
              className="text-[#111827] font-semibold underline hover:opacity-60 transition-opacity"
            >
              Get in touch
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

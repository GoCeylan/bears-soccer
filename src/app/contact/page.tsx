import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the Ottawa Bears Soccer Club — join a team, ask a question, or get involved.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            Interested in joining, have a question, or want to get involved?
            Reach out and we'll get back to you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#111827] mb-6">
              Club Info
            </h2>
            <div className="space-y-5 text-gray-600">
              <div className="flex gap-4">
                <span className="text-xl shrink-0">📍</span>
                <div>
                  <div className="font-semibold text-[#111827]">Location</div>
                  <div>Nepean, Ottawa, ON</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl shrink-0">✉️</span>
                <div>
                  <div className="font-semibold text-[#111827]">Email</div>
                  <a
                    href="mailto:ottawabearspresident@gmail.com"
                    className="text-[#111827] underline hover:opacity-60 transition-opacity"
                  >
                    ottawabearspresident@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl shrink-0">📞</span>
                <div>
                  <div className="font-semibold text-[#111827]">Phone</div>
                  <a
                    href="tel:6134224463"
                    className="text-[#111827] underline hover:opacity-60 transition-opacity"
                  >
                    613-422-4463
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl shrink-0">⚽</span>
                <div>
                  <div className="font-semibold text-[#111827]">League</div>
                  <div>
                    Ottawa Carleton Soccer League (OCSL)
                    <br />
                    <a
                      href="https://ocslonline.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#111827] underline hover:opacity-60 transition-opacity text-sm"
                    >
                      ocslonline.ca
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl shrink-0">👕</span>
                <div>
                  <div className="font-semibold text-[#111827]">Jersey Colors</div>
                  <div>Gray with black detailing</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-gray-50 border border-gray-200 rounded-xl">
              <h3 className="font-bold text-[#111827] mb-2">Want to Join?</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We have men's and women's teams across recreational and open
                divisions. Fill out the form and let us know which team
                interests you — we'll be in touch with tryout and registration
                details.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#111827] mb-6">
              Send a Message
            </h2>
            <form className="space-y-5" action="mailto:ottawabearspresident@gmail.com" method="get" encType="text/plain">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111827]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111827]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111827]"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111827]"
                >
                  <option value="">Select a team</option>
                  <option>Men's Rec 5</option>
                  <option>Men's OT6</option>
                  <option>Men's OT7</option>
                  <option>Women's Rec 1</option>
                  <option>Women's Rec 4-B</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#111827] resize-none"
                  placeholder="Tell us a bit about yourself, your experience, availability, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#111827] text-white font-semibold py-3 rounded-lg hover:bg-[#1f2937] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

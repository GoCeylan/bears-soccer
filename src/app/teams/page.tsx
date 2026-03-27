import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Ottawa Bears Soccer Club teams competing in the Ottawa Carleton Soccer League (OCSL) — men's and women's divisions.",
};

const teams = [
  {
    name: "Men's Rec 5",
    division: "Men's Recreational Division 5",
    type: "mens",
    record: "7W · 3T · 4L",
    points: "24 pts",
    position: "7th",
  },
  {
    name: "Men's OT6",
    division: "Men's Open Division 6",
    type: "mens",
    record: "9W · 1T · 4L",
    points: "28 pts",
    position: "3rd",
    topScorer: "Marwan Mahdi (8 goals)",
    topKeeper: "Duncan McCurdie (4 shutouts)",
  },
  {
    name: "Men's OT7",
    division: "Men's Open Division 7",
    type: "mens",
    record: "1W · 3T · 10L",
    points: "6 pts",
    position: "8th",
  },
  {
    name: "Women's Rec 1",
    division: "Women's Recreational Division 1",
    type: "womens",
    record: "4W · 3T · 7L",
    points: "15 pts",
    position: "7th",
  },
  {
    name: "Women's Rec 4-B",
    division: "Women's Recreational Division 4-B",
    type: "womens",
    record: "1W · 0T · 2L",
    points: "3 pts",
    position: "4th",
  },
];

export default function TeamsPage() {
  const mens = teams.filter((t) => t.type === "mens");
  const womens = teams.filter((t) => t.type === "womens");

  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 uppercase tracking-widest text-xs mb-3">OCSL</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold">Our Teams</h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            The Ottawa Bears field five teams across men's and women's divisions
            in the Ottawa Carleton Soccer League.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Men's */}
          <div>
            <h2 className="text-xl font-extrabold text-[#111827] mb-6 border-b border-gray-200 pb-3">
              Men's Teams
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mens.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </div>
          </div>

          {/* Women's */}
          <div>
            <h2 className="text-xl font-extrabold text-[#111827] mb-6 border-b border-gray-200 pb-3">
              Women's Teams
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {womens.map((team) => (
                <TeamCard key={team.name} team={team} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OCSL links */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold text-[#111827] mb-3">
            Live Standings &amp; Schedules
          </h2>
          <p className="text-gray-500 mb-6">
            Up-to-date standings and match schedules are maintained on the OCSL
            website.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://ocslonline.ca/standings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] text-white px-6 py-3 rounded font-semibold hover:bg-[#1f2937] transition-colors"
            >
              View Standings
            </a>
            <a
              href="https://ocslonline.ca/schedule/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#111827] text-[#111827] px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            >
              View Schedule
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function TeamCard({
  team,
}: {
  team: (typeof teams)[number];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-[#111827]">{team.name}</h3>
          <p className="text-gray-400 text-xs mt-0.5">{team.division}</p>
        </div>
        <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {team.position}
        </span>
      </div>
      <div className="text-sm text-gray-600 space-y-1">
        <div className="flex justify-between">
          <span>Record</span>
          <span className="font-medium text-[#111827]">{team.record}</span>
        </div>
        <div className="flex justify-between">
          <span>Points</span>
          <span className="font-medium text-[#111827]">{team.points}</span>
        </div>
        {team.topScorer && (
          <div className="pt-2 border-t border-gray-100 text-xs text-gray-500">
            Top scorer: {team.topScorer}
          </div>
        )}
        {team.topKeeper && (
          <div className="text-xs text-gray-500">
            Top keeper: {team.topKeeper}
          </div>
        )}
      </div>
    </div>
  );
}

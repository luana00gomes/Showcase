"use client";

import { useEffect, useState } from "react";
import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

const USERNAME = "luana00gomes";

type LangMap = Record<string, number>;

type Stats = {
  repos: number;
  followers: number;
  stars: number;
  forks: number;
  topLanguages: { name: string; bytes: number }[];
};

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  "C++": "#f34b7d",
  C: "#555555",
  HTML: "#e34c26",
  CSS: "#563d7c",
  VHDL: "#adb2cb",
  Ruby: "#701516",
  Shell: "#89e051",
};

function langColor(name: string) {
  return LANG_COLORS[name] ?? "#8b949e";
}

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("API error");

        const user = await userRes.json();
        const repos = await reposRes.json();

        const stars = repos.reduce(
          (acc: number, r: any) => acc + r.stargazers_count,
          0
        );
        const forks = repos.reduce(
          (acc: number, r: any) => acc + r.forks_count,
          0
        );

        // Fetch language bytes for each repo (parallel, limit to 20 most recent)
        const langResults = await Promise.allSettled(
          repos.slice(0, 20).map((r: any) =>
            fetch(r.languages_url).then((res) => res.json())
          )
        );

        const langTotals: LangMap = {};
        langResults.forEach((result) => {
          if (result.status === "fulfilled") {
            Object.entries(result.value as LangMap).forEach(([lang, bytes]) => {
              langTotals[lang] = (langTotals[lang] ?? 0) + (bytes as number);
            });
          }
        });

        const topLanguages = Object.entries(langTotals)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, bytes]) => ({ name, bytes }));

        setStats({
          repos: user.public_repos,
          followers: user.followers,
          stars,
          forks,
          topLanguages,
        });
      } catch {
        setError(true);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="w-full mt-16">
      <h2 className={title({ size: "lg" })}>GitHub Stats</h2>

      {error && (
        <p className="mt-4 text-sm text-default-400">
          Could not load GitHub stats.{" "}
          <Link isExternal href={`https://github.com/${USERNAME}`} className="text-primary text-sm">
            View profile directly →
          </Link>
        </p>
      )}

      {!error && (
        <div className="mt-8 flex flex-col lg:flex-row gap-5">
          {/* Metrics card */}
          <div className="flex-1 rounded-xl border border-default-200 p-6">
            <p className="text-xs text-default-400 uppercase tracking-wide mb-4">
              Overview
            </p>
            {stats ? (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Public repos", value: stats.repos },
                  { label: "Total stars", value: stats.stars },
                  { label: "Total forks", value: stats.forks },
                  { label: "Followers", value: stats.followers },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold">{value}</p>
                    <p className="text-xs text-default-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-7 w-12 bg-default-200 rounded mb-1" />
                    <div className="h-3 w-20 bg-default-100 rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Top languages card */}
          <div className="flex-1 rounded-xl border border-default-200 p-6">
            <p className="text-xs text-default-400 uppercase tracking-wide mb-4">
              Top languages
            </p>
            {stats ? (
              <>
                {/* Progress bar */}
                <div className="flex h-2 rounded-full overflow-hidden mb-4">
                  {(() => {
                    const total = stats.topLanguages.reduce(
                      (s, l) => s + l.bytes,
                      0
                    );
                    return stats.topLanguages.map((l) => (
                      <div
                        key={l.name}
                        style={{
                          width: `${(l.bytes / total) * 100}%`,
                          backgroundColor: langColor(l.name),
                        }}
                        title={l.name}
                      />
                    ));
                  })()}
                </div>
                {/* Legend */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {stats.topLanguages.map((l) => {
                    const total = stats.topLanguages.reduce(
                      (s, x) => s + x.bytes,
                      0
                    );
                    const pct = ((l.bytes / total) * 100).toFixed(1);
                    return (
                      <div key={l.name} className="flex items-center gap-1.5">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: langColor(l.name) }}
                        />
                        <span className="text-xs">
                          {l.name}{" "}
                          <span className="text-default-400">{pct}%</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="animate-pulse space-y-3">
                <div className="h-2 bg-default-200 rounded-full" />
                <div className="flex flex-wrap gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-3 w-16 bg-default-100 rounded" />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Row 2: streak */}
          <img
            src={`https://streak-stats.demolab.com/?user=${USERNAME}&theme=dark&hide_border=true&date_format=j%20M%5B%20Y%5D`}
            alt="GitHub Streak"
            className="rounded-xl max-w-full"
          />
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <Link
          isExternal
          href={`https://github.com/${USERNAME}`}
          className="text-sm text-default-400 hover:text-primary"
        >
          View full profile on GitHub →
        </Link>
      </div>
    </section>
  );
}

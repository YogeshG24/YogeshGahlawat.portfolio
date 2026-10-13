import { portfolioData } from "../assets/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-6 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">
          // 02. TECHNICAL SKILLS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-neutral-800 p-6 bg-neutral-950">
            <h3 className="text-sm font-bold tracking-wider text-white mb-4 uppercase">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((item, idx) => (
                <span
                  key={idx}
                  className="border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-neutral-800 p-6 bg-neutral-950">
            <h3 className="text-sm font-bold tracking-wider text-white mb-4 uppercase">
              Spring Ecosystem
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.springEcosystem.map((item, idx) => (
                <span
                  key={idx}
                  className="border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-neutral-800 p-6 bg-neutral-950">
            <h3 className="text-sm font-bold tracking-wider text-white mb-4 uppercase">
              React Ecosystem
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.reactEcosystem.map((item, idx) => (
                <span
                  key={idx}
                  className="border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-neutral-800 p-6 bg-neutral-950">
            <h3 className="text-sm font-bold tracking-wider text-white mb-4 uppercase">
              Databases, Caching & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                ...skills.databases,
                ...skills.cachingAndStreaming,
                ...skills.devToolsAndDeployment,
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="border border-neutral-700 px-3 py-1 text-xs text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

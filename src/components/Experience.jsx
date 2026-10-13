import { portfolioData } from "../assets/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">
          // 03. PROFESSIONAL EXPERIENCE
        </h2>

        {experience.map((exp, idx) => (
          <div key={idx} className="space-y-8">
            <div className="border-b border-neutral-800 pb-4">
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
              <p className="text-neutral-400 text-sm mt-1">
                {exp.role} | <span className="text-white">{exp.duration}</span>
              </p>
            </div>

            <div className="space-y-12">
              {exp.projects.map((project, pIdx) => (
                <div
                  key={pIdx}
                  className="border border-neutral-800 p-6 md:p-8 bg-neutral-950 space-y-4"
                >
                  <h4 className="text-xl font-semibold text-white tracking-wide">
                    {project.name}
                  </h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {project.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs md:text-sm text-neutral-300 flex items-start"
                      >
                        <span className="text-neutral-500 mr-2">▪</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

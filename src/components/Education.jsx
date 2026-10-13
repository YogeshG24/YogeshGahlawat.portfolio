import { portfolioData } from "../assets/portfolioData";

export default function Education() {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-24 px-6 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">
          // 04. EDUCATION & CERTIFICATIONS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Education
            </h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="border border-neutral-800 p-6 bg-neutral-950 space-y-2"
              >
                <h4 className="font-semibold text-white">{edu.degree}</h4>
                <p className="text-sm text-neutral-400">{edu.institution}</p>
                <p className="text-xs text-neutral-500">{edu.duration}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase">
              Certifications
            </h3>
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="border border-neutral-800 p-6 bg-neutral-950 space-y-2"
              >
                <h4 className="font-semibold text-white">{cert.title}</h4>
                <p className="text-sm text-neutral-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

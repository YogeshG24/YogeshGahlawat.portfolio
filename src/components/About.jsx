import { portfolioData } from "../assets/portfolioData";

export default function About() {
  const { summary } = portfolioData.personal;

  return (
    <section id="about" className="py-24 px-6 border-b border-neutral-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">
          // 01. ABOUT ME
        </h2>
        <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-light">
          {summary}
        </p>
      </div>
    </section>
  );
}

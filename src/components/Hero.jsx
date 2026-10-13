import { portfolioData } from "../assets/portfolioData";

export default function Hero() {
  const { name, title, experienceYears, links } = portfolioData.personal;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 border-b border-neutral-900"
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block border border-neutral-700 px-4 py-1 text-xs tracking-widest uppercase text-neutral-400">
          {experienceYears} Experience in Enterprise Development
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          {name}
        </h1>
        <p className="text-lg md:text-xl text-neutral-400 tracking-wide">
          {title}
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-black font-semibold text-sm tracking-wider hover:bg-neutral-200 transition"
          >
            GET IN TOUCH
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-neutral-700 text-white font-semibold text-sm tracking-wider hover:border-white transition"
          >
            GITHUB
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-neutral-700 text-white font-semibold text-sm tracking-wider hover:border-white transition"
          >
            LINKEDIN
          </a>
          <a
            href={links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-neutral-700 text-white font-semibold text-sm tracking-wider hover:border-white transition"
          >
            LEETCODE
          </a>
        </div>
      </div>
    </section>
  );
}

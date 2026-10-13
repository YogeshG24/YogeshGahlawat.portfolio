import { portfolioData } from "../assets/portfolioData";

export default function Contact() {
  const { email, phone } = portfolioData.personal;

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500">
          // 05. CONTACT
        </h2>
        <div className="border border-neutral-800 p-8 bg-neutral-950 space-y-6 text-center">
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Let's Build Something Together
          </h3>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto">
            Feel free to reach out for opportunities, collaborations, or
            professional inquiries.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-6 text-sm text-neutral-300">
            <a
              href={`mailto:${email}`}
              className="border border-neutral-700 px-6 py-3 hover:border-white transition"
            >
              {email}
            </a>
            <a
              href={`tel:${phone}`}
              className="border border-neutral-700 px-6 py-3 hover:border-white transition"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

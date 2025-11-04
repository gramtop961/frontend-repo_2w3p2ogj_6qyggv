import { Globe, Shield, Zap, Tv } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Oltre 12.000 canali",
    desc: "Tutto il meglio di sport, cinema, serie, news e intrattenimento da tutto il mondo.",
  },
  {
    icon: Globe,
    title: "Ovunque, su ogni schermo",
    desc: "Smart TV, smartphone, tablet, PC e box TV. Nessun decoder o parabola.",
  },
  {
    icon: Zap,
    title: "Streaming ultra‑veloce",
    desc: "Server ottimizzati, latenze minime e qualità fino al 4K con HDR.",
  },
  {
    icon: Shield,
    title: "Sicuro e affidabile",
    desc: "Connessioni cifrate, protezione anti‑buffering e assistenza 24/7.",
  },
];

export default function Features() {
  return (
    <section className="py-16" id="funzioni">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Tutto quello che ti aspetti da un servizio IPTV moderno
          </h2>
          <p className="mt-3 text-white/70">
            Prestazioni elevate, copertura globale e un'esperienza semplice e fluida.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-tr from-indigo-600/30 to-fuchsia-500/30 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

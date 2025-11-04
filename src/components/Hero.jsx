import { ArrowRight, Play, Tv } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-fuchsia-500/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-20 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Tv className="h-3.5 w-3.5" />
              IPTV di nuova generazione
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Tutta la TV che ami, in un unico posto
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
              Canali live, sport, cinema, serie e on‑demand in qualità Ultra HD. Senza decoder, ovunque tu sia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#prezzi"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:scale-[1.02] hover:shadow-fuchsia-500/30"
              >
                Inizia la prova gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Play className="mr-2 h-4 w-4" /> Guarda una demo
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
              <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />99.9% uptime</div>
              <div>Disdici quando vuoi</div>
              <div>Nessun hardware richiesto</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-tr from-indigo-600/20 to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-2xl backdrop-blur">
              <div className="aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1594909122845-11baa439b7df?q=80&w=1974&auto=format&fit=crop"
                  alt="Anteprima canali IPTV"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-3 pb-3 pt-2 text-xs text-white/70">
                <span>Anteprima canali</span>
                <span>4K • HDR • Dolby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

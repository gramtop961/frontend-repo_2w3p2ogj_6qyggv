import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25)_0%,rgba(236,72,153,0.15)_35%,rgba(15,23,42,0.8)_100%)]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white font-bold">S</span>
            <span className="text-sm font-semibold tracking-wide">Streamly IPTV</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#funzioni" className="hover:text-white">Funzioni</a>
            <a href="#prezzi" className="hover:text-white">Prezzi</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contatti" className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Accedi</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />

        {/* FAQ */}
        <section id="faq" className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-white">Domande frequenti</h2>
            <div className="mt-8 space-y-6">
              <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                <summary className="cursor-pointer select-none text-white">Serve il decoder per usare l'IPTV?</summary>
                <p className="mt-2 text-sm">No, funziona su Smart TV, smartphone, tablet, PC e box TV compatibili senza hardware aggiuntivo.</p>
              </details>
              <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                <summary className="cursor-pointer select-none text-white">Posso disdire quando voglio?</summary>
                <p className="mt-2 text-sm">Certo. I piani sono senza vincoli: puoi annullare in qualsiasi momento dalle impostazioni.</p>
              </details>
              <details className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur">
                <summary className="cursor-pointer select-none text-white">È disponibile una prova gratuita?</summary>
                <p className="mt-2 text-sm">Sì, tutti i piani includono 7 giorni di prova gratuita senza rischi.</p>
              </details>
            </div>
          </div>
        </section>

        {/* Contatti */}
        <section id="contatti" className="pb-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold text-white">Hai domande? Scrivici</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 grid gap-4 sm:grid-cols-2"
            >
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-fuchsia-500/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-fuchsia-500/50"
              />
              <textarea
                placeholder="Come possiamo aiutarti?"
                rows={4}
                className="sm:col-span-2 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white placeholder-white/50 outline-none focus:border-fuchsia-500/50"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-95"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { Check } from "lucide-react";

const plans = [
  {
    name: "Mensile",
    price: "€9,99",
    tagline: "Flessibile e senza vincoli",
    popular: false,
    features: [
      "Oltre 12.000 canali",
      "Film e serie on‑demand",
      "Qualità fino al 4K",
      "2 dispositivi in contemporanea",
      "Assistenza 24/7",
    ],
  },
  {
    name: "Annuale",
    price: "€79,99",
    tagline: "Risparmia il 33%",
    popular: true,
    features: [
      "Tutti i canali e VOD",
      "4 dispositivi in contemporanea",
      "Registrazione cloud 100h",
      "Supporto prioritario",
      "Sostituzioni canale illimitate",
    ],
  },
  {
    name: "Famiglia",
    price: "€119,99",
    tagline: "Fino a 6 profili",
    popular: false,
    features: [
      "Profili bambini",
      "Controllo genitori",
      "6 dispositivi in contemporanea",
      "App premium su Smart TV",
      "Reset rapidi one‑click",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="prezzi" className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Scegli il piano perfetto per te
          </h2>
          <p className="mt-3 text-white/70">Prova gratuita di 7 giorni su tutti i piani. Disdici quando vuoi.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition ${
                plan.popular ? "ring-2 ring-fuchsia-500/50" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600 to-fuchsia-500 px-3 py-1 text-xs text-white shadow-lg">
                  Più scelto
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-white/70">{plan.tagline}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-semibold text-white">{plan.price}</span>
                <span className="mb-1 text-sm text-white/60">/ mese</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#inizia"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                  plan.popular
                    ? "bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95"
                    : "border border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                }`}
              >
                Attiva ora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

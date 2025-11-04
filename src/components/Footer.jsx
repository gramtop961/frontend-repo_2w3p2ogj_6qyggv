export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-white/70 lg:flex-row lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-semibold text-white">Streamly IPTV</p>
          <p className="mt-1">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#funzioni" className="hover:text-white">Funzioni</a>
          <a href="#prezzi" className="hover:text-white">Prezzi</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contatti" className="hover:text-white">Contatti</a>
        </div>
      </div>
    </footer>
  );
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div>
          <h1 className="text-xl md:text-2xl tracking-[0.35em] font-light">
            CAMILA DUARTE
          </h1>

          <p className="text-[10px] tracking-[0.4em] mt-1">
            PERSONAL STYLIST
          </p>
        </div>

        <nav className="hidden md:flex gap-10 text-sm tracking-[0.2em]">
          <a href="#about">SOBRE</a>
          <a href="#services">SERVIÇOS</a>
          <a href="#portfolio">PORTFÓLIO</a>
          <a href="#contact">CONTATO</a>
        </nav>

      </div>
    </header>
  );
}
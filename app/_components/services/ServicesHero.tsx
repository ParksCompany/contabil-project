export default function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="bg-background/5 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
      <div className="container-custom relative z-10">
        <div className="animate-fade-up max-w-3xl">
          <span className="text-background/80 mb-4 inline-block text-sm font-semibold tracking-wide uppercase">
            Nossos Serviços
          </span>
          <h1 className="text-background mb-6 text-4xl font-bold md:text-5xl">
            Soluções completas para seu negócio
          </h1>
          <p className="text-background/80 text-xl">
            Conheça todos os serviços que oferecemos, organizados por setores
            especializados para melhor atendê-lo.
          </p>
        </div>
      </div>
    </section>
  );
}


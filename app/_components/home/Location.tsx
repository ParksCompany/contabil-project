export default function Location() {
  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 flex max-w-2xl flex-col gap-4 text-center">
          <span className="text-primary inline-block text-sm font-semibold tracking-wide uppercase">
            Localização
          </span>
          <h2 className="text-foreground text-3xl font-bold md:text-4xl">
            Venha nos visitar
          </h2>
          <p className="text-foreground/70 text-lg">
            Estamos localizados em um ponto estratégico de São Paulo, prontos
            para atendê-lo.
          </p>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="animate-fade-up flex flex-col gap-6 lg:flex-[0_0_33.333%]">
            <div className="bg-card border-border card-hover rounded-2xl border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-map-pin text-primary h-6 w-6"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-foreground font-semibold">Endereço</h4>
                  <p className="text-foreground/80 text-sm">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover rounded-2xl border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-phone text-primary h-6 w-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-foreground font-semibold">Telefone</h4>
                  <p className="text-foreground/80 text-sm">
                    (11) 3000-0000
                    <br />
                    (11) 99000-0000
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover rounded-2xl border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail text-primary h-6 w-6"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-foreground font-semibold">E-mail</h4>
                  <p className="text-foreground/80 text-sm">
                    contato@contabilidademodelo.com.br
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover rounded-2xl border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-clock text-primary h-6 w-6"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-foreground font-semibold">Horário</h4>
                  <p className="text-foreground/80 text-sm">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-fade-up flex-1 delay-200">
            <div className="border-border shadow-card h-full min-h-[400px] w-full overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0975455792693!2d-46.65478502374092!3d-23.564616178800204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1699900000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Contabilidade Modelo"
                className="min-h-[400px] border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

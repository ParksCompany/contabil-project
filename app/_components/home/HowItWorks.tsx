export default function HowItWorks() {
  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-4 text-center">
          <span className="text-primary inline-block text-sm font-semibold tracking-wide uppercase">
            Como Funciona
          </span>
          <h2 className="text-foreground text-3xl font-bold md:text-4xl">
            Processo simples e transparente
          </h2>
          <p className="text-foreground/70 text-lg">
            Em poucos passos você solicita um serviço e nossa equipe cuida de
            todo o resto.
          </p>
        </div>
        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div className="bg-border absolute top-10 right-[12%] left-[12%] z-0 hidden h-0.5 lg:block"></div>

          <div className="animate-fade-up relative z-10 flex flex-col gap-6 text-center delay-0">
            <div className="relative mx-auto inline-flex">
              <div className="bg-card border-border shadow-card flex h-20 w-20 items-center justify-center rounded-2xl border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mouse-pointer2 text-primary h-8 w-8"
                >
                  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                </svg>
              </div>
              <span className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                01
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-xl font-semibold">
                Escolha o Serviço
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Navegue pela nossa lista de serviços e selecione o que melhor
                atende sua necessidade.
              </p>
            </div>
          </div>

          <div className="animate-fade-up relative z-10 flex flex-col gap-6 text-center delay-100">
            <div className="relative mx-auto inline-flex">
              <div className="bg-card border-border shadow-card flex h-20 w-20 items-center justify-center rounded-2xl border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-pen text-primary h-8 w-8"
                >
                  <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                </svg>
              </div>
              <span className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                02
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-xl font-semibold">
                Preencha os Dados
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Complete o formulário com as informações necessárias para a
                realização do serviço.
              </p>
            </div>
          </div>

          <div className="animate-fade-up relative z-10 flex flex-col gap-6 text-center delay-200">
            <div className="relative mx-auto inline-flex">
              <div className="bg-card border-border shadow-card flex h-20 w-20 items-center justify-center rounded-2xl border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-send text-primary h-8 w-8"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
              </div>
              <span className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                03
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-xl font-semibold">
                Envie a Solicitação
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Sua solicitação é direcionada automaticamente para o setor
                responsável.
              </p>
            </div>
          </div>

          <div className="animate-fade-up relative z-10 flex flex-col gap-6 text-center delay-300">
            <div className="relative mx-auto inline-flex">
              <div className="bg-card border-border shadow-card flex h-20 w-20 items-center justify-center rounded-2xl border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big text-primary h-8 w-8"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
              </div>
              <span className="bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold">
                04
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-foreground text-xl font-semibold">
                Acompanhe o Status
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Receba atualizações e acompanhe o andamento da sua solicitação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

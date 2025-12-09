import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col flex-wrap gap-12 md:flex-row lg:flex-row">
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 md:flex-[1_1_calc(50%-24px)] lg:flex-[1_1_calc(25%-36px)]">
            <Link className="flex items-center gap-2" href="/">
              <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg">
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
                  className="lucide lucide-calculator text-primary-foreground h-5 w-5"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <line x1="8" x2="16" y1="6" y2="6"></line>
                  <line x1="16" x2="16" y1="14" y2="18"></line>
                  <path d="M16 10h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M8 14h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M8 18h.01"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-background text-lg leading-tight font-bold">
                  Contabilidade
                </span>
                <span className="text-primary text-xs font-medium">Modelo</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Sua parceira em soluções contábeis há mais de 15 anos. Cuidamos da
              sua empresa para você focar no que realmente importa.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="bg-background/10 hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              >
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
                  className="lucide lucide-facebook h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="bg-background/10 hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              >
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
                  className="lucide lucide-instagram h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="bg-background/10 hover:bg-primary flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
              >
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
                  className="lucide lucide-linkedin h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 md:flex-[1_1_calc(50%-24px)] lg:flex-[1_1_calc(25%-36px)]">
            <h4 className="text-background font-semibold">Links Rápidos</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                  href="/sobre"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                  href="/servicos"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                  href="/solicitacao"
                >
                  Solicitar Serviço
                </Link>
              </li>
              <li>
                <Link
                  className="text-background/70 hover:text-primary text-sm transition-colors"
                  href="/contato"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 md:flex-[1_1_calc(50%-24px)] lg:flex-[1_1_calc(25%-36px)]">
            <h4 className="text-background font-semibold">Nossos Serviços</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-background/70 text-sm">
                  Abertura de Empresa
                </span>
              </li>
              <li>
                <span className="text-background/70 text-sm">
                  Folha de Pagamento
                </span>
              </li>
              <li>
                <span className="text-background/70 text-sm">
                  Declaração IRPF
                </span>
              </li>
              <li>
                <span className="text-background/70 text-sm">
                  Planejamento Tributário
                </span>
              </li>
              <li>
                <span className="text-background/70 text-sm">
                  Balanço Patrimonial
                </span>
              </li>
            </ul>
          </div>
          <div className="flex min-w-[280px] flex-1 flex-col gap-4 md:flex-[1_1_calc(50%-24px)] lg:flex-[1_1_calc(25%-36px)]">
            <h4 className="text-background font-semibold">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
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
                  className="lucide lucide-map-pin text-primary mt-0.5 h-5 w-5 shrink-0 self-start"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-background/70 text-sm">
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3">
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
                  className="lucide lucide-phone text-primary h-5 w-5 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-background/70 text-sm">
                  (11) 3000-0000
                </span>
              </li>
              <li className="flex items-center gap-3">
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
                  className="lucide lucide-mail text-primary h-5 w-5 shrink-0"
                >
                  <rect width="10" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-background/70 text-sm">
                  contato@contabilidademodelo.com.br
                </span>
              </li>
              <li className="flex items-center gap-3">
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
                  className="lucide lucide-clock text-primary h-5 w-5 shrink-0"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span className="text-background/70 text-sm">
                  Seg-Sex: 8h às 18h
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-background/10 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-background/50 text-sm">
            © 2025 Contabilidade Modelo. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              className="text-background/50 hover:text-background text-sm transition-colors"
              href="/"
            >
              Política de Privacidade
            </Link>
            <Link
              className="text-background/50 hover:text-background text-sm transition-colors"
              href="/"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

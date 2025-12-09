import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ServiceFilters from "@/app/_components/services/ServiceFilters";
import ServicesHero from "@/app/_components/services/ServicesHero";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function Services() {
  return (
    <main className="flex-1 pt-16 md:pt-20">
      <Header />
      <ServicesHero />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <ServiceFilters />
        <div className="flex flex-col gap-6 md:flex-col lg:flex-col">
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "0ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-building2 text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                  <path d="M10 6h4"></path>
                  <path d="M10 10h4"></path>
                  <path d="M10 14h4"></path>
                  <path d="M10 18h4"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Societário
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Abertura de Empresa
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Constituição completa do seu negócio com toda documentação
              necessária.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 5 a 10 dias úteis</span>
            </div>
            <Link href="/solicitacoes/abertura-empresa">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "50ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-file-pen text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Societário
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Alteração Contratual
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Modificações no contrato social da sua empresa.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 3 a 7 dias úteis</span>
            </div>
            <Link href="/solicitacoes/alteracao-contratual">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "100ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-circle-x text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Societário
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Encerramento de Empresa
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Baixa completa da empresa em todos os órgãos.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 15 a 30 dias úteis</span>
            </div>
            <Link href="/solicitacoes/encerramento-empresa">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "150ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-receipt text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <path d="M12 17.5v-11"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Pessoal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Folha de Pagamento
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Processamento completo da folha de pagamento mensal.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 2 a 3 dias úteis</span>
            </div>
            <Link href="/solicitacoes/folha-pagamento">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "200ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-user-plus text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Pessoal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Admissão de Funcionário
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Registro e documentação para contratação de colaboradores.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 1 a 2 dias úteis</span>
            </div>
            <Link href="/solicitacoes/admissao-funcionario">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "250ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-user-minus text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Pessoal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Rescisão de Contrato
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Cálculo e processamento de rescisões trabalhistas.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 2 a 5 dias úteis</span>
            </div>
            <Link href="/solicitacoes/rescisao-contrato">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "300ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-file-text text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Fiscal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Declaração IRPF
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Elaboração da declaração de Imposto de Renda Pessoa Física.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 3 a 5 dias úteis</span>
            </div>
            <Link href="/solicitacoes/declaracao-irpf">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "350ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-badge-check text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Fiscal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Certidões Negativas
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Emissão de certidões de regularidade fiscal.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 1 a 3 dias úteis</span>
            </div>
            <Link href="/solicitacoes/certidoes-negativas">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "400ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-trending-down text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                  <polyline points="16 17 22 17 22 11"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Fiscal
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Planejamento Tributário
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Análise e otimização da carga tributária.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 5 a 10 dias úteis</span>
            </div>
            <Link href="/solicitacoes/planejamento-tributario">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div
            className="group bg-card border-border card-hover animate-fade-up rounded-2xl border p-6"
            style={{ animationDelay: "450ms" }}
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
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
                  className="lucide lucide-chart-column text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
                  Departamento Contábil
                </span>
                <h3 className="text-foreground text-xl font-semibold">
                  Balanço Patrimonial
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Elaboração de balanço e demonstrações contábeis.
            </p>
            <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
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
                className="lucide lucide-clock h-4 w-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Prazo: 5 a 10 dias úteis</span>
            </div>
            <Link href="/solicitacoes/balanco-patrimonial">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solicitar Serviço
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
                  className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

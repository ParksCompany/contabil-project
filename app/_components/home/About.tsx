import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-background py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="animate-fade-up flex flex-col gap-6">
            <span className="text-primary inline-block text-sm font-semibold tracking-wide uppercase">
              Sobre Nós
            </span>
            <h2 className="text-foreground text-3xl font-bold md:text-4xl">
              Sua parceira de confiança em soluções contábeis
            </h2>
            <div className="mb-8 flex flex-col gap-6">
              <p className="text-foreground/80 text-lg leading-relaxed">
                A Contabilidade Modelo nasceu com o propósito de simplificar a
                gestão contábil e fiscal das empresas brasileiras. Com mais de
                15 anos de experiência, nossa equipe de especialistas trabalha
                incansavelmente para oferecer soluções personalizadas.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Organizados em setores especializados — Societário, Pessoal,
                Fiscal e Contábil — garantimos atendimento ágil e preciso para
                cada necessidade do seu negócio.
              </p>
            </div>
            <Link href="/sobre" className="inline-block">
              <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-base font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                Conheça Nossa História
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
                  className="lucide lucide-arrow-right h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
          <div className="animate-fade-up flex flex-row flex-wrap gap-6 delay-200">
            <div className="bg-card border-border card-hover flex min-w-[calc(50%-12px)] flex-1 flex-col gap-4 rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
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
                  className="lucide lucide-award text-primary h-6 w-6"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-foreground text-3xl font-bold">15+</div>
                <div className="text-foreground/70 text-sm">
                  Anos de experiência
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover flex min-w-[calc(50%-12px)] flex-1 flex-col gap-4 rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
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
                  className="lucide lucide-users text-primary h-6 w-6"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-foreground text-3xl font-bold">500+</div>
                <div className="text-foreground/70 text-sm">
                  Clientes atendidos
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover flex min-w-[calc(50%-12px)] flex-1 flex-col gap-4 rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
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
                  className="lucide lucide-building text-primary h-6 w-6"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-foreground text-3xl font-bold">1000+</div>
                <div className="text-foreground/70 text-sm">
                  Empresas abertas
                </div>
              </div>
            </div>
            <div className="bg-card border-border card-hover flex min-w-[calc(50%-12px)] flex-1 flex-col gap-4 rounded-2xl border p-6 text-center">
              <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-xl">
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
                  className="lucide lucide-trending-up text-primary h-6 w-6"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-foreground text-3xl font-bold">98%</div>
                <div className="text-foreground/70 text-sm">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

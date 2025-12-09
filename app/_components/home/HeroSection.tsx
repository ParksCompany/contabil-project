"use client";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="bg-background relative flex items-center justify-center overflow-hidden">
      <div className="bg-gradient-primary absolute inset-0 -z-10"></div>
      <div className="bg-chart-5/5 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
      <div className="bg-primary/5 absolute right-10 bottom-10 h-96 w-96 rounded-full blur-3xl"></div>

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <div className="bg-primary/10 border-primary/20 animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
            <span className="animate-pulse-soft bg-primary h-2 w-2 rounded-full"></span>
            <span className="text-foreground text-sm font-medium">
              Contabilidade de confiança para sua empresa
            </span>
          </div>
          <h1 className="text-foreground animate-fade-up mb-6 text-4xl leading-tight font-bold delay-100 md:text-5xl lg:text-6xl">
            Simplificamos a contabilidade para você
            <span className="text-foreground/80 block">
              crescer sem preocupações
            </span>
          </h1>
          <p className="text-foreground/70 animate-fade-up mb-8 max-w-2xl text-lg delay-200 md:text-xl">
            Oferecemos soluções contábeis completas e personalizadas. Da
            abertuda à gestão fiscal, cuidamos de tudo para você focar no que
            realmente importa: o seu negócio.
          </p>
          <div className="animate-fade-up mb-10 flex flex-wrap gap-4 delay-300">
            <div className="text-foreground/90 flex items-center gap-2">
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
                className="lucide lucide-circle-check text-primary h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-medium">
                Mais de 15 anos de experiência
              </span>
            </div>
            <div className="text-foreground/90 flex items-center gap-2">
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
                className="lucide lucide-circle-check text-primary h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-medium">
                Atendimento personalizado
              </span>
            </div>
            <div className="text-foreground/90 flex items-center gap-2">
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
                className="lucide lucide-circle-check text-primary h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-sm font-medium">Equipe especializada</span>
            </div>
          </div>
          <div className="animate-fade-up flex flex-col gap-4 delay-400 sm:flex-row">
            <a href="">
              <Button>
                Solicitar Serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right h-5 w-5"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          ></path>
        </svg>
      </div>
    </section>
  );
}

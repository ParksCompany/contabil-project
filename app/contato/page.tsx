import { Input } from "../_components/ui/input";
import { Label } from "../_components/ui/label";
import { Button } from "../_components/ui/button";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function Contato() {
  return (
    <main className="flex-1 pt-16 md:pt-20">
      <Header />
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="bg-background/5 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10">
          <div className="animate-fade-up max-w-3xl">
            <span className="text-background/80 mb-4 inline-block text-sm font-semibold tracking-wide uppercase">
              Contato
            </span>
            <h1 className="text-background mb-6 text-4xl font-bold md:text-5xl">
              Entre em contato conosco
            </h1>
            <p className="text-background/80 text-xl">
              Estamos prontos para ajudar. Envie sua mensagem e nossa equipe
              retornará o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="animate-fade-up space-y-6">
              <h2 className="text-foreground mb-6 text-2xl font-semibold">
                Informações de Contato
              </h2>
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
                  <div>
                    <h4 className="text-foreground mb-1 font-semibold">
                      Endereço
                    </h4>
                    <p className="text-muted-foreground text-sm">
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
                  <div>
                    <h4 className="text-foreground mb-1 font-semibold">
                      Telefone
                    </h4>
                    <p className="text-muted-foreground text-sm">
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
                  <div>
                    <h4 className="text-foreground mb-1 font-semibold">
                      E-mail
                    </h4>
                    <p className="text-muted-foreground text-sm">
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
                  <div>
                    <h4 className="text-foreground mb-1 font-semibold">
                      Horário
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-up delay-100 lg:col-span-2">
              <div className="bg-card border-border shadow-card rounded-2xl border p-8">
                <h2 className="text-foreground mb-2 text-2xl font-semibold">
                  Envie sua mensagem
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contato.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="nome"
                      >
                        Nome Completo *
                      </Label>
                      <Input
                        className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="nome"
                        placeholder="Seu nome"
                        name="nome"
                      />
                    </div>
                    <div>
                      <Label
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        E-mail *
                      </Label>
                      <Input
                        type="email"
                        className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="email"
                        placeholder="seu@email.com"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <Label
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="telefone"
                      >
                        Telefone *
                      </Label>
                      <Input
                        type="tel"
                        className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        name="telefone"
                      />
                    </div>
                    <div>
                      <Label
                        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="assunto"
                      >
                        Assunto *
                      </Label>
                      <Input
                        className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        id="assunto"
                        placeholder="Assunto da mensagem"
                        name="assunto"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="mensagem"
                    >
                      Mensagem *
                    </Label>
                    <textarea
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex min-h-[150px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      id="mensagem"
                      placeholder="Digite sua mensagem..."
                      name="mensagem"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-base font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                      type="submit"
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
                        className="lucide lucide-send h-5 w-5"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                      Enviar Mensagem
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

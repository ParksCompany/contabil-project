import Header from "../_components/Header";
import Footer from "../_components/Footer";
import { Label } from "../_components/ui/label";
import { Button } from "../_components/ui/button";
import Link from "next/link";

export default function Registrar() {
  return (
    <main className="flex-1 pt-16 md:pt-20">
      <Header />
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="mx-auto max-w-md">
            <div className="animate-fade-up mb-8 text-center">
              <div className="bg-primary shadow-emerald-subtle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl">
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
                  className="lucide lucide-calculator text-primary-foreground h-8 w-8"
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
              <h1 className="text-foreground mb-2 text-3xl font-bold">
                Criar sua conta
              </h1>
              <p className="text-muted-foreground">
                Cadastre-se para solicitar serviços e acompanhar suas
                solicitações.
              </p>
            </div>
            <div className="bg-card border-border shadow-card animate-fade-up rounded-2xl border p-8 delay-100">
              <form className="space-y-6">
                <div>
                  <Label
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="nome"
                  >
                    Nome Completo
                  </Label>
                  <input
                    className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="nome"
                    placeholder="Seu nome completo"
                    name="nome"
                  />
                </div>
                <div>
                  <Label
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    E-mail
                  </Label>
                  <input
                    type="email"
                    className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="email"
                    placeholder="seu@email.com"
                    name="email"
                  />
                </div>
                <div>
                  <Label
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="telefone"
                  >
                    Telefone
                  </Label>
                  <input
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
                    htmlFor="senha"
                  >
                    Senha
                  </Label>
                  <input
                    type="password"
                    className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="senha"
                    placeholder="••••••••"
                    name="senha"
                  />
                </div>
                <div>
                  <Label
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="confirmarSenha"
                  >
                    Confirmar Senha
                  </Label>
                  <input
                    type="password"
                    className="border-input bg-background ring-offset-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring input-focus mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    id="confirmarSenha"
                    placeholder="••••••••"
                    name="confirmarSenha"
                  />
                </div>
                <Button
                  className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-8 text-base font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
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
                    className="lucide lucide-user-plus h-5 w-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <line x1="19" x2="19" y1="8" y2="14"></line>
                    <line x1="22" x2="16" y1="11" y2="11"></line>
                  </svg>
                  Criar Conta
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Já tem uma conta?
                  <Link
                    className="text-primary font-medium hover:underline"
                    href="/login"
                  >
                    Fazer login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

export default function About() {
    return(
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="animate-fade-up flex flex-col gap-6">
                        <span className="inline-block text-sm font-semibold text-primary tracking-wide uppercase">
                            Sobre Nós
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Sua parceira de confiança em soluções contábeis
                        </h2>
                        <div className="flex flex-col gap-6">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                A Contabilidade Modelo nasceu com o propósito de simplificar a gestão contábil e fiscal das empresas brasileiras. Com mais de 15 anos de experiência, nossa equipe de especialistas trabalha incansavelmente para oferecer soluções personalizadas.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Organizados em setores especializados — Societário, Pessoal, Fiscal e Contábil — garantimos atendimento ágil e preciso para cada necessidade do seu negócio.
                            </p>
                        </div>
                        <Link href="/sobre">
                            <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow h-12 rounded-lg px-8 text-base">Conheça Nossa História
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Button>
                        </Link>
                    </div>
                    <div className="flex flex-row flex-wrap gap-6 animate-fade-up delay-200">
                        <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center flex flex-col gap-4 flex-1 min-w-[calc(50%-12px)]">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award w-6 h-6 text-primary">
                                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                    <circle cx="12" cy="8" r="6"></circle>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-3xl font-bold text-foreground">
                                    15+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Anos de experiência
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center flex flex-col gap-4 flex-1 min-w-[calc(50%-12px)]">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-6 h-6 text-primary">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-3xl font-bold text-foreground">
                                    500+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Clientes atendidos
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center flex flex-col gap-4 flex-1 min-w-[calc(50%-12px)]">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building w-6 h-6 text-primary">
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
                                <div className="text-3xl font-bold text-foreground">
                                    1000+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Empresas abertas
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center flex flex-col gap-4 flex-1 min-w-[calc(50%-12px)]">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-6 h-6 text-primary">
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                    <polyline points="16 7 22 7 22 13"></polyline>
                                </svg>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="text-3xl font-bold text-foreground">
                                    98%
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Satisfação
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
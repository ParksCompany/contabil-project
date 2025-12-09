import { Button } from "@/app/_components/ui/button";

export default function Services() {
    return(
        <section className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
                    <span className="inline-block text-sm font-semibold text-primary tracking-wide uppercase">Nossos Serviços</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluções completas para sua empresa</h2>
                    <p className="text-muted-foreground text-lg">
                        Oferecemos uma gama completa de serviços contábeis, organizados por setores especializados para melhor atendê-lo.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row lg:flex-row flex-wrap gap-6">
                    <div className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up flex flex-col gap-5 flex-1 min-w-[280px] md:flex-[1_1_calc(50%-12px)] lg:flex-[1_1_calc(25%-18px)]" style={{ animationDelay: '0ms' }}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building2 w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                            <path d="M10 6h4"></path>
                            <path d="M10 10h4"></path>
                            <path d="M10 14h4"></path>
                            <path d="M10 18h4"></path>
                        </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Societário
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Abertura, alteração e encerramento de empresas com toda documentação necessária.
                            </p>
                        </div>
                        <a href="/servicos" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                            Saiba mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up flex flex-col gap-5 flex-1 min-w-[280px] md:flex-[1_1_calc(50%-12px)] lg:flex-[1_1_calc(25%-18px)]" style={{ animationDelay: '100ms' }}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Departamento Pessoal
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Folha de pagamento, admissões, rescisões e toda gestão de colaboradores.
                            </p>
                        </div>
                        <a className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all" href="/servicos">
                            Saiba mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up flex flex-col gap-5 flex-1 min-w-[280px] md:flex-[1_1_calc(50%-12px)] lg:flex-[1_1_calc(25%-18px)]" style={{ animationDelay: '200ms' }}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                <path d="M10 9H8"></path>
                                <path d="M16 13H8"></path>
                                <path d="M16 17H8"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Departamento Fiscal
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Declarações, certidões e planejamento tributário para otimizar sua carga fiscal.
                            </p>
                        </div>
                        <a className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all" href="/servicos">
                            Saiba mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up flex flex-col gap-5 flex-1 min-w-[280px] md:flex-[1_1_calc(50%-12px)] lg:flex-[1_1_calc(25%-18px)]" style={{ animationDelay: '300ms' }}>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors">
                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Contabilidade
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Balanços, demonstrações e relatórios contábeis completos para sua empresa.
                            </p>
                        </div>
                        <a className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all" href="/servicos">
                            Saiba mais
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="text-center flex flex-col gap-12">
                    <a href="/servicos">
                        <Button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow h-12 rounded-lg px-8 text-base">
                            Ver Todos os Serviços
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}
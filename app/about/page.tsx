import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";


export default function Sobre() {
    return(
            <main className="flex-1 pt-16 md:pt-20">
                <Header />
                <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--gradient-hero)' }}>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl"></div>
                    <div className="container-custom relative z-10">
                        <div className="max-w-3xl animate-fade-up">
                            <span className="inline-block text-sm font-semibold text-background/80 mb-4 tracking-wide uppercase">Sobre Nós</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">Conheça a Contabilidade Modelo</h1>
                            <p className="text-xl text-background/80">Há mais de 15 anos transformando a contabilidade em parceria estratégica para o sucesso do seu negócio.</p>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="animate-fade-up">
                                <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Nossa História</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Uma trajetória de excelência</h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>A Contabilidade Modelo foi fundada em 2009 com um objetivo claro: tornar a contabilidade acessível, compreensível e estratégica para empresas de todos os portes.</p>
                                    <p>Ao longo dos anos, construímos uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. Cada colaborador é especialista em sua área, garantindo que você receba sempre o melhor atendimento.</p>
                                    <p>Hoje, atendemos mais de 500 clientes ativos, entre empresas e pessoas físicas, sempre com o mesmo compromisso de excelência que nos trouxe até aqui.</p>
                                </div>
                            </div>
                            <div className="relative animate-fade-up delay-200">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 p-8 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-award w-24 h-24 text-primary mx-auto mb-4">
                                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                        <div className="text-5xl font-bold text-foreground mb-2">15+</div>
                                        <div className="text-muted-foreground">Anos de experiência</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-muted/50">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-card border border-border card-hover animate-fade-up">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-7 h-7 text-primary">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="6"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Missão</h3>
                                <p className="text-muted-foreground leading-relaxed">Oferecer soluções contábeis de excelência, contribuindo para o crescimento sustentável de nossos clientes através de um atendimento personalizado, ético e inovador.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-card border border-border card-hover animate-fade-up delay-100">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lightbulb w-7 h-7 text-primary">
                                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                                        <path d="M9 18h6"></path>
                                        <path d="M10 22h4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-4">Nossa Visão</h3>
                                <p className="text-muted-foreground leading-relaxed">Ser referência nacional em contabilidade empresarial, reconhecida pela qualidade dos serviços, pela inovação tecnológica e pelo impacto positivo nos negócios de nossos clientes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Nossos Valores</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">O que nos guia</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center animate-fade-up" style={{ animationDelay: '0ms' }}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-7 h-7 text-primary">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Comprometimento</h3>
                                <p className="text-muted-foreground text-sm">Dedicação total aos nossos clientes, buscando sempre superar expectativas.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center animate-fade-up" style={{ animationDelay: '100ms' }}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield w-7 h-7 text-primary">
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Ética</h3>
                                <p className="text-muted-foreground text-sm">Atuação transparente e íntegra em todas as nossas relações.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center animate-fade-up" style={{ animationDelay: '200ms' }}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-7 h-7 text-primary">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Trabalho em Equipe</h3>
                                <p className="text-muted-foreground text-sm">Colaboração entre setores para oferecer soluções completas.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover text-center animate-fade-up" style={{ animationDelay: '300ms' }}>
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lightbulb w-7 h-7 text-primary">
                                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                                        <path d="M9 18h6"></path>
                                        <path d="M10 22h4"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Inovação</h3>
                                <p className="text-muted-foreground text-sm">Atualização constante com as melhores práticas e tecnologias.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-muted/50">
                    <div className="container-custom">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">Nossa Estrutura</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Setores especializados</h2>
                            <p className="text-muted-foreground text-lg">Organizamos nossa equipe em departamentos especializados para oferecer o melhor atendimento em cada área.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up" style={{ animationDelay: '0ms' }}>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Setor Societário</h3>
                                <p className="text-muted-foreground">Responsável por abertura, alteração e encerramento de empresas, além de toda documentação societária.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up" style={{ animationDelay: '100ms' }}>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Departamento Pessoal</h3>
                                <p className="text-muted-foreground">Cuida de folha de pagamento, admissões, demissões, férias e toda gestão de recursos humanos.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up" style={{ animationDelay: '200ms' }}>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Departamento Fiscal</h3>
                                <p className="text-muted-foreground">Gerencia declarações fiscais, certidões, planejamento tributário e obrigações acessórias.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up" style={{ animationDelay: '300ms' }}>
                                <h3 className="text-xl font-semibold text-foreground mb-3">Departamento Contábil</h3>
                                <p className="text-muted-foreground">Elabora balanços, demonstrações contábeis e relatórios gerenciais para tomada de decisão.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
    )
}
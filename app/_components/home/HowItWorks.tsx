export default function HowItWorks() {
    return(
        <section className="section-padding bg-muted/50">
            <div className="container-custom">
                <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
                    <span className="inline-block text-sm font-semibold text-primary tracking-wide uppercase">
                        Como Funciona
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Processo simples e transparente
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Em poucos passos você solicita um serviço e nossa equipe cuida de todo o resto.
                    </p>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-12">
                    {/* Linha conectora - apenas em desktop */}
                    <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-border z-0"></div>
                    
                    {/* Passo 01 */}
                    <div className="relative z-10 text-center flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
                        <div className="relative inline-flex mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer2 w-8 h-8 text-primary">
                                    <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                                </svg>
                            </div>
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                01
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Escolha o Serviço
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Navegue pela nossa lista de serviços e selecione o que melhor atende sua necessidade.
                            </p>
                        </div>
                    </div>

                    {/* Passo 02 */}
                    <div className="relative z-10 text-center flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
                        <div className="relative inline-flex mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen w-8 h-8 text-primary">
                                    <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"></path>
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                    <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
                                </svg>
                            </div>
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                02
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Preencha os Dados
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Complete o formulário com as informações necessárias para a realização do serviço.
                            </p>
                        </div>
                    </div>

                    {/* Passo 03 */}
                    <div className="relative z-10 text-center flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '200ms' }}>
                        <div className="relative inline-flex mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send w-8 h-8 text-primary">
                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                    <path d="m21.854 2.147-10.94 10.939"></path>
                                </svg>
                            </div>
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                03
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Envie a Solicitação
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Sua solicitação é direcionada automaticamente para o setor responsável.
                            </p>
                        </div>
                    </div>

                    {/* Passo 04 */}
                    <div className="relative z-10 text-center flex flex-col gap-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
                        <div className="relative inline-flex mx-auto">
                            <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big w-8 h-8 text-primary">
                                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                    <path d="m9 11 3 3L22 4"></path>
                                </svg>
                            </div>
                            <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                04
                            </span>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                                Acompanhe o Status
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Receba atualizações e acompanhe o andamento da sua solicitação.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


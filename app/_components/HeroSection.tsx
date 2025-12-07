import { Button } from "./ui/button"

export default function HeroSection() {
    return(
        <main className="flex-1 pt-16 md:pt-20">
            <section className="overflow-hidden h-full flex items-center">
                <div className="absolute inset-0 -z-10 background:var(--gradient-hero)"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-background/5 rounded-full blur-3xl"></div>

                <div className="py-24 md:py-32 lg:py-40">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-up">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse-soft"></span>
                            <span className="text-sm text-white/90 font-medium">Contabilidade de confiança para sua empresa</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up delay-100">
                            Simplificamos a contabilidade para você
                            <span className="block text-white/80">cescer sem preocupações</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl animate-fade-up delay-200">
                            Oferecemos soluções contábeis completas e personalizadas. Da abertuda à gestão fiscal, cuidamos de tudo para você focar no que realmente importa: o seu negócio.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
                            <div className="flex items-center gap-2 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="curentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-5 h-5 text-white/70">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-sm font-medium">Mais de 15 anos de experiência</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="curentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-5 h-5 text-white/70">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-sm font-medium">Atendimendo personalizado</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="curentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check w-5 h-5 text-white/70">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="text-sm font-medium">Equipe especializada</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-ow gap-4 animate-fade-up delay-400">
                            <a href="">
                                <Button vatiant="create1">
                                    Solicitar Serviço
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right w-5 h-5">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
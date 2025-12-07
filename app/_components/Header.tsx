import { Button } from "@/app/_components/ui/button";
import { Calculator, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return(
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
            <nav className="container-custom" aria-label="Global">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-emerald-subtle group-hover:shadow-emerald-glow transition-shadow duration-300">
                            <Calculator className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg text-foreground leading-tight">Contabilidade</span>
                            <span className="text-xs text-primary font-medium -mt-0.5">Modelo</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-1">
                        <Link href="/" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-primary bg-primary/10">Home</Link>
                        <Link href="/sobre" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/70 hover:text-primary hover:bg-primary/5">Sobre</Link>
                        <Link href="/servicos" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/70 hover:text-primary hover:bg-primary/5">Serviços</Link>
                        <Link href="/solicitar" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/70 hover:text-primary hover:bg-primary/5">Solicitar</Link>
                        <Link href="/contato" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-foreground/70 hover:text-primary hover:bg-primary/5">Contato</Link>
                    </div>
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/login"> 
                            <Button variant="create1" className="cursor-pointer">Entrar</Button>
                        </Link>

                        <Link href="/registrar">
                            <Button variant="create2" className="cursor-pointer">
                                <User className="w-4 h-4 mr-2" />
                                Criar Conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
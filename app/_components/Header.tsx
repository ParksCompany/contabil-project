import { Button } from "@/app/_components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="glass-effect border-border/50 fixed top-0 right-0 left-0 z-50 border-b">
      <nav
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex items-center gap-2">
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="Logo Assessoria Contabil"
            />
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/"
              className="text-primary bg-primary/10 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary hover:bg-primary/5 text-foreground/70 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Sobre
            </Link>
            <Link
              href="/services"
              className="hover:text-primary hover:bg-primary/5 text-foreground/70 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Serviços
            </Link>
            <Link
              href="/contato"
              className="hover:text-primary hover:bg-primary/5 text-foreground/70 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
            >
              Contato
            </Link>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login">
              <Button variant="ghost" className="cursor-pointer">
                Entrar
              </Button>
            </Link>

            <Link href="/registrar">
              <Button className="cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Criar Conta
              </Button>
            </Link>
          </div>
          <Button className="hover:bg-accent cursor-pointer rounded-lg p-2 transition-colors md:hidden">
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
              className="lucide lucide-menu text-foreground h-6 w-6"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </Button>
        </div>
      </nav>
    </header>
  );
}

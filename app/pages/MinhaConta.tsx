'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/app/_components/layout/Layout';
import { Button } from '@/app/_components/ui/button';
import { toast } from '@/app/_hooks/use-toast';
import { User, Mail, Phone, Shield, LogOut, FileText, ArrowRight } from 'lucide-react';

interface UserData {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  role: string;
}

const roleLabels: Record<string, string> = {
  cliente: 'Cliente',
  interno: 'Usuário Interno',
  admin: 'Administrador',
};

export default function MinhaConta() {
  const [user, setUser] = useState<UserData | null>(() => {
    // Initialize state lazily from localStorage to avoid extra renders.
    if (typeof window === 'undefined') {
      return null;
    }
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const router = useRouter();

  useEffect(() => {
    // This effect now only handles the case where the user is not found
    // after the initial state has been set.
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: 'Logout realizado',
      description: 'Você saiu da sua conta.',
    });
    router.push('/');
  };

  if (!user) {
    return null;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-6 animate-fade-up">
            <div className="w-20 h-20 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
              <User className="w-10 h-10 text-background" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-background mb-1">
                Olá, {user.nome.split(' ')[0]}!
              </h1>
              <p className="text-background/80">
                Bem-vindo à sua área de cliente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1 animate-fade-up">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Meus Dados
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium text-foreground">{user.nome}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail</p>
                      <p className="font-medium text-foreground">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium text-foreground">{user.telefone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Tipo de Conta</p>
                      <p className="font-medium text-foreground">{roleLabels[user.role] || user.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <Button variant="destructive" className="w-full" onClick={handleLogout}>
                    <LogOut className="w-5 h-5" />
                    Sair da Conta
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-2 animate-fade-up delay-100">
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Ações Rápidas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link href="/solicitacao" className="block">
                  <div className="p-6 rounded-2xl bg-card border border-border card-hover group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <FileText className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Nova Solicitação
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Solicite um novo serviço contábil para sua empresa.
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Solicitar
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
                
                <Link href="/servicos" className="block">
                  <div className="p-6 rounded-2xl bg-card border border-border card-hover group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <FileText className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Ver Serviços
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Conheça todos os serviços que oferecemos.
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Ver todos
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Info Box */}
              <div className="mt-8 p-6 rounded-2xl bg-muted/50 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Suas Solicitações
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Em breve você poderá acompanhar o status de todas as suas solicitações diretamente por aqui.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Em desenvolvimento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
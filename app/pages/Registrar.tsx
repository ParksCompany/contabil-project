'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/app/_components/layout/Layout';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Label } from '@/app/_components/ui/label';
import { toast } from '@/app/_hooks/use-toast';
import { Loader2, UserPlus, Calculator } from 'lucide-react';

const registerSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  senha: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
  confirmarSenha: z.string(),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmarSenha'],
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function Registrar() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Simulating successful registration
      localStorage.setItem('user', JSON.stringify({
        id: '1',
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        role: 'cliente',
      }));
      
      toast({
        title: 'Conta criada!',
        description: 'Bem-vindo à Contabilidade Modelo.',
      });
      
      router.push('/minha-conta');
    } catch (error) {
      toast({
        title: 'Erro ao criar conta',
        description: 'Tente novamente em alguns instantes.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8 animate-fade-up">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-emerald-subtle">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Criar sua conta
              </h1>
              <p className="text-muted-foreground">
                Cadastre-se para solicitar serviços e acompanhar suas solicitações.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-card animate-fade-up delay-100">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    className="input-focus mt-2"
                    {...register('nome')}
                  />
                  {errors.nome && (
                    <p className="text-destructive text-sm mt-1">{errors.nome.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="input-focus mt-2"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="input-focus mt-2"
                    {...register('telefone')}
                  />
                  {errors.telefone && (
                    <p className="text-destructive text-sm mt-1">{errors.telefone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="senha">Senha</Label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="••••••••"
                    className="input-focus mt-2"
                    {...register('senha')}
                  />
                  {errors.senha && (
                    <p className="text-destructive text-sm mt-1">{errors.senha.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                  <Input
                    id="confirmarSenha"
                    type="password"
                    placeholder="••••••••"
                    className="input-focus mt-2"
                    {...register('confirmarSenha')}
                  />
                  {errors.confirmarSenha && (
                    <p className="text-destructive text-sm mt-1">{errors.confirmarSenha.message}</p>
                  )}
                </div>
                
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Criando conta...
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-5 h-5" />
                      Criar Conta
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Já tem uma conta?{' '}
                  <Link href="/login" className="text-primary font-medium hover:underline">
                    Fazer login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
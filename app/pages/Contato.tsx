import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '@/app/_components/layout/Layout';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import { Label } from '@/app/_components/ui/label';
import { toast } from '@/app/_hooks/use-toast';
import { Loader2, Send, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  assunto: z.string().min(3, 'Assunto deve ter pelo menos 3 caracteres'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contato() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Mensagem de contato:', data);
      
      setIsSuccess(true);
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      
      reset();
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Tente novamente em alguns instantes.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-sm font-semibold text-background/80 mb-4 tracking-wide uppercase">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Entre em contato conosco
            </h1>
            <p className="text-xl text-background/80">
              Estamos prontos para ajudar. Envie sua mensagem e nossa equipe retornará o mais breve possível.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h2>
              
              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground text-sm">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground text-sm">
                      (11) 3000-0000<br />
                      (11) 99000-0000
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground text-sm">
                      contato@contabilidademodelo.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                    <p className="text-muted-foreground text-sm">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 animate-fade-up delay-100">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                {isSuccess ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos sua mensagem e entraremos em contato em breve.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      Envie sua mensagem
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Preencha o formulário abaixo e entraremos em contato.
                    </p>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="nome">Nome Completo *</Label>
                          <Input
                            id="nome"
                            placeholder="Seu nome"
                            className="input-focus mt-2"
                            {...register('nome')}
                          />
                          {errors.nome && (
                            <p className="text-destructive text-sm mt-1">{errors.nome.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="telefone">Telefone *</Label>
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
                          <Label htmlFor="assunto">Assunto *</Label>
                          <Input
                            id="assunto"
                            placeholder="Assunto da mensagem"
                            className="input-focus mt-2"
                            {...register('assunto')}
                          />
                          {errors.assunto && (
                            <p className="text-destructive text-sm mt-1">{errors.assunto.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="mensagem">Mensagem *</Label>
                        <Textarea
                          id="mensagem"
                          placeholder="Digite sua mensagem..."
                          className="input-focus mt-2 min-h-[150px]"
                          {...register('mensagem')}
                        />
                        {errors.mensagem && (
                          <p className="text-destructive text-sm mt-1">{errors.mensagem.message}</p>
                        )}
                      </div>
                      
                      <div className="flex justify-end">
                        <Button type="submit" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Enviar Mensagem
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

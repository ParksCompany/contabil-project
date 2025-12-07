import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { Input } from '@/app/_components/ui/input';
import { Textarea } from '@/app/_components/ui/textarea';
import { Label } from '@/app/_components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/select';
import { toast } from '@/app/_hooks/use-toast';
import { Service, ServiceField } from '@/app/config/services';

interface DynamicServiceFormProps {
  service: Service;
}

// Build dynamic schema based on service fields
function buildSchema(fields: ServiceField[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  
  fields.forEach((field) => {
    let validator: z.ZodString | z.ZodOptional<z.ZodString>;
    
    switch (field.type) {
      case 'email':
        validator = z.string().email({ message: 'E-mail inválido' });
        break;
      case 'tel':
        validator = z.string().min(10, { message: 'Telefone deve ter pelo menos 10 dígitos' });
        break;
      default:
        validator = z.string();
    }
    
    if (field.required) {
      // The 'email' and 'tel' types already have a minimum length, so min(1) is redundant for them
      // unless they can be empty but still required, which is contradictory.
      // We ensure a non-empty string for all required fields that don't have specific length validation.
      if (field.type !== 'tel') {
        validator = (validator as z.ZodString).min(1, { message: 'Campo obrigatório' });
      }
    } else {
      validator = validator.optional();
    }
    
    shape[field.name] = validator;
  });
  
  return z.object(shape);
}

export function DynamicServiceForm({ service }: DynamicServiceFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const schema = buildSchema(service.campos);
  type FormData = z.infer<typeof schema>;
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Solicitação enviada:', {
        servicoId: service.id,
        setorId: service.setorId,
        dados: data,
      });
      
      setIsSuccess(true);
      toast({
        title: 'Solicitação enviada!',
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

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          Solicitação Enviada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Recebemos sua solicitação de {service.nome}. Nossa equipe do setor {service.setorNome} entrará em contato em breve.
        </p>
        <Button onClick={() => setIsSuccess(false)}>
          Fazer Nova Solicitação
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {service.campos.map((field) => (
          <div
            key={field.name}
            className={field.type === 'textarea' ? 'md:col-span-2' : ''}
          >
            <Label htmlFor={field.name} className="text-foreground mb-2 block">
              {field.label}
              {field.required && <span className="text-destructive ml-1">*</span>}
            </Label>
            
            {field.type === 'select' ? (
              <Select onValueChange={(value) => setValue(field.name, value)}>
                <SelectTrigger className="input-focus">
                  <SelectValue placeholder="Selecione uma opção" />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.type === 'textarea' ? (
              <Textarea
                id={field.name}
                placeholder={field.placeholder}
                className="input-focus min-h-[120px]"
                {...register(field.name)}
              />
            ) : (
              <Input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="input-focus"
                {...register(field.name)}
              />
            )}
            
            {errors[field.name] && (
              <p className="text-destructive text-sm mt-1">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-end pt-4">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar Solicitação
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

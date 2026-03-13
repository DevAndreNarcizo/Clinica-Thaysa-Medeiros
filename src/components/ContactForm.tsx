'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { services } from '@/data/services';
import { siteConfig } from '@/data/config';
import { formatWhatsAppLink } from '@/lib/utils';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Construct the WhatsApp message
            const message = `*Nova Mensagem de Contato*\n\n` +
                `*Nome:* ${data.name}\n` +
                `*Email:* ${data.email}\n` +
                `*WhatsApp:* ${data.phone}\n` +
                `*Assunto:* ${data.service || 'Geral'}\n\n` +
                `*Mensagem:* ${data.message}`;

            // Open WhatsApp in a new tab
            window.open(formatWhatsAppLink(siteConfig.whatsapp, message), '_blank');
            
            setSubmitStatus('success');
            reset();
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('Error constructing WhatsApp link:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Nome Completo *
                </label>
                <Input
                    id="name"
                    {...register('name')}
                    error={errors.name?.message}
                    placeholder="Seu nome"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-gold/50"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    E-mail *
                </label>
                <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    placeholder="seu@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-gold/50"
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Telefone *
                </label>
                <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                    placeholder="(00) 00000-0000"
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-gold/50"
                />
            </div>

            {/* Service */}
            <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Serviço de Interesse
                </label>
                <select
                    id="service"
                    {...register('service')}
                    className="flex h-12 w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-white text-base focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-transparent transition-all duration-200"
                    style={{ colorScheme: 'dark' }}
                >
                    <option value="" className="bg-navy text-white">Selecione um serviço</option>
                    {services.map((service) => (
                        <option key={service.id} value={service.title} className="bg-navy text-white">
                            {service.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wide">
                    Mensagem *
                </label>
                <Textarea
                    id="message"
                    {...register('message')}
                    error={errors.message?.message}
                    placeholder="Conte-nos como podemos ajudar..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:ring-gold/50"
                />
            </div>

            {/* Submit Status */}
            {submitStatus === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-semibold mb-1">Mensagem enviada com sucesso!</p>
                        <p className="text-xs text-green-400/80">
                            Nossa equipe retornará em até <strong>2 horas</strong> durante o horário comercial (Ter–Sáb, 8h–18h).
                            Ou chame direto no WhatsApp para resposta imediata. ✨
                        </p>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">
                        Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.
                    </p>
                </div>
            )}

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                className="w-full gold-gradient text-navy font-bold text-xl py-8 rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                    </>
                )}
            </Button>
        </form>
    );
}

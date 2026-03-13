import { z } from 'zod';

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
    name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'Telefone inválido'),
    service: z.string().optional(),
    message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Appointment scheduling validation schema
 */
export const appointmentSchema = z.object({
    name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().min(10, 'Telefone inválido'),
    service: z.string().min(1, 'Selecione um serviço'),
    preferredDate: z.string().min(1, 'Selecione uma data'),
    preferredTime: z.string().min(1, 'Selecione um horário'),
    notes: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

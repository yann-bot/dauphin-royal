import { z } from 'zod';

export const contactSchema = z.object({
  name:    z.string().min(2, 'Nom requis (min. 2 caractères)').max(80),
  email:   z.string().email('Email invalide').max(120),
  phone:   z.string().regex(/^[+\d\s\-()\s]{6,20}$/, 'Téléphone invalide').optional().or(z.literal('')),
  subject: z.string().min(3, 'Sujet requis'),
  message: z.string().min(10, 'Message trop court (min. 10 caractères)').max(2000),
  honeypot:z.string().max(0, 'Bot détecté').optional(),
});

// Mirrors the live https://dauphinroyal.com/demande-de-devis/ form.
export const PREFIXES       = ['M.', 'Mme', 'Mx', 'Mlle', 'Dr.', 'Prof.'] as const;
export const DEVIS_SERVICES = ['Mobilier bureau', 'Fournitures', 'Informatique', 'Personnalisation'] as const;
export const CONTACT_METHODS = ['SMS', 'Téléphone', 'Email'] as const;

const optional = (schema: z.ZodString) => schema.optional().or(z.literal(''));

export const devisSchema = z.object({
  prefix:        z.enum(PREFIXES).optional().or(z.literal('')),
  name:          z.string().min(2, 'Nom du contact requis (min. 2 caractères)').max(80),
  company:       optional(z.string().max(100)),
  email:         z.string().email('Adresse e-mail invalide').max(120),
  phone:         z.string().regex(/^[+\d\s\-()]{6,20}$/, 'Numéro de téléphone invalide'),
  services:      z.array(z.enum(DEVIS_SERVICES)).optional().default([]),
  notes:         optional(z.string().max(1000, 'Notes trop longues (max. 1000 caractères)')),
  contactMethod: z.enum(CONTACT_METHODS).optional().or(z.literal('')),
  honeypot:      z.string().max(0, 'Bot détecté').optional(),
});

export type ContactData = z.infer<typeof contactSchema>;
export type DevisData   = z.infer<typeof devisSchema>;

export function formatErrors(err: any): Record<string, string[]> {
  return err.flatten().fieldErrors;
}

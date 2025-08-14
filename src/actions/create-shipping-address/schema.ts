import { z } from "zod";

export const createShippingAddressSchema = z.object({
  email: z.email("E-mail inválido."),
  fullName: z.string().min(1, "O nome completo é obrigatório."),
  cpf: z.string().min(14, "CPF inválido."),
  phone: z.string().min(15, "Celular inválido."),
  zipCode: z.string().min(9, "CEP inválido."),
  address: z.string().min(1, "O endereço é obrigatório."),
  number: z.string().min(1, "O número é obrigatório."),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "O bairro é obrigatório."),
  city: z.string().min(1, "A cidade é obrigatória."),
  state: z.string().min(1, "O estado é obrigatório."),
});

export type CreateShippingAddressSchema = z.infer<
  typeof createShippingAddressSchema
>;

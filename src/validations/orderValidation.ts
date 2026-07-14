import { z } from "zod";

export const orderSchema = z.object({
    user: z.string().min(2).max(10),
    product: z.string().min(2).max(20),
    quantity: z.number().int().positive().min(1)
})
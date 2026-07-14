import {z} from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.email(),
    age: z.number().int().min(1).max(100).positive("Age must be a positive integer")
});
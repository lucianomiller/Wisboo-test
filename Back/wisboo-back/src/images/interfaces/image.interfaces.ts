import { Document } from "mongoose";
export interface Images extends Document{
    name: string;
    lastname: string;
    email: string;
    createdAt: Date;
    assignedAt:Date;
    consulta: string;
    assigned:Boolean;
} 
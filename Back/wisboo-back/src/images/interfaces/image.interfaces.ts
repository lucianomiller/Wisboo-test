import { Document } from "mongoose";
export interface Images extends Document{
    url: string;
    _id:number
} 
import { Schema } from "mongoose";

export const ImageSchema = new Schema({

    url: String,
    _id:{
        type:Number,
        unique:true
    }
    /* name: String,
    lastname: String,
    email: {
        type:String,         
    },
    consulta: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    assigned:{
        type:Boolean,
        default:false
    },
    assignedAt:{
        type:Date
    },
    complete:{
        type:Boolean,
        default:false
    },
    answer:{
        type:String
    } */

});
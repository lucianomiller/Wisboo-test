import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Images } from "./interfaces/image.interfaces";
import { CreateImageDTO } from "./dto/image.dto";

@Injectable()
export class ImagesService {

    constructor(@InjectModel('Images') private readonly imagesModel:Model<Images> ){} 

    async createImage(createImageDTO:CreateImageDTO):Promise<Images>{
        const image= new this.imagesModel(createImageDTO)
        return  image.save()
    }
}

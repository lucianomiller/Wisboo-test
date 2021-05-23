import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Images } from "./interfaces/image.interfaces";
import { CreateImageDTO } from "./dto/image.dto";
import  axios, { AxiosResponse }  from "axios";

@Injectable()
export class ImagesService {

    constructor(@InjectModel('Images') private readonly imagesModel:Model<Images> ){} 

    async createImage(createImageDTO:CreateImageDTO):Promise<Images>{
        const find = await this.imagesModel.findById(createImageDTO._id)
        if(find) return 
        const image= new this.imagesModel(createImageDTO)
        return  image.save()
    }

    async getImages(query:string, page:string, size:number): Promise<AxiosResponse<any>>{        
        const images = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${size}&client_id=afcDrMZ0wW1lGV6dLLpKavGrFztxceOfZCq-nKpGu9I`)
        return images.data
    }

    async getMyImages(page:number, size:number): Promise<any>{
        if(page===1){
            const images = await this.imagesModel.find().limit(size)
            return images
        }
        const images = await this.imagesModel.find().skip(size*(page-1)).limit(size)
        return images
    }

    async deleteImage(imageID:number):Promise<any>{
        const deletedConsulta = await this.imagesModel.findByIdAndDelete(imageID)
        return deletedConsulta
    }
}

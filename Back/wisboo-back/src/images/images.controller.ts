import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateImageDTO } from "./dto/image.dto";
import { ImagesService } from "./images.service";

@Controller('images')
export class ImagesController {

    constructor(private imagesServices:ImagesService){}

    // Add Image: /images/
    @Post('/')
    async createPost(@Res() res, @Body() createConsultDTO: CreateImageDTO){
        const image= await this.imagesServices.createImage(createConsultDTO)
        return res.status(HttpStatus.OK).json({
            message:"Imagen guardada!",
            image
        })
    }
}

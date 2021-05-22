import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
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

    //Get images: /images/search?query&page&size
    @Get('/search')
    async getImages(@Res() res, @Query('query') query, @Query('page') page, @Query('size') size) {
        const images = await this.imagesServices.getImages(query, page, size)
        return res.status(HttpStatus.OK).json({
            message:"Imagenes encontradas",
            images
        })   
    }

    //Get images: /images?page&size
    @Get('/')
    async getMyImages(@Res() res, @Query('page') page, @Query('size') size) {
        const images = await this.imagesServices.getMyImages(page, size)
        return res.status(HttpStatus.OK).json({
            message:"Imagenes encontradas",
            images
        })   
    }
}

import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Post, Query, Res } from '@nestjs/common';
import { CreateImageDTO } from "./dto/image.dto";
import { ImagesService } from "./images.service";

@Controller('images')
export class ImagesController {

    constructor(private imagesServices:ImagesService){}

    // Add Image: /images/
    @Post('/')
    async createPost(@Res() res, @Body() createImageDTO: CreateImageDTO){
        const image= await this.imagesServices.createImage(createImageDTO)
        if (!image) throw new NotFoundException('Imagen repetida');
        return res.status(HttpStatus.OK).json({
            message:"Imagen guardada!",
            image
        })
    }

    //Get images: /images/search?query&page&size
    @Get('/search')
    async getImages(@Res() res, @Query('query') query, @Query('page') page, @Query('size') size:string) {
        const images = await this.imagesServices.getImages(query, page, parseInt(size,10))
        return res.status(HttpStatus.OK).json({
            message:"Imagenes encontradas",
            images
        })   
    }

    //Get images: /images?page&size
    @Get('/')
    async getMyImages(@Res() res, @Query('page') page, @Query('size') size) {
        const images = await this.imagesServices.getMyImages(page, parseInt(size,10))
        return res.status(HttpStatus.OK).json({
            message:"Imagenes encontradas",
            images
        })   
    }

    @Delete('/')
    async deleteProduct(@Res() res, @Body() imageID) {
        const image = await this.imagesServices.deleteImage(imageID.id);
        if (!image) throw new NotFoundException('Imagen no encontrada!');
        return res.status(HttpStatus.OK).json({
            message: 'Imagen Eliminada',
            image
        });
    }
}

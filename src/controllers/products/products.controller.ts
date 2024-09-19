import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from 'src/services/products/products.service'
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';

@Controller('products')
export class ProductsController {
    constructor (private productService: ProductsService) {}

    @Get('')
    getLotsProducts (
      // @Query('limit') limit: number,
      // @Query('offset') offset: number, 
      // @Query('brand') brand: string, 
      // @Query('color') color: string
    ) {
      // return {
      //   message: `Muchos Productos: Limit = ${limit}, Offset = ${offset}, Brand = ${brand}, Color = ${color}`
      // }

      return this.productService.findAll()
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProducts ( @Param('id', ParseIntPipe) id: string) {
      // return {
      //   message: `Producto con id número: ${id}`
      // }

      return this.productService.findOne(+id)
    }

    @Post()
    create(@Body() payload: CreateProductDto) {
        // return {
        //     message: 'Acción de crear',
        //     payLoad
        // }
        return this.productService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
      // return {
      //   id,
      //   payload
      // }
      return this.productService.update(+id, payload)
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
      return this.productService.remove(+id)
    }
}

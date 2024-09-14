import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get('')
    getLotsProducts (
      @Query('limit') limit: number,
      @Query('offset') offset: number, 
      @Query('brand') brand: string, 
      @Query('color') color: string
    ) {
      return {
        message: `Muchos Productos: Limit = ${limit}, Offset = ${offset}, Brand = ${brand}, Color = ${color}`
      }
    }
  
    @Get(':id')
    getProducts (@Param('id') id: string) {
      return {
        message: `Producto con id número: ${id}`
      }
    }

    @Post()
    create(@Body() payLoad: any) {
        return {
            message: 'Acción de crear',
            payLoad
        }
    }
}

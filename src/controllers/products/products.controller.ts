import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get('')
    getLotsProducts (
      @Query('limit') limit: number,
      @Query('offset') offset: number, 
      @Query('brand') brand: string, 
      @Query('color') color: string
    ) {
      return `Muchos Productos: Limit = ${limit}, Offset = ${offset}, Brand = ${brand}, Color = ${color}`
    }
  
    @Get(':id')
    getProducts (@Param('id') id: string) {
      return `Producto con id número: ${id}`
    }
}

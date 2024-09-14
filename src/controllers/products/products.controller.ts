import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

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
    @HttpCode(HttpStatus.ACCEPTED)
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

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
      return {
        id,
        payload
      }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
      return {
        message: `El producto con id ${id} a sido eliminado`
      }
    }
}

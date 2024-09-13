import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'El barto';
  }
  
  @Get('nuevo')
  newElement (): string {
    return 'Bartolomeo J. Simpson'
  }

  @Get('products')
  getLotsProducts (@Query('limit') limit: number, @Query('offset') offset: number, @Query('brand') brand: string, @Query('color') color: string) {
    return `Muchos Productos: Limit = ${limit}, Offset = ${offset}, Brand = ${brand}, Color = ${color}`
  }

  @Get('products/:id')
  getProducts (@Param('id') id: string) {
    return `Producto con id número: ${id}`
  }

  @Get('categories/:categoriesId/products/:productsId')
  getCategoriesAndProducts (@Param('categoriesId') categoriesId: string, @Param('productsId') productsId: string) {
    return `Categoría y producto correspondiente. Categoría: ${categoriesId}, Id del producto: ${productsId}`
  }
}

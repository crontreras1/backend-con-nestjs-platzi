import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':categoriesId/products/:productsId')
    getCategoriesAndProducts (@Param('categoriesId') categoriesId: string, @Param('productsId') productsId: string) {
      return `Categoría y producto correspondiente. Categoría: ${categoriesId}, Id del producto: ${productsId}`
    }
}

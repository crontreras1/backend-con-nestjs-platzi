import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
    private counterId = 1
    private products: Product[] = [
        {
            id: 1,
            name: 'Nombre del producto',
            description: 'Descripción del producto',
            price: 123
        }
    ]

    // Méthods
    findAll () {
        return this.products
    }

    findOne (id: number) {
        return this.products.find(item => item.id === id)
    }

    create (payLoad: any) {
        this.counterId += this.counterId

        const newProduct = {
            id: this.counterId,
            ...payLoad
        }

        this.products.push(newProduct)

        return newProduct
    }
}

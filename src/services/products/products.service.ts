import { Injectable, NotFoundException } from '@nestjs/common';
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
        const product =  this.products.find(item => item.id === id)

        if (!product) {
            throw new NotFoundException(`Product ${id} is not found 🙁`)
        }

        return product
    }

    create (payload: any) {
        this.counterId = this.counterId + 1

        const newProduct = {
            id: this.counterId,
            ...payload
        }

        this.products.push(newProduct)

        return newProduct
    }

    update (id: number, payload: any) {
        const product = this.findOne(id)

        if (product) {
            const index = this.products.findIndex(index => index.id === id)
            this.products[index] = {
                ...product,
                ...payload
            }

            return this.products[index]
        }

        return null 
    }

    remove (id: number) {
        const index = this.products.findIndex(index => index.id === id)

        if (index === -1) {
            throw new NotFoundException(`product number ${id} not found`)
        }

        this.products.splice(index, 1)

        return true 
    }
}

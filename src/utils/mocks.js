import { faker } from '@faker-js/faker';

export function createProductsMock() {
        const producto = {
          nombre: faker.commerce.productName(),
          precio: faker.commerce.price(),
          foto: faker.image.imageUrl(),
    };
    return producto
}


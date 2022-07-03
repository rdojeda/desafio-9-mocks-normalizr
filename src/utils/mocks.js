import { faker } from '@faker-js/faker/locale/es';

export function createProductsMock() {
        const producto = {
          nombre: faker.commerce.productName(),
          precio: faker.commerce.price(),
          foto: faker.image.imageUrl(),
    };
    return producto
}

export function createMessagesMock() {
  const mensaje = {
    id: faker.random.numeric(5),
    autor: {
      id: faker.random.numeric(5),
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      email: faker.internet.email(),
      alias: faker.internet.userName(),
      avatar: faker.image.avatar()
    },
    texto: faker.lorem.sentence(),
    timestamp: faker.date.past().getTime()
  }
  return mensaje
}


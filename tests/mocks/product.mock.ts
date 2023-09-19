const noNameBody = { price: '30 peças de ouro', orderId: 4 };
const noPriceBody = { name: 'Martelo de Thor', orderId: 4 };
const noOrderBody = { name: 'Martelo de Thor', price: '30 peças de ouro' };

const invalidNameType = {
  name: 1,
  price: "30 peças de ouro",
  orderId: 4
};
const invalidNameLength = {
  name: "M",
  price: "30 peças de ouro",
  orderId: 4
};

const invalidPriceType = {
  name: "Martelo de Thor",
  price: 30,
  orderId: 4
};
const invalidPriceLength = {
  name: "Martelo de Thor",
  price: "30",
  orderId: 4
};
const productRequest = {
  name: "Martelo de Thor",
  price: "30 peças de ouro",
  orderId: 4
}

const productResponse = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro",
}

export default {
  noNameBody,
  noPriceBody,
  noOrderBody,
  invalidNameType,
  invalidNameLength,
  invalidPriceType,
  invalidPriceLength,
  productResponse,
  productRequest,
};

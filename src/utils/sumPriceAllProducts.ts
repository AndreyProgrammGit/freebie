export const sumPriceAllProducts = (cart) => {
  let sum = 0;
  for (const value of cart) {
    sum += value.quantityPrice!;
  }
  return sum;
};

const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceObjects = prices.map((originalPrice) => ({
  price: originalPrice,
  salePrice: originalPrice / 2,
}));
console.log('Price objects', priceObjects);

const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log('Formatted prices', formattedPrices);

/*let product = 101;

function productS(price) {
  let discount;
  if (price > 100) {
    discount = 0.3;
  } else if (price > 10 && price <= 50) {
    discount = 0.15;
  } else if (price <= 10) {
    discount = 0.05;
  } else {
    discount = 0;
  }

  let discount2;
  if (price > 100) {
    discount2 = 0.3;
  } else if (price > 10 && price <= 50) {
    discount2 = 0.15;
  } else if (price <= 10) {
    discount2 = 0.05;
  } else {
    discount2 = 0;
  }

  const discountAmount = discount2 * price;
  const totalPay = price - discountAmount;

  console.log("Price: $" + price);
  console.log("Discount: " + discount2 * 100 + "%");
  console.log("Total to pay: $" + totalPay);

  return "Discount applied: " + discount + " Total: " + totalPay;
}

console.log(productS(product));*/

//Refactoring with DRY and SRP

const priceProduct = 10;
const result = totalOfproduct(priceProduct);
function getDiscount(priceProduct) {
  if (priceProduct > 100) {
    return 0.3;
  } else if (priceProduct > 10 && priceProduct <= 50) {
    return 0.15;
  } else {
    return 0.05;
  }
}

function totalOfproduct(priceProduct) {
  const getDiscountPercent = getDiscount(priceProduct);
  const getDiscountAmount = getDiscountPercent * priceProduct;
  const calculatePriceAfterDiscount = priceProduct - getDiscountAmount;

  return { getDiscountAmount, getDiscountPercent, calculatePriceAfterDiscount };
}

console.log(
  'You discount to product is:  ' +
    result.getDiscountAmount +
    ' and the total you are going to pay is $' +
    result.calculatePriceAfterDiscount
);

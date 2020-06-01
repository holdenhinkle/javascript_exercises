// function processOrder(price, quantity, discount, serviceCharge, tax) {
//   if (!quantity) {
//     quantity = 1;
//   }

//   if (!discount) {
//     discount = 0;
//   }

//   if (!serviceCharge) {
//     serviceCharge = 0.1;
//   }

//   if (!tax) {
//     tax = 0.15;
//   }

//   return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
// }

// processOrder(100);      // 126.5

// ANOTHER VERSION

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity === undefined ? 1 : quantity;
  discount = discount === undefined ? 0 : discount;
  serviceCharge = serviceCharge === undefined ? 0.1 : serviceCharge;
  tax = tax === undefined ? 0.15 : tax;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}
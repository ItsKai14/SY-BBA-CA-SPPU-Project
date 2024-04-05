// const cart = angular.module('cartApp', [])
// cart.controller('cartCtrl', function ($scope) {


//   $scope.quant = 0;
//   var id = document.getElementById('Price');
//   var price = id.getAttribute('data-custom')
//   $scope.product = [];

//   $scope.total = function () {
//     $scope.product.push({
//       quant: $scope.quant,
//       oldPrice: price,
//       newPrice: $scope.quant * $scope.price
//     });
//   };
// });


// var count = document.getElementById('option').addEventListener('change', function(){
//   var count = Number(this.value)
// });
// var cart = document.getElementById('count');
// cart.textContent = count; 
// var priceSpan = document.getElementById('price');
// var price = Number(priceSpan.dataset.custom);


// let c = count;
// let p = price;

// function totalAmount(a, b) {
//   return a * b;
// };

// const total = totalAmount(c, p);
// const totalAmt = document.querySelector('total-price');
// totalAmt.textContent = total;








// // Correctly select the element with the 'total-price' class
// const totalAmt = document.querySelector('.total-price');

// // Function to calculate the total amount
// function totalAmount(a, b) {
//   return a * b;
// }

// // Event listener for the select element to update the quantity and total price
// document.getElementById('option').addEventListener('change', function() {
//   // Get the selected quantity and convert it to a number
//   var count = Number(this.value);

//   // Update the cart text content with the selected quantity
//   var cart = document.getElementById('count');
//   cart.textContent = count;

//   // Get the price from the data-custom attribute of the price span
//   var priceSpan = document.getElementById('price');
//   var price = Number(priceSpan.dataset.custom); // Ensure this is a number

//   // Calculate the total amount
//   const total = totalAmount(count, price);

//   // Update the total amount on the page
//   totalAmt.textContent = total;
// });

// // Trigger the change event to update the total when the page loads
// document.getElementById('option').dispatchEvent(new Event('change'));

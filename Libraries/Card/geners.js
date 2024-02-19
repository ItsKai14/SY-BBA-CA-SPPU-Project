const shopCards = angular.module('shopApp', [])
shopCards.controller('shopCtrl', function($scope) {
    $scope.cards = [
      { image: './Libraries/Card/assets/Intel.jpg', name: 'Intel PCs', description: '', href: 'intelBuilds.html' },
      { image: './Libraries/Card/assets/AMD Ryzen.jpg', name: 'Ryzen PCs', description: '', href: 'ryzenBuilds.html' },
      { image: './Libraries/Card/assets/laptop.png', name: 'Laptops', description: '', href: 'laptops.html' },
      { image: './Libraries/Card/assets/macbook.png', name: 'Mac Book', description: '', href: 'macBook.html' },
    ];
  });
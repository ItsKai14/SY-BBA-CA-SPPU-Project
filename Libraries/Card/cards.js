angular.module('myApp', [])
  .controller('CardController', function($scope) {
    $scope.cards = [
      { image: './Libraries/Card/assets/computer.png', name: 'PC Builds', description: 'Explore PC builds suggested by us that suits you well!', href: 'builds.html' },
      { image: './Libraries/Card/assets/laptop.png', name: 'Laptops', description: 'Explore best laptops for school as well as office use.', href: 'laptops.html' },
      { image: './Libraries/Card/assets/keyboard.png', name: 'Accessories', description: 'Already have a system? NeverMind Explore Accessories for it', href: 'accessories.html' },
      { image: './Libraries/Card/assets/motherboard.png', name: 'PC Components', description: 'Have a plan? Costomise yourself by exploaring components of your choice!', href: 'components.html' },
    ];
  });
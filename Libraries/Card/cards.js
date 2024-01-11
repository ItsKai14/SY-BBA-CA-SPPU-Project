angular.module('myApp', [])
  .controller('CardController', function($scope) {
    $scope.cards = [
      { image: './Libraries/Card/assets/computer.png', name: 'PC Builds', description: 'Explore PC builds suggested by us that suits you well!', href: 'page1.html' },
      { image: './Libraries/Card/assets/laptop.png', name: 'Laptops', description: 'Explore best laptops for school as well as office use.', href: 'page2.html' },
      { image: './Libraries/Card/assets/keyboard.png', name: 'Accessories', description: 'Already have a system? NeverMind Explore Accessories for it', href: 'page3.html' },
    ];
  });
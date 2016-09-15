myApp.controller('BrewController', ['$scope', 'CoffeeFactory',
function ($scope, CoffeeFactory) {
  console.log('brew controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    $scope.brew = {};
    $scope.brewType = '';
    $scope.brews = [
      {type: 'aeropress', display: 'Aeropress'},
      {type: 'chemex', display: 'Chemex'},
      {type: 'cone', display: 'Cone'},
      {type: 'frenchpress', display: 'French Press'},
    ];

    var counter = 0;
    $scope.showStatus = false;

    $scope.drops = function () {
      console.log($scope.brewType);
    };

    $scope.showInfo = function (beans) {
      counter = counter += 1;
      console.log(counter);
      if (counter % 2 !== 0) {
        $scope.showStatus = true;
      } else {
        $scope.showStatus = false;
    };
  };
});

}]);

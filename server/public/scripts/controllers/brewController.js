myApp.controller('BrewController', ['$scope', 'CoffeeFactory', '$uibModal',
function ($scope, CoffeeFactory, $uibModal) {
  console.log('brew controller works');
  $scope.brewMethods = [
    {type: 'aeropress', display: 'Aeropress'},
    {type: 'chemex', display: 'Chemex'},
    {type: 'cone', display: 'Cone'},
    {type: 'frenchpress', display: 'French Press'},
  ];

  $scope.coffeeFactory = CoffeeFactory;
  $scope.brewType = CoffeeFactory.brewType;
  $scope.brews = CoffeeFactory.brews;
  $scope.brew = CoffeeFactory.brew;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    $scope.open = function (beans) {
      var modalInstance = $uibModal.open({
        templateUrl: '../views/templates/modalBrewView.html',
        controller: 'ModalController',
        resolve: {
          beans: function () {
            return beans;
          }
        }
      });
    };

    $scope.drops = function () {
      console.log($scope.brewType);

    };

});

}]);

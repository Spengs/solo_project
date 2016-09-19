myApp.controller('BeanController', ['$scope', 'CoffeeFactory', '$uibModal',
function ($scope, CoffeeFactory, $uibModal) {
  console.log('bean controller works');
  $scope.coffeeFactory = CoffeeFactory;
  $scope.coffeeFactory.getResults().then(function () {
    $scope.beans = $scope.coffeeFactory.getBeans();
    $scope.open = function (beans) {
      var modalInstance = $uibModal.open({
        templateUrl: '../views/templates/modalBeansView.html',
        controller: 'ModalController',
        resolve: {
          beans: function () {
            return beans;
          }
        }
      });
    };
  });

  $scope.click = function () {
    console.log('click works');
  };

}]);

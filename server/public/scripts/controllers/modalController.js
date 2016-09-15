myApp.controller('ModalController', ['$scope', 'CoffeeFactory', '$uibModal',
'$uibModalInstance', 'beans', function ($scope, CoffeeFactory,
  $uibModal, $uibModalInstance, beans) {
  $scope.coffeeFactory = CoffeeFactory;
  // $scope.coffeeFactory.getResults().then(function () {
  //   $scope.beans = $scope.coffeeFactory.getBeans();
  $scope.beans = beans;
  console.log($scope.beans);
  $scope.closeModal = function () {
       $uibModalInstance.dismiss();
      };

}]);

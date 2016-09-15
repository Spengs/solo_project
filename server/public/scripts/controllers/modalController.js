myApp.controller('ModalController', ['$scope', 'CoffeeFactory', '$uibModal',
'$uibModalInstance', 'beans', function ($scope, CoffeeFactory,
  $uibModal, $uibModalInstance, beans) {
  $scope.coffeeFactory = CoffeeFactory;
  $scope.beans = beans;
  console.log(beans);
  $scope.closeModal = function () {
       $uibModalInstance.dismiss();
      };

}]);

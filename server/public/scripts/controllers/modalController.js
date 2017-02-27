myApp.controller('ModalController', ['$scope', 'CoffeeFactory', '$uibModal',
'$uibModalInstance', 'beans', function ($scope, CoffeeFactory,
  $uibModal, $uibModalInstance, beans) {
  $scope.coffeeFactory = CoffeeFactory;
  $scope.brewType = CoffeeFactory.brewType;
  $scope.brews = CoffeeFactory.brews;
  $scope.brew = CoffeeFactory.brew;
  $scope.beans = beans;
  $scope.brewMethods = [
    {type: 'aeropress', display: 'Aeropress'},
    {type: 'chemex', display: 'Chemex'},
    {type: 'cone', display: 'Cone'},
    {type: 'frenchpress', display: 'French Press'},
  ];
  $scope.selectedBrewMethod = '';
  $scope.brewStatus = false;
  $scope.showBrewInfo = function () {
    console.log(this);
    console.log(this.method.type);
    $scope.selectedBrewMethod = this.method.type;
    console.log($scope.selectedBrewMethod);
    if ($scope.brewStatus === false) {
      $scope.brewStatus = true;
    } else {
      $scope.brewStatus = false;
    }
  };
  console.log(beans);
  $scope.closeModal = function () {
       $uibModalInstance.dismiss();
      };

}]);

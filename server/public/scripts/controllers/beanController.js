myApp.controller('BeanController', ['$scope', '$http', function ($scope, $http) {
  console.log('bean controller works');
  $scope.newCoffee = {};

  $scope.submitCoffee = function () {
    var data = $scope.newCoffee;
    $http.post('/beans', data)
    .then(function () {
      console.log('POST /beans', data);
    });
  };
}]);

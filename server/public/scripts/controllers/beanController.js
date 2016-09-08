myApp.controller('BeanController', ['$scope', '$http', function ($scope, $http) {
  console.log('bean controller works');
  $scope.beans = [];

getBeans();







  function getBeans() {
    $http.get('/beans')
      .then(function (response) {
          console.log('GET /beans', response.data);
          var beansDataArray = response.data;
          $scope.beans = beansDataArray;
        });
  }
}]);

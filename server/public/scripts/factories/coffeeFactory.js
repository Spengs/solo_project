myApp.factory('CoffeeFactory', ['$http', function ($http) {
  console.log('Coffee factory is go');

  var beans = [];
  


  var getBeans = function () {
    var promise = $http.get('/beans').then(function (response) {
            console.log('GET /beans', response.data);
            beans = response.data;
          });

          return promise;
  };


  return {
    getBeans: function () {
      return beans;
    },
    getResults: function () {
      return getBeans();
    },
  };
}]);

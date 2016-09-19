myApp.factory('CoffeeFactory', ['$http', function ($http) {
  console.log('Coffee factory is go');

  var beans = [];
  var brew = {};
  var brewType = '';
  var brews = [
    {type: 'aeropress', display: 'Aeropress'},
    {type: 'chemex', display: 'Chemex'},
    {type: 'cone', display: 'Cone'},
    {type: 'frenchpress', display: 'French Press'},
  ];

  var getBeans = function () {
    var promise = $http.get('/beans').then(function (response) {
            console.log('GET /beans', response.data);
            beans = response.data;
          });

    return promise;
  };

  return {
    brewType: brewType,
    brews: brews,
    brew: brew,
    getBeans: function () {
      return beans;
    },
    getResults: function () {
      return getBeans();
    },
  };
}]);

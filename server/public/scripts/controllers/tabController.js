myApp.controller('TabController', ['$scope', '$location', function ($scope, $location) {
  this.selectedTab = '';
  $scope.isActive = false;
  this.setTab = function(setTab){
      console.log('tab is set to:', setTab);
      this.selectedTab = setTab;
      $location.path(setTab);
    };
    this.isTabSelected = function(tab){
      return this.selectedTab === tab;
    };
}]);

mOverP.controller('modal', function($scope){
  $scope.showMenu=false;
  $scope.modalFunc= function(){
    $scope.showMenu = !$scope.showMenu
  }
});

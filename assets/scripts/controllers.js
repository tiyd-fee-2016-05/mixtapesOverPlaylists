mOverP.controller('modal', function($scope){
  $scope.showMenu=false;
  $scope.modalFunc= function(){
    $scope.showMenu = !$scope.showMenu
  }
});

mOverP.controller('admin',function($scope, $http, $route){
  $http({
    method: 'GET',
    url: 'http://localhost:3004/trackData',
  }).then(function(data){
    $scope.data = data.data;
    console.log($scope.data);
    // console.log(data.data);
  });

  $scope.titleInput = "my title";
  $scope.artistInput = "my artist";
  $scope.priceInput = "$$$";
$scope.addFunc= function(){
  $scope.newData = {
    title: $scope.titleInput,
    artist: $scope.artistInput,
    price: $scope.priceInput
  }

  console.log($scope.titleInput);
  //console.log(newData);

  $http.post('http://localhost:3004/trackData', $scope.newData
)
  .success(function(newData){
    console.log($scope.newData);
    $route.reload();

    // $scope.PostDataResponse = data;

  });


}
  // var data = {
  //   'title': $scope.titleInput,
  //   'artist': $scope.artistInput,
  //   'price': $scope.priceInput
  // }
  //
  // console.log($scope.titleInput);
  // console.log(data);
  //
  // $http.post('http://localhost:3004/db', data)
  // .success(function(data){
  //   $scope.PostDataResponse = data;
  //
  // });
})

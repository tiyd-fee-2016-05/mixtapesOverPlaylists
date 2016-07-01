// mOverP.controller('modal', function($scope){
//   $scope.showMenu=false;
//   $scope.modalFunc= function(){
//     $scope.showMenu = !$scope.showMenu
//   }
// });

mOverP.controller('store', function($scope, $http ){
  $scope.showMenu=false;
  $scope.modalFunc= function(){
    $scope.showMenu = !$scope.showMenu;
  };
  var loadTrack= ["metal", "solid", "grind", "follow", "iron", "yard", "cats", "sailor%20moon", "dogs", "smoke", "mirror", "magic", "cool", "virtual", "reality", "phone", "lemon", "next", "banana",
  "preacher", "shark", "romeo"  ];
  var searchRand= Math.floor((Math.random() * loadTrack.length));
  console.log(searchRand);
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/search?q=' + loadTrack[searchRand] + '&type=track&limit=9',
  }).then(function(album){
    // $scope.album= album.data;
    // for (var i = 0; i <=8; i++)
    $scope.albums = [{
      title: album.data.tracks.items[0].name,
      artist: album.data.tracks.items[0].artists[0].name

    }]

    //$scope.artist = album.data.
    console.log(album);
    console.log(album.data.tracks.items[0].artists[0].name);

  });
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

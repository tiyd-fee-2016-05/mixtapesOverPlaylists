// mOverP.controller('modal', function($scope){
//   $scope.showMenu=false;
//   $scope.modalFunc= function(){
//     $scope.showMenu = !$scope.showMenu
//   }
// });

mOverP.controller('store', function($scope, $http ){
  ////MODAL!!!!!//////////

  $scope.closeMenu=false;
  $scope.showMenu=false;
  $scope.showItems=false;

  $scope.modalFunc= function(){
    transclude: true;
    $scope.showMenu = !$scope.showMenu;
    console.log($scope.selected);
   //  $scope.showItems = !$scope.showItems;
    $scope.closeMenu=!$scope.closeMenu;
    // console.log($scope.selected.attr("id"));
  };




  doesThisWork = function(){
    console.log("Yup")
  };

  ////RANDOM word to creat 9 tracks/////
  var loadTrack= ["metal", "solid", "grind", "follow", "iron", "yard", "cats", "sailor%20moon", "dogs", "smoke", "mirror", "magic", "cool", "virtual", "reality", "phone", "lemon", "next", "banana",
  "preacher", "shark", "romeo", "soccer", "freedom", "random", "cartoon", "internet", "china", "water", "television", "sauce", "couch", "torch", "rainbow", "anchovy", "orange", "apple","past", "present",  ];
  var searchRand= Math.floor((Math.random() * loadTrack.length));
  console.log(searchRand);
  $http({
    method: 'GET',
    url: 'https://api.spotify.com/v1/search?q=' + loadTrack[searchRand] + '&type=track&limit=9',
  }).then($scope.tunesFunc = function(album){
    // $scope.album= album.data;
    //for (var i = 0; i <=8; i++){
    $scope.albums = [{
      title: album.data.tracks.items[0].name,
      artist: album.data.tracks.items[0].artists[0].name,
      img: album.data.tracks.items[0].album.images[1].url,
      album: album.data.tracks.items[0].album.name,
      price: 1.29,
      qty:1
      // id: 0
    },
    {
      title: album.data.tracks.items[1].name,
      artist: album.data.tracks.items[1].artists[0].name,
      img: album.data.tracks.items[1].album.images[1].url,
      album: album.data.tracks.items[1].album.name,
      price: 1.29,
      qty:1

      // id: 1
    },
    {
      title: album.data.tracks.items[2].name,
      artist: album.data.tracks.items[2].artists[0].name,
      img: album.data.tracks.items[2].album.images[1].url,
      album: album.data.tracks.items[2].album.name,
      price: 1.29,
      qty:1

      // id: 2

    },
    {
      title: album.data.tracks.items[3].name,
      artist: album.data.tracks.items[3].artists[0].name,
      img: album.data.tracks.items[3].album.images[1].url,
      album: album.data.tracks.items[3].album.name,
      price: 1.29,
      qty:1

      // id: 3

    },
    {
      title: album.data.tracks.items[4].name,
      artist: album.data.tracks.items[4].artists[0].name,
      img: album.data.tracks.items[4].album.images[1].url,
      album: album.data.tracks.items[4].album.name,
      price: 1.29,
      qty:1

      // id: 4
    },
    {
      title: album.data.tracks.items[5].name,
      artist: album.data.tracks.items[5].artists[0].name,
      img: album.data.tracks.items[5].album.images[1].url,
      album: album.data.tracks.items[5].album.name,
      price: 1.29,
      qty:1

      // id: 5

    },
    {
      title: album.data.tracks.items[6].name,
      artist: album.data.tracks.items[6].artists[0].name,
      img: album.data.tracks.items[6].album.images[1].url,
      album: album.data.tracks.items[6].album.name,
      price: 1.29,
      qty:1

      // id: 6
    },
    {
      title: album.data.tracks.items[7].name,
      artist: album.data.tracks.items[7].artists[0].name,
      img: album.data.tracks.items[7].album.images[1].url,
      album: album.data.tracks.items[7].album.name,
      price: 1.29,
      qty:1

      // id: 7

    },
    {
      title: album.data.tracks.items[8].name,
      artist: album.data.tracks.items[8].artists[0].name,
      img: album.data.tracks.items[8].album.images[1].url,
      album: album.data.tracks.items[8].album.name,
      price: 1.29,
      qty:1

      // id: 8

    }];
    ////////Cart Post!!!!/////
    // $scope.selected = $scope.albums[0];
    // console.log($scope.selected);

     $scope.setActive = function(album){
       $scope.selected = album;
       console.log($scope.selected);
       $scope.albumMod = $scope.selected;

     };
    //  mOverP.directive("modal",function(){
    //   //  $scope.closeMenu=true;
    //   //  $scope.showMenu=false;
    //   //  $scope.showItems=false;
     //
    //    $scope.modalFunc= function(){
    //      $scope.showMenu = !$scope.showMenu;
    //      console.log($scope.selected);
    //      $scope.showItems = !$scope.showItems;
    //      $scope.closeMenu=!$scope.closeMenu;
    //      // console.log($scope.selected.attr("id"));
    //    };
     //
    //  })



    //  $scope.modalClose= function(){
    //    $scope.showMenu = !$scope.showMenu;
    //    console.log($scope.selected);
    //    $scope.showItems = !$scope.showItems;
    //    $scope.closeMenu=!$scope.closeMenu;
    //    // console.log($scope.selected.attr("id"));
    //  };
    //  $scope.isClicked= function(album){
    //    $scope.selected = album;
     //
    //  }
      $scope.cartFunc= function(){
        $scope.addTrack = $scope.selected;
        $http.post('http://localhost:3004/cart', $scope.addTrack)
        .success(function(addTack){
    });
  };

    console.log($scope.albums);
    //console.log(i);
    console.log(album.data);
  //};
  });



})
// .directive('modal', function($compile){
// return {
//    restrict : 'A',
//    link : function(scope, elem){
//
//        var content = $(".modal").html();
//        var compileContent = $compile(content)(scope);
//        var title = $(".modal").html();
//        var options = {
//            content: compileContent,
//            html: true,
//            title: title
//        };
//
//        $(elem).modal(options);
//    }
// }
// });

mOverP.controller('admin',function($scope, $http, $route){
  $http({
    method: 'GET',
    url: 'http://localhost:3004/trackData',
  }).then(function(data){
    $scope.data = data.data;
    console.log($scope.data);
    // console.log(data.data);
  });
  //
  // $scope.titleInput = "my title";
  // $scope.artistInput = "my artist";
  // $scope.priceInput = "$$$";
$scope.addFunc= function(){
  $scope.newData = {
    title: $scope.titleInput,
    artist: $scope.artistInput,
    price: $scope.priceInput
  };

  console.log($scope.titleInput);
  //console.log(newData);

  $http.post('http://localhost:3004/trackData', $scope.newData)
  .success(function(newData){
    console.log($scope.newData);
    $route.reload();

    // $scope.PostDataResponse = data;

  });


};


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
mOverP.controller('cart', function($scope, $http){
  $http({
    method: 'GET',
    url: 'http://localhost:3004/cart',
  }).then(function(cartItems){
    $scope.items = cartItems.data;
    console.log($scope.items);
    //console.log(data.data);
  });
  $scope.total = function(){
    var total=0;
    angular.forEach($scope.items,function(item){
      total+= item.price * item.qty;
    })
    return total;
    console.log(total);
  }
  $scope.recieptFunc = function(tapeName){
    $scope.name= tapeName;
  }
  $scope.empty = function(cart){
    for(var i = 1; i <= $scope.items.length; i++){
    $http.delete('http://localhost:3004/cart/' + i)
    .success(function(){
      console.log("goodbye");
    })
  };
  }


  console.log("Hello")
});

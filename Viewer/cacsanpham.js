viewer.controller('listSPCtrl', function($scope,$http,$routeParams){
    $http({
        method:"GET",
        url:"http://localhost:3000/sanpham"
    })
    .then(function(reponsive){
        $scope.danhSachSP = reponsive.data;
        console.log($scope.danhSachSP)
    })
    
   
})
viewer.controller("locSPCtrl",function($scope,$http,$routeParams){

    $http({
        method:"GET",
        url:"http://localhost:3000/sanpham?tendanhmuc="+$routeParams.danhmuc
    })
    .then(function(reponsive){
        $scope.danhSachSP = reponsive.data;
    
    })

})
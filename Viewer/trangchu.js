viewer.controller("trangChuCtrl",function($scope,$http,$routeParams){

    $http({
        method:"GET",
        url:"http://localhost:3000/sanpham"
    })
    .then(function(reponsive){
        $scope.danhSachSP = reponsive.data;
        $scope.danhSachSPnew=$scope.danhSachSP.slice(-4);
        $scope.danhSachSPhot=$scope.danhSachSP.slice(0, 4);
    })

   
})
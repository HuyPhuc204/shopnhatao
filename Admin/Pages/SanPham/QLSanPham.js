app.controller('listSPCtrl', function($scope,$http,$routeParams){
    $http({
        method:"GET",
        url:"http://localhost:3000/sanpham"
    })
    .then(function(reponsive){
        $scope.danhSachSP = reponsive.data;
        console.log($scope.danhSachSP)
    })
    
    $scope.onClickDel = function(id) {
        var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm?");
        if(confirmation){
            $http({
                method: "DELETE",
                url: "http://localhost:3000/sanpham/" + id
            })
            .then(function(response) {
                alert("Xóa thành công");
                window.location.href = "#!sanpham/danhsach";
            });
        }
       
    }
})
viewer.controller("listgiohangCtrl", function ($scope, $http, $routeParams) {
    $http({
        method: "GET",
        url: "http://localhost:3000/giohang"
    })
        .then(function (reponsive) {
            $scope.dsgiohang = reponsive.data
        })



    $scope.themsoluong = function (id) {
        $http({
            method: "GET",
            url: "http://localhost:3000/giohang/" + id
        })
            .then(function (response) {
                $scope.giohang = response.data;
                $scope.giohang.soluong++; // Tăng số lượng lên 1 đơn vị
                $scope.giohang.giasanpham = $scope.giohang.giasanpham / ($scope.giohang.soluong -1) * $scope.giohang.soluong;
               
                var updatedGioHang = {
                    id: $scope.giohang.id,
                    idsanpham: $scope.giohang.idsanpham,
                    tensanpham: $scope.giohang.tensanpham,
                    anhsanpham: $scope.giohang.anhsanpham,
                    giasanpham: $scope.giohang.giasanpham,
                    mausac: $scope.giohang.mausac,
                    soluong: $scope.giohang.soluong,
                    iduser: $scope.giohang.iduser,

                };

                $http({
                    method: "PUT",
                    url: "http://localhost:3000/giohang/" + id,
                    data: updatedGioHang
                });
            });
    }

    $scope.giamsoluong = function(id) {
        $http({
            method: "GET",
            url: "http://localhost:3000/giohang/" + id
        })
        .then(function(response) {
            $scope.giohang = response.data;
            if ($scope.giohang.soluong > 1) {
                $scope.giohang.soluong--; // Giảm số lượng đi 1 đơn vị nếu số lượng lớn hơn 1
    
                // Cập nhật giá sản phẩm sau khi số lượng đã được giảm
                $scope.giohang.giasanpham = $scope.giohang.giasanpham / ($scope.giohang.soluong +1) * $scope.giohang.soluong;
    
                var updatedGioHang = {
                    id: $scope.giohang.id,
                    idsanpham: $scope.giohang.idsanpham,
                    tensanpham: $scope.giohang.tensanpham,
                    anhsanpham: $scope.giohang.anhsanpham,
                    giasanpham: $scope.giohang.giasanpham,
                    mausac: $scope.giohang.mausac,
                    soluong: $scope.giohang.soluong,
                    iduser: $scope.giohang.iduser,
                };
    
                $http({
                    method: "PUT",
                    url: "http://localhost:3000/giohang/" + id,
                    data: updatedGioHang
                });
            } else {
                // Nếu số lượng là 1, không thể giảm nữa
                console.log("Số lượng không thể giảm thêm.");
            }
        });
    }

    $scope.onclickXoa = function (id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/giohang/"+id
        })
        .then(function (reponsive) {
               alert("xóa thành công");
            })
    }

    
})
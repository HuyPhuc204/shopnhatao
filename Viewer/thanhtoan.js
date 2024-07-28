viewer.controller("thanhToanCtrl", function ($scope, $http, $routeParams) {
    $scope.tongtien = 0;
    $scope.tenuser = localStorage.getItem('name');
    $scope.taikhoan = {
        id: "",
        tenTaiKhoan: "",
        email: "",
        soDienThoai: "0987654321",
        diaChi: "Hà Nội",
        matKhau: "123"
    }
    $http({
        method: "GET",
        url: "http://localhost:3000/giohang"
    })
        .then(function (reponsive) {
            $scope.dsgiohang = reponsive.data

            $scope.dsgiohang.forEach(function (sanpham) {
                $scope.tongtien += sanpham.giasanpham;
                console.log(sanpham.giasanpham);
                // $scope.tenuser = sanpham.tenTaiKhoan
            });
            console.log($scope.tenuser);
        })

    $http({
        method: "GET",
        url: "http://localhost:3000/tai-khoan?tenTaiKhoan=" + $scope.tenuser
    }).then(function (reponsive) {
        $scope.taikhoan = reponsive.data
        console.log($scope.taikhoan);
    })


    $scope.onclickXoa = function (id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/giohang/" + id
        })
            .then(function (reponsive) {
                alert("xóa thành công");
            })
    }


})  
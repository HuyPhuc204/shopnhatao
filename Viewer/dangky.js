viewer.controller("addDangKy", function ($scope, $http) {
    $scope.taikhoan = {

        tenTaiKhoan: "",
        email: "",
        soDienThoai: "",
        diaChi: "",
        matKhau: ""
    }
    $scope.dangKy = function () {
        $scope.formInvalid = false;
        $scope.formInvalidMessage = '';

        // if ($scope.taikhoan.id == "") {
        //     $scope.formInvalid = true;
        //     $scope.formInvalidMessage = "Vui lòng nhập ID"
        //     return;
        // }
        if ($scope.taikhoan.tenTaiKhoan == "") {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = "Vui lòng nhập Tên Tài Khoản"
            return;
        }
        if ($scope.taikhoan.email == "") {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = "Vui lòng nhập email"
            return;
        }
        if ($scope.taikhoan.soDienThoai == "") {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = "Vui lòng nhập Số Điện Thoại"
            return;
        }
        if ($scope.taikhoan.diaChi == "") {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = "Vui lòng nhập Địa Chỉ"
            return;
        }
        if ($scope.taikhoan.matKhau == "") {
            $scope.formInvalid = true;
            $scope.formInvalidMessage = "Vui lòng nhập mật khẩu"
            return;
        }
        $http({
            method: "POST",
            url: "http://localhost:3000/tai-khoan",
            data: $scope.taikhoan
        })
            .then(function (reponsive) {
                alert("Thêm tài khoản thành công");
                window.location.href = "#!/"
            })

    }
})
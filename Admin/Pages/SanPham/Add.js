app.controller("AddCtrl", function ($scope, $http, $routeParams) {

    $scope.sanpham = {
        id: "",
        ten: "",
        anh: "",
        gia: "",
        mota: "",
        iddanhmuc: "",
        tendanhmuc: "",
        mausac: [
            {
                ten: "",
                mamau: ""
            }
        ]
    }

    $http({
        method: "GET",
        url: "http://localhost:3000/danhmuc"
    })
        .then(function (reponsive) {
            $scope.dsDanhMuc = reponsive.data
        })

    $scope.validateForm = {
        trangThai: true,
        noiDung: []
    }

    $scope.onClickSMT = function () {
        var selectElement = document.getElementById('tenDanhMuc');
        var selectedOption = selectElement.options[selectElement.selectedIndex];
        var selectedValue = selectedOption.innerHTML;

        var selectedColors = [];
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach(function (checkbox) {
            var values = checkbox.value;
            var placeholders = checkbox.getAttribute('placeholder');
            selectedColors.push({ten:placeholders, mamau:values});
        });
        console.log(selectedColors);

        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = []
        giatien = Number($scope.sanpham.gia);

        if ($scope.sanpham.id == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[0] = "Vui lòng nhập ID sản phẩm";
            
        }
        if ($scope.sanpham.ten == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[1] = "Vui lòng nhập tên sản phẩm";
        }
        if ($scope.sanpham.anh == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[2] = "Vui lòng nhập link ảnh sản phẩm";
        }
        if ($scope.sanpham.gia == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[3] = "Vui lòng nhập giá sản phẩm";
        }
        if (isNaN(giatien)) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[3] = "Giá phải là số";
        }
        if (giatien < 0) {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[3] = "Giá phải là số dương";
        }
        if ($scope.sanpham.mota == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[4] = "Vui lòng nhập mô tả sản phẩm";
        }
        if ($scope.sanpham.iddanhmuc == "") {
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[5] = "Vui lòng chọn danh mục";
        }
        if(selectedColors.length===0){
            $scope.validateForm.trangThai = false;
            $scope.validateForm.noiDung[6] = "Vui lòng chọn màu";
        }

       if($scope.validateForm.trangThai===true) {

            $http({
                method: "POST",
                url: "http://localhost:3000/sanpham",

                data: {
                    id: $scope.sanpham.id,
                    ten: $scope.sanpham.ten,
                    anh: $scope.sanpham.anh,
                    gia: $scope.sanpham.gia,
                    mota: $scope.sanpham.mota,
                    iddanhmuc: selectElement.value,
                    tendanhmuc: selectedValue,
                    mausac: selectedColors
                }
            })
             .then(function (reponsive) {
                    alert("Thêm thành công");
                    window.location.href = "#!sanpham/danhsach"
                })
        }

    }



})
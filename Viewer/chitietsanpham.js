viewer.controller("chitietSPCtrl", function ($scope, $http, $routeParams) {

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
        url: "http://localhost:3000/sanpham/" + $routeParams.id
    })
        .then(function (reponsive) {
            $scope.sanpham = reponsive.data
        })

    // function loadGioHang() {
       
    // }

    // loadGioHang();

    $scope.themVaoGioHang = function (sanPham) {
        $scope.giohang=[]
        $http.get('http://localhost:3000/giohang')
        .then(function (response) {
            $scope.giohang = response.data;
        });
        var selectedColors = [];
        $scope.name = localStorage.getItem('name')
        // Lấy thông tin màu sắc đã chọn
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        checkboxes.forEach(function (checkbox) {
            var values = checkbox.value;
            var placeholders = checkbox.getAttribute('placeholder');
            selectedColors.push({ ten: placeholders, mamau: values });
        });

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        var index = $scope.giohang.findIndex(function (item) {
            return item.idsanpham === sanPham.id && item.mausac === selectedColors;
        });
        console.log(index);

        if (index != -1) {
              // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
              $http({
                method: "GET",
                url: 'http://localhost:3000/giohang?idsanpham=' + sanPham.id,

            })
                .then(function (response) {
                    $scope.giohang = response.data;
                   
                    // Cập nhật giá sản phẩm sau khi số lượng đã được giảm
                    $scope.giohang.soluong++;
                    $scope.giohang.giasanpham = $scope.giohang.giasanpham / ($scope.giohang.soluong - 1) * $scope.giohang.soluong;

                    var updatedGioHang = {
                        id: $scope.giohang.id,
                        idsanpham: $scope.giohang.idsanpham,
                        tensanpham: $scope.giohang.tensanpham,
                        anhsanpham: $scope.giohang.anhsanpham,
                        giasanpham: $scope.giohang.giasanpham,
                        mausac: $scope.giohang.mausac,
                        soluong: $scope.giohang.soluong,
                        tenTaiKhoan: $scope.giohang.tenTaiKhoan,
                    };

                    $http({
                        method: "POST",
                        url: "http://localhost:3000/giohang",
                        data: updatedGioHang
                    })
                    .then(function(reponsive){
                        $http({
                            method: "PUT",
                            url: "http://localhost:3000/giohang?id="+$scope.giohang.id,
                            data: updatedGioHang
                        })
                    })

                })


        } else {
          
            // Nếu sản phẩm không tồn tại trong giỏ hàng, thêm mới vào
            $http.post('http://localhost:3000/giohang', {
                idsanpham: Number(sanPham.id),
                tensanpham: sanPham.ten,
                anhsanpham: sanPham.anh,
                giasanpham: sanPham.gia,
                mausac: selectedColors,
                soluong: 1,
                tenTaiKhoan: $scope.name // Biến này cần được khai báo trước khi sử dụng
            }).then(function (response) {
                // Sau khi thêm thành công, cập nhật giỏ hàng
                $scope.giohang.push(response.data);
            }).catch(function (error) {
                console.error('Lỗi khi thêm vào giỏ hàng:', error);
            });
        }
    };
})
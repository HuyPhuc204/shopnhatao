app.controller('detailSPCtrl', function($scope,$http,$routeParams){
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
        method:"GET",
        url:"http://localhost:3000/sanpham/"+$routeParams.id
      })
      .then(function(reponsive){
            $scope.sanpham=reponsive.data
      })


})
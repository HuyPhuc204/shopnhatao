app.controller("listDMCtrl",function($scope,$http,$routeParams){

    $http({
        method:"GET",
        url:"http://localhost:3000/danhmuc"
    })
    .then(function(reponsive){
        $scope.dsDanhMuc = reponsive.data
    })

    $scope.onClickDel=function(id){
        confirmDEL = confirm("bạn có chắc chắn muốn xóa?");
        if(confirmDEL){
            $http({
                method:"DELETE",
                url:"http://localhost:3000/danhmuc/"+id
            })
            .then(function(reponsive){
                alert("xóa thành công");
                window.location.href="#!danhmuc/danhsach";
            })
        }
       
    }


})
app.controller("EditDMCtrl",function($scope,$http,$routeParams){

    $scope.danhmuc ={
        id:"",
        ten:"",
        link:""
    }

    $scope.validateForm={
        trangThai:true,
        noiDung:[]
    }

    $http({
        method:"GET",
        url:"http://localhost:3000/danhmuc/"+$routeParams.id
    })
    .then(function(reponsive){
        $scope.danhmuc = reponsive.data
    })

    $scope.onClickAdd= function(){

        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = [];

        // if($scope.danhmuc.id==""){
        //     $scope.validateForm.trangThai=false;
        //     $scope.validateForm.noiDung[0]="Vui lòng nhập ID"
        // }
        if($scope.danhmuc.ten==""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung[1]="Vui lòng nhập Tên"
        }
        if($scope.danhmuc.link==""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung[2]="Vui lòng nhập link"
        }
        if($scope.validateForm.trangThai==true){
            $http({
                method:"PUT",
                url:"http://localhost:3000/danhmuc/"+$routeParams.id,
                data: $scope.danhmuc 
            })
            .then(function(reponsive){
                alert("Sửa danh mục thành công");
                window.location.href="#!danhmuc/danhsach"
            })
        }
    }
})
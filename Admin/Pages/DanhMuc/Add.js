app.controller("AddDMCtrl",function($scope,$http,$routeParams){

    $scope.danhmuc ={
        id:"",
        ten:"",
        link:""
    }

    $scope.validateForm={
        trangThai:true,
        noiDung:[]
    }

    $scope.onClickAdd= function(){

        $scope.validateForm.trangThai = true;
        $scope.validateForm.noiDung = [];

        if($scope.danhmuc.id==""){
            $scope.validateForm.trangThai=false;
            $scope.validateForm.noiDung[0]="Vui lòng nhập ID"
        }
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
                method:"POST",
                url:"http://localhost:3000/danhmuc",
                data: $scope.danhmuc 
            })
            .then(function(reponsive){
                alert("Thêm danh mục thành công");
                window.location.href="#!danhmuc/danhsach"
            })
        }
    }

    
})
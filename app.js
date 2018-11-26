(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter){
        $scope.name = "Amany";
        $scope.imgNum = "1";
        
        $scope.sayMessage = function (){
            return "Amany will get the job inshaAllah";
        };
        
        $scope.changeImg = function (){
            if($scope.imgNum == "1"){
                $scope.imgNum = "2";
            }else{
                $scope.imgNum = "1";
            } 
        }
    }
})();
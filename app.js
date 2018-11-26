(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter){
        $scope.name = "Amany";
        $scope.imgNum = "1";
        $scope.imgCost = 0.45;
        
        $scope.sayMessage = function (){
            var msg = "Amany will get the job inshaAllah";
            
            // using $filter service function to uppercase the msg 
            var output = $filter('uppercase')(msg);
            return output;
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
(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController);
    
    // Step2, register the filter factory with the module .. similar way to controllers
    // the name of the filter must be a valid angular expression identifier (same as naming JavaScript variable)
    .filter('custom', CustomFilterFactory);
    
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
        
        // ====================================
        // creating custom filters
        // Step1, Define filter factory function (fff)
        // fff which creates filtering function
        function CustomFilterFactory(){
            // fff produces filtering function
            return function (input){
                //change input
                return changedInput;
            }
        }        
    }
})();
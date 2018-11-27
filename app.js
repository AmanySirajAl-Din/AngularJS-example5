(function(){
    'use strict';

    angular.module('MsgApp', [])

    .controller('MsgController', MsgController)
    
    // **Step2, register the filter factory with the module .. similar way to controllers
    // the name of the filter must be a valid angular expression identifier (same as naming JavaScript variable)
    //.filter(filterName, FilterFactoryFn);
    .filter('past', pastFilter);
    
    // **Step3, Inject it with filterNameFilter
    MsgController.$inject = ['$scope', '$filter', 'pastFilter'];
    function MsgController($scope, $filter, pastFilter){
        $scope.name = "Amany";
        $scope.imgNum = "1";
        $scope.imgCost = 0.45;
        
        $scope.sayMessage = function (){
            var msg = "Amany will get the job inshaAllah";
            
            // using $filter service function to uppercase the msg 
            var output = $filter('uppercase')(msg);
            return output;
        };
        
        // **Step3 >>
        $scope.makePastMsg = function (){
            var msg = "Amany will get the job inshaAllah";
        
            var output = pastFilter(msg);
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
    
    // ====================================
    // Creating custom filters **
    // **Step1, Define filter factory function (fff)
    // fff which creates filtering function   
    
    // Creating custom filters with additional custom arguments ++
    // ++Step1, Define filter factory function (fff)
    function pastFilter(){
            // fff produces filtering function
            return function (input){
                //change input
                input = input || ""; // if input is un defined make input = ""
                var changedInput = input.replace("will", "did")
                changedInput = changedInput.replace("inshaAllah", "")
                return changedInput;
            };
        }  
})();
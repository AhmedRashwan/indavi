/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*var uploadModule = angular.module('uploadModule', ['ngRoute']);
 uploadModule.config(function ($routeProvider) {
 $routeProvider
 .when('/',
 {
 controller: 'dataSetController',
 templateUrl: 'view1.html'
 })
 .when('/view2',
 {
 controller: 'compineGraphsWithData',
 templateUrl: 'view2.html'
 })
 .otherwise({redirectTo: '/'})
 });
 */

    var divCounter=0;
   function increment() {
       if (divCounter < 4) {
           divCounter++;
           var divName = "graphDiv" + divCounter;
           //Remove that Alert From Here it's just for check
           //--------------------------------
           alert(divName);
           //---------------------------------------
       return divName;
       }
       else
       {alert("Please Remove graph");}
    }

var mainModule = angular.module("mainModule", ['uploadModule', 'graphModule']);

mainModule.controller('uploadControl', uploadControl);
function uploadControl($scope, $controller, sharedDataObject) {
    var dataSetControllerViewModel = $scope.$new();
    $controller('dataSetController', {$scope: dataSetControllerViewModel});
    $scope.upload = function (files) {
        dataSetControllerViewModel.getDataSetFile(files);
    };
}//upload data file and convert it into Json and store it in shared data services 

mainModule.controller('compineGraphsWithData', compineGraphsWithData);
function compineGraphsWithData($scope, $controller, sharedDataObject) {
    var createGraphViewModel = $scope.$new();
    $controller('createGraphController', {$scope: createGraphViewModel});
    $scope.scatter = function () {
        createGraphViewModel.scatterPlot(sharedDataObject.getDataObject());
    };
}//compineGraphsWithData and fire graph function


mainModule.controller('extractDims' ,extractDims);
function extractDims($scope,$controller,sharedDataObject) {
    var createGraphViewModel = $scope.$new();
    $controller('createGraphController', {$scope: createGraphViewModel});
    $scope.dimension;
    $scope.getdimensions = function () {
        $scope.dimension = keys_of_objects(sharedDataObject.getDataObject());
        
    };
    $scope.getcheckedbox = function(){
        var i=0;
        var checkedboxes = [];
        console.log(document.getElementById($scope.dimension[0]).checked);
        for(i=0;i<$scope.dimension.length;i++){
            //console.log($scope.dimension[i]);
        if(document.getElementById($scope.dimension[i]).checked)
            {checkedboxes.push($scope.dimension[i]);}
        }
         createGraphViewModel.scatterPlot(sharedDataObject.getDataObject(),checkedboxes[0],checkedboxes[1]);
        
    }
}//compineGraphsWithData and fire graph function

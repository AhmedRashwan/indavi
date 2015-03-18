/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var dataModule = angular.module("DataManipulationModule",[]);

dataModule.service('getDimService', function () {
 
        this.getDimObject= function () {
            return this.dimObject;
        };
        this.setDimObject= function (value) {
            this.dimObject = value;
        };
   
});//this service to share Data Object between controlles(graphs)

dataModule.controller("getDimControl",getDimControl);
function getDimControl($scope,getDimService){
    $scope.extractDim = function (data){
        console.log(keys_of_objects(data));
        getDimService.setDimObject(keys_of_objects(data));
    };
}

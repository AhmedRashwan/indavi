/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var uploadModule = angular.module('uploadModule',[]);
uploadModule.service('sharedDataObject', function () {
 
        this.getDataObject= function () {
            return this.dataObject;
        };
        this.setDataObject= function (value) {
            this.dataObject = value;
        };
   
});//this service to share Data Object between controlles(graphs)


uploadModule.controller('dataSetController', dataSetController);//load data set and but it on sharedDataObject service
function dataSetController($scope, sharedDataObject) {
    $scope.datasetfile;
    var file;
    $scope.getDataSetFile = function (files) {
        file = files[0];
        $scope.datasetfile = file.name;

        var reader = new FileReader();
        reader.onload = function (evt) {
            var result = evt.target.result;
            var Json;
            switch (file.name.split('.').pop()) {
                case 'csv':
                    Json = CSV2JSON(result);
                    dataset = JSON.parse(Json);
                    sharedDataObject.setDataObject(dataset);
                    console.log(dataset);
                    break;
                case 'json':
                    Json = result;
                    dataset = JSON.parse(Json);
                    sharedDataObject.setDataObject(dataset);
                    console.log(dataset);
                    break;
                case 'tsv':
                    Json = tsvJSON(result);
                    dataset = JSON.parse(Json);
                    sharedDataObject.setDataObject(dataset);
                    console.log(dataset);
                    break;
                default :
                    alert("this extension not supported");
            }
        };
        reader.readAsText(file);
        $scope.$apply();
    };
}
;

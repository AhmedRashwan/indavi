/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var graphModule = angular.module("graphModule",[]);
//angular.injector(['graphModule', 'uploadModule']);
graphModule.controller('createGraphController', createGraphController);
function createGraphController($scope) {
    $scope.scatterPlot = function (data,dim1,dim2) {
        var scatter = new plots({data:data,dim1:dim1,dim2:dim2,geometry:"circle",scale:"linear",coordinate:"cartesian"});
        scatter.render(400,400,"#div1");
    };
}
;//compineGraphsWithData and fire graph function
//angular.bootstrap(document.getElementById("App2"),['graphModule']);

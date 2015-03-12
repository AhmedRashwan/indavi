
var test = [1,2,3,4];
var MM = {
    abs : function (n) {
    return Math.abs(n);
    },
    ceil : function (n) {
    return Math.ceil(n);
    },
    floor : function (n) {
    return Math.floor(n);
    },
    log : function (n) {
    return Math.log(n);
    },
    tan : function (n) {
    return Math.tan(n);
    },
    cos : function (n) {
    return Math.cos(n);
    },
    acos : function (n) {
    return Math.floor(n);
    },
    exp : function (n) {
    return Math.exp(n);
    },
    sin : function (n) {
    return Math.sin(n);
    },
    asin : function (n) {
    return Math.asin(n);
    },
    atan : function (n) {
    return Math.atan(n);
    },
    pow : function (numberX , numberY) {
    return Math.pow(numberX, numberY);
    },
    atanh : function (n) {
    return Math.atan2(n);
    },
    max : function (n) {
    return Math.max(n);
    },
    min : function (n) {
    return Math.min(n);
    },
    sqrt : function (n) {
    return Math.sqrt(n);
    }
    };

var mathimatical = {
    abs: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.abs(arr[i]);
    }
    return arrBox;
    },
    ceil: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.ceil(arr[i]);
    }
    return arrBox;
    },
    floor: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.floor(arr[i]);
    }
    return arrBox;
    },
    log: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.log(arr[i]);
    }
    return arrBox;
    },
    tan: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.tan(arr[i]);
    }
    return arrBox;
    },
    cos: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.cos(arr[i]);
    }
    return arrBox;
    },
    acos: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.acos(arr[i]);
    }
    return arrBox;
    },
    exp: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.exp(arr[i]);
    }
    return arrBox;
    },
    sin: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.sin(arr[i]);
    }
    return arrBox;
    },
    asin: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.asin(arr[i]);
    }
    return arrBox;
    },
    atan: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.atan(arr[i]);
    }
    return arrBox;
    },
    atanh: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.atanh(arr[i]);
    }
    return arrBox;
    },
    pow: function (arr, power) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.pow(arr[i], power);
    }
    return arrBox;
    },
    sqrt: function (arr) {
    var arrBox = [];
    for (var i = 0; i < arr.length; i++) {
    arrBox[i] = MM.sqrt(arr[i]);
    }
    return arrBox;
    },
    sum: function (arr) {
    var arrBox = 0;
    for (var i = 0; i < arr.length; i++) {
    arrBox += arr[i];
    }
    return arrBox;
    }
    };

var statistical = {
    mean: function (arr) {
    var count = arr.length;
    return MM2.sum(arr) / count;
    },
    mod: function (arr) {
    var counts = {};
    for (var i = 0, n = arr.length; i < n; i++) {
    if (counts[arr[i]] === undefined) {
    counts[arr[i]] = 0;
    } else {
    counts[arr[i]]++;
    }
    }
    },
    median: function(arr) {
    arr.sort(function (a, b) {return a - b;});
    var half = Math.floor(arr.length / 2);
    if (arr.length % 2)
    return arr[half];
    else
    return (arr[half - 1] + arr[half]) / 2.0;
    },
    sort : function(arr) {
    arr.sort(function (a, b) {return a - b;});
    return arr;
    },

    residual : function(x,y) {
    for (var i = 0; i < y.length; i++) {
    var number = y[i];
    number = number.toString();
    if(number.indexOf(".")===-1){
    x[i]=0;
    }
    else {
    var splitednumber = number.split(".");
    x[i] = parseInt(splitednumber[1]);
    }
    }
    return x;
    },
    lag : function(arr){
    var temp=[];
    temp[0]=0;
    for(var i= 1;i<arr.length+1;i++){
    temp[i]=arr[i-1];
    }
    return temp;
    }

    };

console.log(); //True


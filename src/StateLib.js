/**
* Made by : Mohamed Sweelam.
*	20/3/2015
**/

var Statistics = {
	/**
	 * @method: mean
	 * @description: Calculate mean for array of no.
	 * @parameters: array of no (one column)
	 * @return: { mean }
	 * */
    mean: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
		}
	var i = arr.length;
		var sum=0;
		while(i--){
		    sum+=arr[i];
		}
	var mean = sum/arr.length;
		return mean;
    },
    
	/**
	 * @method: median
	 * @parameters: array of no (one column)
	 * @return: { result direct}
	 * */
    median: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
			}
	arr.sort(function(a,b){
		return a- b;
	});
			var half = Math.floor(arr.length/2);
			if(arr.length%2)
				return arr[half];
			else
				return(arr[half-1]+ arr[half])/ 2;
	},

	/**
	 * @method: mode
	 * @parameters: array of no (one column)
	 * @return: { modes object}
	 * */
    mode: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
        var modes = [];
        var count=[];
        var i;
        var number;
        var maxIndex=0;
        for(i=0;i<arr.length;i+=1){
            number=arr[i];
            count[number] =(count[number]||0)+ 1;
            if(count[number]>maxIndex){
                maxIndex=count[number];
            }}
    for(i in count)
        if(count.hasOwnProperty(i)){
            if(count[i]===maxIndex){
                modes.push(Number(i));
            }}
        return modes;
    },

	/**
	 * @method: variance
	 * @parameters: array of no (one column)
	 * @return: {result direct}
	 * */
    variance: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
        var sumOfSquares = Statistics.sumOfSquares(arr);
        return sumOfSquares/arr.length;
    },

	/**
	 * @method: standardDeviation
	 * @parameters: array of no (one column)
	 * @return: {result direct}
	 * */
    standardDeviation: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
            return Math.sqrt(Statistics.variance(arr));
    },

		
	/**
	* @method: linear regression
	* @parameters: x and y
	* @return: linear object
	* @description: 
	var yval = dataset.map(function (d) { return parseFloat(d.xHeight); });
	var xval = dataset.map(function (d) { return parseFloat(d.Ascendenti); });
	var lr = linearRegression(yval,xval);
	// now you have:
	// lr.slope
	// lr.intercept
	// lr.r2
	console.log(lr);
	To plot it simple try this without GoG:
	var max = d3.max(dataset, function (d) { return d.OvershootingSuperiore; });
	var myLine = svg.append("svg:line")
            .attr("x1", x(0))
            .attr("y1", y(lr.intercept))
            .attr("x2", x(max))
            .attr("y2", y( (max * lr.slope) + lr.intercept ))
            .style("stroke", "black");
	**/
	linearRegression: function(y,x){
		var lr = {};
		var n = y.length;
		var sum_x = 0;
		var sum_y = 0;
		var sum_xy = 0;
		var sum_xx = 0;
		var sum_yy = 0;
		
		for (var i = 0; i < y.length; i++) {
			
			sum_x += x[i];
			sum_y += y[i];
			sum_xy += (x[i]*y[i]);
			sum_xx += (x[i]*x[i]);
			sum_yy += (y[i]*y[i]);
		} 
		
		lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
		lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
		lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
		
		return lr;
	},
	
	/**
	 * @method: min
	 * @parameters: array of no (one column)
	 * @return: {minimum value}
	 * */
    min: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
        arr.sort(function(a,b){
            return a- b;
        });
        return arr[0];
    },

	/**
	 * @method: max
	 * @parameters: array of no (one column)
	 * @return: {max element}
	 * */
    max: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
        arr.sort(function(a,b){
            return a- b;
        });
        return arr[arr.length- 1];
    },

	/**
	 * @method: range
	 * @parameters: array of no (one column)
	 * @return: {result direct}
	 * */
    range: function(arr){
        if(!StatsHelpers.isArray(arr)){
            return false;
        }
        arr.sort(function(a,b){
            return a- b;
        });
        return[arr[0],arr[arr.length- 1]];
    },

	/**
	 * @method: sum
	 * @parameters: array of no (one column)
	 * @return: {sum of elements}
	 * */
    sum: function(arr){
        for(var i=0,length=arr.length,sum=0;i<length;sum+=arr[i++]);
        return sum;
    },

	/**
	 * @method: sort
	 * @parameters: array of no (one column)
	 * @return: {result direct}
	 * */
    sort: function(arr){
        return arr.sort(function(a,b){
            return a- b
        });
    },

	/**
	 * @method: sort reverse
	 * @parameters: array of no (one column)
	 * @return: {reverse sort}
	 * */
    sortReverse: function(arr){
        return arr.sort(function(a,b){
            return a- b
        }).reverse();
    },

	/**
	 * @method: sum of square
	 * @parameters: array of no (one column)
	 * @return: {recursive element}
	 * */
    sumOfSquares: function(arr){
        var mean = Statistics.mean(arr);
        for(var i=0,sumOfSquares =0 ;i<arr.length;i++){
            sumOfSquares+= Math.pow(arr[i]- mean,2);
        }
    return sumOfSquares;
    },

	/**
	 * @method: Equal interval Breaks
	 * @parameters: array and #of intervals.
	 * @return: { array of breaking intervals }
	 * */
    equalIntervalBreaks: function(arr,numBreaks){
        var min=Statistics.min(arr);
        var max=Statistics.max(arr);
        var median = Statistics.median(arr);
        var span=max- min;
        var interval=span/numBreaks;
        var breaks=new Array();
        for(var i=0;i<numBreaks;i++){
            breaks[i] = new Array();
            breaks[i].lower=min+(i*interval);
            if(i+ 1!=numBreaks){
                breaks[i].upper=min+((i+ 1)*interval)-.00000000000001;
            }
            else{
                breaks[i].upper=min+((i+ 1)*interval);
            }
        breaks[i].numbers = new Array();
        }
            for(n in arr){
                for(i in breaks){
                    if(arr[n]>=breaks[i].lower&&arr[n]<=breaks[i].upper){
                        breaks[i].numbers.push(arr[n]);
                    }
                }
            }
        for(i in breaks){
            breaks[i].numbers = Statistics.sort(breaks[i].numbers);
        }
            return breaks;
    },
};

StatsHelpers = {
    /**
	 * @method: is array
	 * @parameters: array of no (one column)
	 * @return: { boolean }
	 * */
    isArray: function(arr){
            return Object.prototype.toString.call(arr)==="[object Array]";
    }
};

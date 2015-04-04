/**
 * Made by / Mohamed Sweelam.
 * Data 15-2-2015
 * */
var Scale = {};             // Parent Scale Object.

Scale.Quntitative = {};     // Quantitative types of scale.

Scale.Ordinal = {};         // Ordinal types : String and characters .

/**
 * @Description
 * Time scale is several types , we consider with normal data e.g ( 2015 , 7 , 21 )
 * @type {{object}}
 */
Scale.Time = {};

/**
 *  Description
 * @ method : Linear Scale
 * @ inputs : (Object of Data set , Col Header ) OR ( Minimum Domain , Maximum Domain) , Minimum Range , Maximum Range ,(axis) X || Y.
 * @ return : Object
 * */
Scale.Quntitative.linear = function(Dataset,max_col_name,min_col_name,max_domain,min_domain,max_range,min_range,axis){
    if(axis=="x" || axis=="X"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){
            return d3.scale.linear()
                .domain([min_domain , max_domain])
                .range([min_range,max_range]);
        }
        else {
            return d3.scale.linear()
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([min_range,max_range]);
        }

    }
    else if(axis=="y" || axis=="Y"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){

            return d3.scale.linear()
                .domain([min_domain , max_domain])
                .range([max_range,min_range]);
        }
        else {
            return d3.scale.linear()
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([max_range,min_range]);
        }

    }
    else
    {
        console.log("error occur in scale Linear method");
    }
};

/**
 *  Description
 * @ method : Power Scale
 * @ inputs : (Data set , Col Header ) OR ( Minimum Domain , Maximum Domain) , Minimum Range , Maximum Range ,X || Y and (Power value).
 * @ return : Object
 * */
Scale.Quntitative.power = function(Dataset,max_col_name,min_col_name,max_domain,min_domain,max_range,min_range,axis,to_the_pow){
    if(axis=="x" || axis=="X"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){
            return  d3.scale.pow().exponent(to_the_pow)
                .domain([min_domain, max_domain])
                .rangeRound([min_range, max_range]);
        }
        else {
            return d3.scale.pow().exponent(to_the_pow)
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([min_range,max_range]);
        }

    }
    else if(axis=="y" || axis=="Y"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){

            return  d3.scale.pow().exponent(to_the_pow)
                .domain([min_domain, max_domain])
                .rangeRound([min_range, max_range]);
        }
        else {
            return d3.scale.pow().exponent(to_the_pow)
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([min_range,max_range]);
        }

    }
    else
    {
        console.log("error occur in scale Power method");
    }
};

/**
 *  Description
 * @ method : Log Scale
 * @ inputs : (Object of Data set , Col Header ) OR ( Minimum Domain , Maximum Domain) , Minimum Range , Maximum Range ,(axis) X || Y.
 * @ return : Object
 * */
Scale.Quntitative.log = function(Dataset,max_col_name,min_col_name,max_domain,min_domain,max_range,min_range,axis){
    if (axis == "x" || axis == "X") {

        if (Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length < 1) {
            return  d3.scale.log()
                .domain([min_domain, max_domain])
                .rangeRound([min_range, max_range]);
        }
        else {
            return d3.scale.log()
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([min_range, max_range]);
        }

    }
    else if (axis == "y" || axis == "Y") {

        if (Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length < 1) {

            return d3.scale.log()
                .domain([min_domain, max_domain])
                .rangeRound([min_range, max_range]);
        }
        else {
            return d3.scale.log()
                .domain([d3.min(Dataset, function (d) {
                    return +d[min_col_name];
                }), d3.max(Dataset, function (d) {
                    return +d[max_col_name];
                })])
                .range([min_range, max_range]);
        }

    }
    else {
        console.log("error occur in scale Log method");
    }
};

/**
 *  Description
 * @ method : Full Date Scale in year.
 * @ inputs : (Object of Data set , Col Header ) OR ( Minimum Domain , Maximum Domain) , Minimum Range , Maximum Range ,(axis) X || Y.
 * @ return : Object
 * Hint: (start year, last year) both are mapping (mid domain, max domain).
 * */
Scale.Time.FullDate = function(Dataset,max_col_name,min_col_name, start_year, last_year, min_range, max_range, axis){
    var start = new Date(start_year),
        end = new Date(last_year),
        range = [min_range, max_range];

    if(axis=="x" || axis=="X"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){
            return d3.time.scale()
                .domain([start, end])
                .rangeRound(range);
        }
        else {
            console.log("OutBoundaries of length");
        }

    }
    else if(axis=="y" || axis=="Y"){

        if(Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length<1){
            return d3.time.scale()
                .domain([start, end])
                .rangeRound(range);
        }
        else {
            console.log("OutBoundaries of length");
        }
    }
    else
    {
        console.log("error occur in scale Time method");
    }
};


/**
 * Description
 * @method: Ordinal char.
 * @param Dataset, chars_obj, axis
 * @returns ordinal char object.
 */
Scale.Ordinal.char = function(Str_col, chars_obj,  axis) {
    var points = [];
    if (axis == "x" || axis == "X") {
        var k = d3.scale.ordinal()
            .domain(Str_col)
            .range(chars_obj);

        for (var i = 0; i < col.length; i++) {
            points.push(k(i));
        }
        return points;
    }

    else {
        console.log("Error in ordinal char x-axis");
    }


    if (axis == "y" || axis == "Y") {

            var k = d3.scale.ordinal()
                .domain(Str_col)
                .range(chars_obj);

            for(var i=0; i<col.length; i++){
                points.push(k(i));
            }

            return points;
        }
        else {
            console.log("Error in ordinal char y-axis");
        }

};

/**
     *  Description
     * @ method : Color
     * @ inputs : Category ID ect.(10,20,20b,20c).
     * @ return : Object
     * */
Scale.Color = function(Category_id){

        if(Category_id !=null) {
            if (Category_id == '10')
                return d3.scale.category10();
            else if(Category_id=='20b')
                return d3.scale.category20b();
            else if(Category_id=='20c')
                return d3.scale.category20c();
            else if(Category_id=='20')
                return d3.scale.category20();
            else
                console.log("No Color Category With this ID");
        }
};

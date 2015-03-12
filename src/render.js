/**
 * Created by Ahmed Medhat on 10-Mar-15.
 */
/**
 * Created by Sweelam on 05/03/2015.
 */

/***************************************************Scale*************************************************************/
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
 * @param Dataset, chars_obj, max_col_name, min_col_name, axis
 * @returns ordinal char object.
 */
Scale.Ordinal.char = function(Dataset, chars_obj, max_col_name,min_col_name,  axis) {
    if (axis == "x" || axis == "X") {

        if (Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length < 1) {
            return d3.scale.ordinal()
                .domain(Dataset)
                .range(chars_obj);
        }
        else {
            console.log("Error in ordinal char x-axis");
        }
    }

    else if (axis == "y" || axis == "Y") {

        if (Dataset.length < 1 && max_col_name.length < 1 && min_col_name.length < 1){
            return d3.scale.ordinal()
                .domain(Dataset)
                .range(chars_obj);
        }
        else {
            console.log("Error in ordinal char y-axis");
        }
    }

    else{
        console.log("Error in ordinal char");
    }
};






/***************************************************Geometry Elements*************************************************************/
//Default Appending TAG
var appending_area='#';

/* Create obj that hold container.
 Set the svg container and make its attributes as default
 */
var Main_Bound_region = {


    id_Main_Bound_region :0,
    id_Group_Bound_region :0,
    svg_width: 0,
    svg_height: 0,
    g_width: 0,
    g_height: 0,

    //Append SVG
    SVG: function(append){
        if( typeof append !== 'undefined') {
            if (append.length > 0) {
                var Container = d3.select(append)
                    .append("svg")
                    .attr("width", this.svg_width)
                    .attr("height", this.svg_height)
                    .attr("id", "svg" + this.id_Main_Bound_region);
                this.id_Main_Bound_region++;
                return Container;
            }
        }

    },

    //Append G
    G: function (append) {

        if( typeof append !== 'undefined') {
            if (append.length > 0) {

                if (append == 'svg' || append == 'SVG')
                    append = '#svg' + (this.id_Main_Bound_region - 1);
                else if (append == 'body')
                    append = 'body';
                else
                    append = '#' + append;


                var GContainer = d3.select(append)
                    .append("g")
                    .attr("width", this.g_width)
                    .attr("height", this.g_height)
                    .attr("id", "g" + this.id_Group_Bound_region);
                this.id_Group_Bound_region++;
                return GContainer;
            }
        }
    }
};


/* The object that holds all geometry primitives */
var Geo_Primitives = {

    /**
     *  Description
     * @ method : Label (for axis)
     * @ inputs : Text , axis type (x,y) , AR ID.
     * @ return : Object
     * */
    Label:function(text,axis_type,append){
        var width=d3.select(appending_area+append).attr("width");
        var height=d3.select(appending_area+append).attr("height");



        if(axis_type=='Y' || axis_type=='y') {
            return d3.select(appending_area + append)
                .append("text")      // text label for the x axis
                //.attr("transform", "rotate(-90)")
                .attr("x", height/2)
                .attr("y",parseInt(width)+55)
                .style("text-anchor", "middle")
                .style("font", "15px sans-serif")
                .text(text);
        }
        if(axis_type=='x' || axis_type=='X')
        {
            return d3.select(appending_area + append)
                .append("text")      // text label for the x axis
                .attr("x", -20 )
                .attr("y", -10 )
                .style("text-anchor", "middle")
                .style("font", "15px sans-serif")
                .text(text);
        }
    },



    //NOT FOR TEST
    /**
     *  Description
     * @ method : Draw_Axis
     * @ inputs :(Object of Data set , Col Header ) OR ( Minimum Domain , Maximum Domain) ,(Type) Vertical || Horizontal and Number of Ticks , AR ID.
     * @ return : Object
     * */
    Draw_Axis: function(type,no_ticks,scale,gridline,where_append){
        var c;
        var max_range;
        var min_range=0;
        var app= appending_area+where_append;
        if(type=="H" || type=="h") {



            if(gridline==true) {
                d3.select(app).selectAll("line.x")
                    .data(scale.ticks(no_ticks))
                    .enter().append("line")
                    .attr("x1", 0)
                    .attr("x2", d3.select(app).attr("width"))
                    .attr("y1", scale)
                    .attr("y2", scale)
                    .style("stroke", "#ccc");
            }
            var axis_coordinate = d3.svg.axis().ticks(no_ticks).orient("bottom").scale(scale);
            var endy=d3.select(app).attr("height");
            return d3.select(app).append("g").attr("transform", "translate(0,"+endy+")").call(axis_coordinate);


        }
        if(type=="V" || type=="v")
        {
            if(gridline==true) {
                d3.select(app).selectAll("line.x")
                    .data(scale.ticks(no_ticks))
                    .enter().append("line")
                    .attr("x1", scale)
                    .attr("x2", scale)
                    .attr("y1", 0)
                    .attr("y2", d3.select(app).attr("height"))
                    .style("stroke", "#ccc");
            }
            var axis_coordinate = d3.svg.axis().ticks(no_ticks).orient("left").scale(scale);

            return d3.select(app).append("g").attr("transform", "translate(0,0)").call(axis_coordinate);
        }

    },


    /**
     *  Description
     * @ method : Draw Line
     * @ inputs : Object of Data set , AR id.
     * @ return : Object
     * */
    DrawLine : function(dataObject,where_append)
    {
        /* Default Var*/
        where_append            =  appending_area+where_append;

        /* Shape D3 Drawer*/
        return d3.select(where_append)
            .selectAll("line")
            .data(dataObject)
            .enter()
            .append("line")
            .attr("x1", function (d) {
                return d.x1;
            })
            .attr("y1", function (d) {
                return d.y1;
            })
            .attr("x2",function (d) {
                return d.x2;
            })
            .attr("y2",function (d) {
                return d.y2;
            })
            .attr("stroke", function (d) {
                return d.stroke;
            })
            .attr("stroke-width",function (d) {
                return d.stroke_width;
            })
            .attr("id",function (d) {
                return d.id;
            });



    },


    /**
     *  Description
     * @ method : Draw Rectangle
     * @ inputs : Object of Data set , AR id.
     * @ return : Object
     * */
    DrawRect: function(dataObject,where_append)
    {

        /* Default Var*/
        where_append            =  appending_area+where_append;

        /* Shape D3 Drawer*/

        return d3.select(where_append)
            .selectAll("rect")
            .data(dataObject)
            .enter()
            .append("rect")
            .attr("x",function (d) {
                return d.x;
            })
            .attr("y",function (d) {
                return d.y;
            })
            .attr("width",function (d) {
                return d.width;
            })
            .attr("height",function (d) {
                return d.height;
            })
            .attr("fill",function (d) {
                return d.fill;
            })
            .attr("rx",function (d) {
                return d.rx;
            })
            .attr("ry",function (d) {
                return d.ry;
            })
            .attr("stroke", function (d) {
                return d.stroke;
            })
            .attr("stroke-width",function (d) {
                return d.stroke_width;
            })
            .attr("fill-opacity", function (d) {
                return d.fill_opacity;
            })
            .attr("id",function (d) {
                return d.id;
            });


    },


    /**
     *  Description
     * @ method : Draw circle
     * @ inputs : Object of Data , AR id.
     * @ return : Object
     * */
    DrawCircle: function(dataObject,where_append)
    {


        /* Default Var*/
        where_append = appending_area + where_append;

        /* Shape D3 Drawer*/

        return d3.select(where_append)
            .selectAll("circle")
            .data(dataObject)
            .enter()
            .append("circle")
            .attr("cx", function (d) {
                return d.cx;
            })
            .attr("cy", function (d) {
                return d.cy;
            })
            .attr("r", function (d) {
                return d.r;
            })
            .attr("stroke", function (d) {
                return d.stroke;
            })
            .attr("stroke-width", function (d) {
                return d.stroke_width;
            })
            .attr("fill", function (d) {
                return d.fill;
            })
            .attr("id",function (d) {
                return d.id;
            });


    },


    /**
     *  Description
     * @ method : Text
     * @ inputs : Object of Data , AR id.
     * @ return : Object
     * */
    Text:function(Dataset,where_append)
    {
        where_append = appending_area + where_append;

        return d3.select(where_append)
            .selectAll("text")
            .data(Dataset)
            .enter()
            .append("text")
            .attr("x",function (d) {
                return d.x;
            })
            .attr("y",function (d) {
                return d.y;
            })
            .style("text-anchor",function (d) {
                return d.text_anchor;
            })
            .style("font",function (d) {
                return d.style;
            })
            .attr("fill",function (d) {
                return d.color;
            })
            .text(function (d) {
                return d.text;
            })
            .attr("id",function (d) {
                return d.id;
            });


    },


    /**
     *  Description
     * @ method : Draw Ellipse
     * @ inputs : Object of Data set ,  AR id.
     * @ return : Object
     * */
    DrawEllipse: function(Dataset,where_append)
    {
        /* Default Var*/
        where_append            =  appending_area+where_append;

        /* Shape D3 Drawer*/

        return d3.select(where_append)
            .selectAll("ellipse")
            .data(Dataset)
            .enter()
            .append("ellipse")
            .attr("cx", function (d) {
                return d.cx;
            })
            .attr("cy", function (d) {
                return d.cy;
            })
            .attr("rx", function (d) {
                return d.rx;
            })
            .attr("ry", function (d) {
                return d.ry;
            })
            .attr("fill", function (d) {
                return d.fill;
            })
            .attr("id",function (d) {
                return d.id;
            });


    },


    /**
     *  Description
     * @ method : Draw Polygon
     * @ inputs : Object of Data set ,  AR id.
     * @ return : Object
     * */
    DrawPolygon: function(Dataset,where_append)
    {

        /* Default Var*/
        where_append            =  appending_area+where_append;

        /* Shape D3 Drawer*/
        return d3.select(where_append)
            .selectAll("polygon")
            .data(Dataset)
            .enter()
            .append("polygon")
            .attr("point", function (d) {
                return d.point;
            })
            .attr("fill", function (d) {
                return d.fill;
            })
            .attr("stroke", function (d) {
                return d.stroke;
            })
            .attr("stroke-width", function (d) {
                return d.stroke_width;
            })
            .attr("fill-rule", function (d) {
                return d.fill_rule;
            })
            .attr("id", function (d) {
                return d.id;
            })


    },


    /**
     *  Description
     * @ method : Draw_Ployline
     * @ inputs : Object of Data set ,  AR id.
     * @ retuen : Object
     * */
    DrawPolyline: function(Dataset,where_append)
    {

        /* Default Var*/
        where_append            =  appending_area+where_append;

        return d3.select(where_append)
            .selectAll("polyline")
            .data(Dataset)
            .enter()
            .append("polyline")
            .attr("point", function (d) {
                return d.point;
            })
            .attr("fill", function (d) {
                return d.fill;
            })
            .attr("stroke", function (d) {
                return d.stroke;
            })
            .attr("stroke-width", function (d) {
                return d.stroke_width;
            })
            .attr("id", function (d) {
                return d.id;
            })

    },


    /**
     *  Description
     * @ method :  Path
     * @ inputs : Object of Data set , Interpolate (type) , Stroke  , Stroke_width , Fill , AR ID.
     * @ return : Object
     * */
    Path: function (Dataset,interpolate,stroke,stroke_width,fill,where_append) {

        /*example for dataset
         var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
         { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
         { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

         interpolate ect

         linear - piecewise linear segments, as in a polyline.
         step-before - alternate between vertical and horizontal segments, as in a step function.
         step-after - alternate between horizontal and vertical segments, as in a step function.
         basis - a B-spline, with control point duplication on the ends.
         basis-open - an open B-spline; may not intersect the start or end.
         basis-closed - a closed B-spline, as in a loop.
         bundle - equivalent to basis, except the tension parameter is used to straighten the spline.
         cardinal - a Cardinal spline, with control point duplication on the ends.
         cardinal-open - an open Cardinal spline; may not intersect the start or end, but will intersect other control points.
         cardinal-closed - a closed Cardinal spline, as in a loop.
         monotone - cubic interpolation that preserves monotonicity in y.


         */
        //This is the accessor function we talked about above

        if(Dataset.length>0){
            stroke = stroke || "black";
            stroke_width = stroke_width || 1;
            fill = fill || "black";

            var lineFunction = d3.svg.line()
                .x(function(d) { return d.x; })
                .y(function(d) { return d.y; })
                .interpolate(interpolate);

            //The SVG Container
            var svgContainer = d3.select("#"+where_append);

            //The line SVG Path we draw
            var lineGraph = svgContainer.append("path")
                .attr("d", lineFunction(Dataset))
                .attr("stroke", stroke)
                .attr("stroke-width", stroke_width)
                .attr("fill", fill);
        }
    }



};

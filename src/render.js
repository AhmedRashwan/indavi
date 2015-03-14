/*Render.js version 1.0 */

//Default Appending TAG
var appending_area='#';

/* Create obj that hold container.
 Set the svg container and make its attributes as default
 */
var Main_Bound_region = {


    id_Main_Bound_region :0, // id of svg elements auto increment.
    id_Group_Bound_region :0, // id of g elements auto increment.
    svg_width: 0, // svg width.
    svg_height: 0, // svg height.
    g_width: 0, // g width.
    g_height: 0, // g height.

    /**
     *  Description
     * @ method : append svg ele
     * @ inputs :  AR ID with # symbol.
     * @ return : Object
     * */
    SVG: function(append){
        if( typeof append !== 'undefined') {
            if (append.length > 0) {
                var Container = d3.select(append)
                    .append("svg")
                    .attr("width", this.svg_width)
                    .attr("height", this.svg_height)
                    .attr("id", "svg" + this.id_Main_Bound_region);
                this.id_Main_Bound_region++; // increment id of svg ele.
                return Container; // return svg object.
            }
        }

    },

    /**
     *  Description
     * @ method : append G ele
     * @ inputs : AR ID only.
     * @ return : Object
     * */
    G: function (append) {

        if( typeof append !== 'undefined') { // check if no passing arguments.
            if (append.length > 0) {

                if (append == 'svg' || append == 'SVG')
                    append = '#svg' + (this.id_Main_Bound_region - 1); // append at last svg.
                else if (append == 'body')
                    append = 'body'; // append body.
                else
                    append = '#' + append; // append at specify id.


                var GContainer = d3.select(append)
                    .append("g")
                    .attr("width", this.g_width)
                    .attr("height", this.g_height)
                    .attr("id", "g" + this.id_Group_Bound_region);
                this.id_Group_Bound_region++; // increment g id.
                return GContainer; // return object of g ele.
            }
        }
    }
};


/* The object that holds all geometry primitives ele */
var Geo_Primitives = {

    /**
     *  Description
     * @ method : Draw_Axis
     * @ inputs :(Type) Vertical || Horizontal , Number of Ticks , scale method of axis , gridline option (bool) and AR ID.
     * @ return : Object
     * */
    Draw_Axis: function(type,label,no_ticks,scale,gridline,where_append){

        var app= appending_area+where_append;

        if(type=="H" || type=="h") { // for x-axis.

            if(gridline==true) { // enable gridline.
                d3.select(app).selectAll("line.x")//for more CSS options.
                    .data(scale.ticks(no_ticks))
                    .enter().append("line")
                    .attr("x1", 0)
                    .attr("x2", d3.select(app).attr("width"))
                    .attr("y1", scale)
                    .attr("y2", scale)
                    .attr("id","H_gridline")
                    .style("stroke", "#ccc");
            }




            var axis_coordinate = d3.svg.axis().ticks(no_ticks).orient("bottom").scale(scale);
            var endy=d3.select(app).attr("height");

            //Label of axis
            d3.select(app)
                .append("text")      // text label for the x axis
                .attr("x",d3.select(app).attr("width"))
                .attr("y",parseInt(endy)+40)
                .style("text-anchor", "end")
                .style("font", "15px sans-serif")
                .style("font-weight","bold")
                .text(label);

            return d3.select(app).append("g").attr("transform", "translate(0,"+endy+")").call(axis_coordinate);// translate (0,width).


        }
        if(type=="V" || type=="v") // for y-axis.
        {
            if(gridline==true) {
                d3.select(app).selectAll("line.y")//for more CSS options.
                    .data(scale.ticks(no_ticks))
                    .enter().append("line")
                    .attr("x1", scale)
                    .attr("x2", scale)
                    .attr("y1", 0)
                    .attr("y2", d3.select(app).attr("height"))
                    .attr("id","V_gridline")
                    .style("stroke", "#ccc");
            }
            var axis_coordinate = d3.svg.axis().ticks(no_ticks).orient("left").scale(scale);

            //Label of axis
            d3.select(app)
            .append("text")      // text label for the x axis
            .attr("text-anchor", "end")
            .attr("y", -40)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .style("font", "15px sans-serif")
            .style("font-weight","bold")
            .text(label);

            return d3.select(app).append("g").attr("transform", "translate(0,0)").call(axis_coordinate); //translate to (0,0)
        }

    },


    /**
     *  Description
     * @ method : Draw Line
     * @ inputs : Object of Data set , AR id.
     * @ return : Object
     * */
    DrawLine : function(dataObject,where_append){
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
    DrawRect: function(dataObject,where_append){

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
    DrawCircle: function(dataObject,where_append){


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
    Text:function(Dataset,where_append){
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
    DrawEllipse: function(Dataset,where_append){
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
     * @ method :  Path
     * @ inputs : Object of Data set , Interpolate (type) , Stroke  , Stroke_width , Fill , AR ID.
     * @ return : Object
     * */
    Path: function (Dataset,interpolate,stroke,stroke_width,fill,id,where_append) {

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
                .attr("fill", fill)
                .attr("id",id);
        }
    }



};

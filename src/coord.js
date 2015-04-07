/**
 * Created by ProBook on 16/03/2015.
 */

var coord = {

/** To Draw  2D Cartesian Coordinate **/

    Cartesian_2D : function(scale,label,ticksNum,orientation,where_append){
        // scale = data scale object , label = text el will write on axis, ticksNum= number of ticks in axis,
        // orientation = (bottom or left), where_append = the position where will render el coordinate.
        var Position= appending_area+where_append;
        if(orientation=="H" || orientation=="h") { // for x-axis.
            var axis_coordinate = d3.svg.axis().ticks(ticksNum).orient("bottom").scale(scale);
            var endy=d3.select(Position).attr("height");

            d3.select(Position)
                .append("text")      // text label for the x axis
                .attr("x",d3.select(Position).attr("width"))
                .attr("y",parseInt(endy)+40)
                .style("text-anchor", "end")
                .style("font", "15px sans-serif")
                .style("font-weight","bold")
                .text(label)

            d3.select(Position).selectAll("line.x")  // horizontal grid line
                .data(scale.ticks(ticksNum))
                .enter().append("line")
                .attr("x1", 0)
                .attr("x2", d3.select(Position).attr("width"))
                .attr("y1", scale)
                .attr("y2", scale)
                .attr("id","H_gridline")
                .style("stroke", "#ccc");

            return d3.select(Position).append("g").attr("transform", "translate(0,"+endy+")").call(axis_coordinate);// translate (0,width).

        }
        if(orientation=="V" || orientation=="v") // for y-axis.
        {

            var axis_coordinate = d3.svg.axis().ticks(ticksNum).orient("left").scale(scale);

            d3.select(Position).append("text")      // text label for the y axis
                .attr("text-anchor", "end")
                .attr("y", -40)
                .attr("dy", ".75em")
                .attr("transform", "rotate(-90)")
                .style("font", "15px sans-serif")
                .style("font-weight","bold")
                .text(label);

            d3.select(Position).selectAll("line.y")  //vertical grid line
                .data(scale.ticks(ticksNum))
                .enter().append("line")
                .attr("x1", scale)
                .attr("x2", scale)
                .attr("y1", 0)
                .attr("y2", d3.select(Position).attr("height"))
                .attr("id","V_gridline")
                .style("stroke", "#ccc");

            return d3.select(Position).append("g").attr("transform", "translate(0,0)").call(axis_coordinate); //translate to (0,0)
        }},
        

/**Draw Polar ROH Coordinate**/

    Polar_roh_2D : function(maxVal,scale,label,TicksNum,radius,where_append){

        // scale = data scale object , label = text which will write on axis, ticksNum= number of circles on grid ,
        // Radius = radius of circles in coordinate
        //  where_append = the position where will render el coordinate.

        var Position= appending_area+where_append;
        var sdat = []; // create verual data object to can draw grid .. divide el svg int circle with equal range
        console.log(maxVal);
        var ratio = radius/maxVal;
        console.log(ratio);
    
        for (var i = 0; i <= TicksNum; i++) {
            sdat[i] = (radius / TicksNum) * i;
           // console.log( sdat[i]+" --  "+ scale(sdat[2]));
            }

        var circleAxes = d3.select(Position).append("g")
            .selectAll("g")
            .data(sdat)//.data(r.ticks(TicksNum))
            .enter().append("g")
            .append("circle")
            .attr("r", function(d){return d;}) //.attr("r", r)
            .style("fill", "none")
            .style("stroke", "#111")
            .style("stroke-width",4);

        scale= scale.range([radius,0])
        var axis = d3.svg.axis()
            .ticks(TicksNum)
            .scale(scale)
            .orient("left");
        var linText = d3.select(Position).selectAll("g")
            .append("g")
            .attr("transform","translate(-220,-220)")
            .call(axis)
            .style("fill", "none")
            .style("stroke", "#ccc");

        var Label = d3.select(Position).append("text")
            .attr("transform","translate(0,-230)")
            .style("text-anchor", "middle")
            .style("font", "15px sans-serif")
            .style("font-weight", "bold")
            .text(label)

    },

    
/** To Draw Polar theta coordinate  **/

    Polar_theeta_2D:function(maxVal,scale,label,TicksNum,radius,where_append){
        var Position= appending_area+where_append;
        scale=scale.range([0,360]);
        console.log(maxVal);
        var ratio = radius/maxVal;
        console.log(ratio);
        var gridAxes = d3.select(Position).append("g")
            .selectAll("g")
            .data(d3.range(0, (scale(maxVal-1) ),(360/TicksNum) ))
            .enter().append("g")
            .attr("transform", function (d) {
                return "rotate(" + (d-90) + ")";
            })
            .append("line")
            .attr("x2", radius)
            .style("fill", "none")
            .style("stroke", "#ccc");

         var gridText = d3.select(Position).selectAll("gridAxes")
         .data(d3.range(0, (scale(maxVal-1) ),(360/TicksNum))).enter().append("text")
         .attr("x", radius + 6)
         .attr("y", ",35em")
         .style("text-anchor", "end+5")
         .attr("transform", function (d) {  return "rotate(" + (d-90) + ")"; })
         .text(function (d) { return d;  });

        var circleAxes = d3.select(Position).append("g")
            .append("circle")
            .attr("r", radius) //.attr("r", r)
            .style("fill", "none")
            .style("stroke", "#111")
            .style("stroke-width",4);
        var Label = d3.select(Position).append("text")
            .attr("transform","translate(0,-230)")
            .style("text-anchor", "middle")
            .style("font", "15px sans-serif")
            .style("font-weight", "bold")
            .text(label)
    }

}

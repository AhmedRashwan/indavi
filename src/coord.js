/**
 * Created by ProBook on 16/03/2015.
 */

var coord = {
    Cartesian_2D : function(scale,label,ticksNum,orientation,where_append){
        // scale = scaled data object , label = text el will write on axis, ticksNum= number of ticks in axis,
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

    Polar_2D : function(scale,label){

    }

}

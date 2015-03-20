/**
 * Created by Sweelam on 27/01/2015.
 */

var Inter_Tech = {

    /**
     * @method : Emphasize
     * @Description:
     * Make the shape bigger.
     * @param geo
     * @param what
     * @param value
     * @constructor
     */
    Emphasize: function(geo, what, value){
        d3.select(geo).attr(what, value);
    },

    /**
     * @method: Go back to original size.
     * @param geo
     * @param what
     * @param original
     * @constructor
     */
    De_emphasize: function(geo, what, original){
        d3.select(geo).attr(what, original);
    },

    // Magnify
    /**
     * Description
     * Pass an object as a reference and edit its content direct inside the function.
     * @param container
     */
    zoom: function(container){
        container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    },


    /**
     * Description
     * Start brushing for parallel only.
     * @param none
     */
    PC_BrushStart: function brushstart() {
        d3.event.sourceEvent.stopPropagation();
    },

    /**
	 * @method: parallel brushing
     * @Description:
     * brush for the focus line path through y-axis ( PC components ).
     * @param: y_axis and focus line path
     */
    PC_Brush:  function brush(y_axis, Line_Focus) {
        var actives = dimensions.filter(function (p) {
                return !y_axis[p].brush.empty();
            }),

            extents = actives.map(function (p) {
                return y_axis[p].brush.extent();
            });

        Line_Focus.style("display", function (d) {
            return actives.every(function (p, i) {
                return extents[i][0] <= d[p] && d[p] <= extents[i][1];
            }) ? null : "none";
        });
    },

    /**
     * @method : Resize_circle
     * @Description:
     * when the input range changes update the circle
     * @param SliceId is the slice bar id in your HTML code
     * This function map the HTML input to javascript code so spelling is so important.
     */
    Resize_circle: function(SliceId, SpanId){
        d3.select(SliceId).on("input", function() {
            Inter_Tech.update_CircleSize(this, +this.value , SpanId, SliceId);
        });
    },

    /**
     * @method : update_CircleSize
     * @Description:
     * update the circle radius
     * @param container, start radius value"nRadius" , a showing span for range value "spanId" and SliceId.
     * This function map the HTML input to javascript code so spelling is so important.
     */
    update_CircleSize: function (container, nRadius, SpanId, SliceId) {
        d3.select(container);

        d3.select(SpanId).text(nRadius);      // Show values.
        d3.select(SliceId).property("value", nRadius);

        d3.selectAll("circle")
            .attr("r", nRadius);
    },

    /**
     * @method : Resize_width
     * @Description:
     * read a change in the width input
     * @param width_sliceId is the slice bar id in your HTML code
     * This function map the HTML input to javascript code so spelling is so important.
     */
    Resize_width: function(width_sliceId, width_spanId){
        //
        d3.select(width_sliceId).on("input", function() {
            Inter_Tech.updateWidth(this, +this.value, width_spanId, width_sliceId);
        });
    },

    /**
     * @method : Resize_height
     * @Description:
     * read a change in the height input
     * @param height_sliceId is the slice bar id in your HTML code
     * This function map the HTML input to javascript code so spelling is so important.
     */
    Resize_height: function(height_sliceId, height_spanId){
        // read a change in the height input
        d3.select(height_sliceId).on("input", function() {
            Inter_Tech.updateHeight(this, +this.value, height_spanId, height_sliceId);
        });
    },

    /**
     * @method : updateHeight
     * @Description:
     * read a change in the width input
     * @param container, start radius value"nRadius" , a showing span for range value "spanId" and SliceId.
     * This function map the HTML input to javascript code so spelling is so important.
     */
    updateHeight: function(container, nHeight, height_spanId, height_sliceId){
        d3.select(container);
        d3.select(height_spanId).text(nHeight);         // adjust the text on the range slider
        d3.select(height_sliceId).property("value", nHeight);

        d3.selectAll("svg")
            .attr("height", nHeight);
    },

    /**
     * @method : updateWidth
     * @Description:
     * read a change in the width input
     * @param container, start radius value"nRadius" , a showing span for range value "spanId" and SliceId.
     * This function map the HTML input to javascript code so spelling is so important.
     */
    updateWidth: function(container, nWidth, width_spanId, width_sliceId){
        d3.select(container);
        d3.select(width_spanId).text(nWidth);           // adjust the text on the range slider
        d3.select(width_sliceId).property("value", nWidth);

        d3.selectAll("svg")
            .attr("width", nWidth);
    },

    /**
     * @method : legend
     * @Description:
     * draw legend colored rectangles and adjust legend text.
     * @param container, color "scaling" and svg width.
     */
    legend: function(container, color, width){
        d3.select(container);

        var legend = container.selectAll(".legend")
            .data(color.domain())
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

        legend.append("rect")
            .attr("x", width - 15)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", color);

        legend.append("text")
            .attr("x", width - 20)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function(d) { return d;})
    },

	/**
	* @method: Change body color to dark theme
	* @Parameters: dark button id, ligh button id 
	* @description: Dynamic live css changes
	* @return: {}
	**/
    dark_theme: function(darkButton_Id, lightButton_Id) {
    d3.select("body").attr("class", "dark");
    d3.selectAll(darkButton_Id).attr("disabled", "disabled");
    d3.selectAll(lightButton_Id).attr("disabled", null);
    },

	/**
	* @method: Change body color to light theme
	* @Parameters: dark button id, ligh button id 
	* @description: Dynamic live css changes
	* @return: {}
	**/
    light_theme: function(lightButton_Id, darkButton_Id) {
    d3.select("body").attr("class", null);
    d3.selectAll(lightButton_Id).attr("disabled", "disabled");
    d3.selectAll(darkButton_Id).attr("disabled", null);
    }

};

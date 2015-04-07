/**
 * Created by Ahmed Medhat on 28-Feb-15.
 */

/*
 data
 dim1
 dim2
 scale
 geometry
 coordinate
 */
//constructor
var plots= function(arg) {
    this.arg=arg;
};

//attributes
plots.prototype.render = function(width,height,id,type) {

    var vdim1=[],vdim2=[],csv=[];
    var object=this.arg;

    d3.csv(object.data, function (dataset) {

        values_of_key(dataset, object.dim1, vdim1);
        values_of_key(dataset, object.dim2, vdim2);
        for (var i = 0; i < vdim1.length; i++) {
            var obj = {};
            obj[object.dim1] = vdim1[i];
            obj[object.dim2] = vdim2[i];
            csv.push(obj);

        }

        switch (object.geometry) {
            case "boxplot":
            {
                Boxplot(csv,width,height,id,object.scale,object.coordinate);
                break;
            }
            case "boxplot-chart":
            {
                Boxplot(dataset,width,height,id,object.scale,object.coordinate);
                break;
            }
            case "circle":
            {
                var plot=Main_Bound_region;
                plot.svg_height = width;
                plot.svg_width = height;
                plot.g_width=plot.svg_width-100;
                plot.g_height=plot.svg_height-100;

                var svg= plot.SVG("body");
                var myappend=plot.G("svg").attr("id");
                var myappend2=plot.G(myappend).attr("transform", "translate(30,10)").attr("id");
                svg.call(Interaction.Zoom(1,8,myappend2))

                geo_scatterplot(csv, object.dim1, object.dim2, "black", 10, 10,plot.id_Group_Bound_region,myappend2);
                break;
            }
            case "scatter-plot-matrix":
            {
               ScatterPlotMatrix(dataset,width,height,object.color);
                break;
            }
            case "histogram":
            {
                Histogram(dataset,width,height,object.dim1);
            }
            case "pie-chart": //new 23-3-2015
            {
                RoundChart(dataset,width,height,type,object.dim1);
            }
        }

    });
};

/**
 *  Description
 * @ method : Draw Boxplot
 * @ inputs :  array of numbers , col name , x , scale method of x and y , id and AR ID.
 * @ return : none
 * */
function geo_boxplot(boxplot_data,col_name,x_pad,scalex,scaley,id,where_append){

    var  max_array = [], min_array = []; // max value array and min value array

    sort_array_ACE(boxplot_data); // sort array to ACE order

    var max = max_of_array(boxplot_data), // get max value
        min= min_of_array(boxplot_data), // get min value
        median = median_of_array(boxplot_data); // get median value
    divide_array(boxplot_data, min_array, max_array); // divide array to two array as min array and max array
    var fq = median_of_array(min_array), // first quarter = the average between min to median
        sq = median_of_array(max_array);  // second quarter = the average between median to max

    var mydata2 = [], // lines data
     mydata = [], // text data
     mydata3=[]; // rect data


    // fill scaled data of geometry elem
    //max line
    Fill_DataObject.line(mydata2,20 + x_pad, scaley(max),50 + x_pad, scaley(max), "black", 5, "max");
    Fill_DataObject.text(mydata, (20 + x_pad + 50 + x_pad) / 2, scaley(max + 0.5), "middle", "12px sans-serif", "black", max, 't');

    //min line
    Fill_DataObject.line(mydata2, 20 + x_pad, scaley(min), 50 + x_pad, scaley(min), "black", 5, "min");
    Fill_DataObject.text(mydata, (20 + x_pad + 50 + x_pad) / 2, scaley(min-0.8), "middle", "12px sans-serif", "black", min, 't');

    //fq ,sq lines
    Fill_DataObject.rect(mydata3,20+x_pad,scaley(sq),(50+x_pad)-(20+x_pad),scaley(fq)-scaley(sq),0,0,"#e80e6b","white",3,0.9,id);

    // median lines
    Fill_DataObject.line(mydata2, 20 + x_pad, scaley(median), 50 + x_pad, scaley(median), "white", 3, "median");
    Fill_DataObject.text(mydata, (20 + x_pad + 50 + x_pad) / 2, scaley(median + 0.2), "middle", "12px sans-serif", "black", median, 't');

    // sq lines
    Fill_DataObject.line(mydata2, (20 + x_pad + 50 + x_pad) / 2, scaley(max), (20 + x_pad + 50 + x_pad) / 2, scaley(sq), "black", 2);

    // fq lines
    Fill_DataObject.line(mydata2, (20 + x_pad + 50 + x_pad) / 2, scaley(min), (20 + x_pad + 50 + x_pad) / 2, scaley(fq), "black", 2);


    //simple transition
    Main_Bound_region.G(where_append).on("mouseover", function () {
        d3.select(this).selectAll("rect").attr("fill", "white");
    }).on("mouseout", function () {
        d3.select(this).selectAll("rect").attr("fill", "#e80e6b");
    })
        .attr("transform", "translate(" + max * 10 + "," + min * 20 + ")").transition().attr("transform", "translate(0,0)")
        .duration(2000) // this is 1s
        .delay(100);


    //render methods
    Geo_Primitives.DrawRect(mydata3,'g'+id);
    Geo_Primitives.DrawLine(mydata2, 'g' + id);
    Geo_Primitives.Text(mydata, 'g' + id);
}

/**
 *  Description
 * @ method : Draw Scatterplot
 * @ inputs :  dataset , col name 1 , col name 2 , x , y , id and AR ID.
 * @ return : none
 * */
function geo_scatterplot(csv,col1,col2,color,x_pad,y_pad,id,where_append){

    //appending new g ele
    Main_Bound_region.G(where_append).transition().attr("transform", "translate(" + x_pad + "," + y_pad + ")")
        .duration(2000) // this is 1s
        .delay(100);//.call(brush);     // this is 0.1s;



    var mydata = [], // circles data of scatterplot
        square = []; // border of g
    var vcol1 = [], // values of first col
        vcol2 = [], // values of second col
        vspecifes = []; // values of color col

    // fill arrays
    values_of_key(csv, col1, vcol1);
    values_of_key(csv, col2, vcol2);
    values_of_key(csv, color, vspecifes);

    // generate range of color
    var colors=d3.scale.category20();


    // scale data
    var width = d3.select("#g" + id).attr("width");
    var height = d3.select("#g" + id).attr("height");
    var scalex = Scale.Quntitative.linear(csv, col1, col1, 0, 0, width, 0, 'x');
    var scaley = Scale.Quntitative.linear(csv, col2, col2, 0, 0, height, 0, 'y');

    for (var i = 0; i < vcol1.length; i++) {

        if (isNaN(vcol2[i]) == false && isNaN(vcol1[i]) == false) // check if x or y have string value
        {
            if(typeof  vspecifes[0]=="undefined")
                Fill_DataObject.circle(mydata, scalex(vcol1[i]), scaley(vcol2[i]), 2.5, "black", 1,color); //create data object for circles

            else
            Fill_DataObject.circle(mydata, scalex(vcol1[i]), scaley(vcol2[i]), 2.5, "black", 1, colors(vspecifes[i])); //create data object for circles

        }
    }

    // y axis
    coord.Cartesian_2D(scaley,col2,5,'v','g'+id).attr("class", "x axis");//new

    // border of scatterplot
    square = [
        {
            x: 0,
            y: 0,
            width: Main_Bound_region.g_width,
            height: Main_Bound_region.g_height,
            rx: 0,
            ry: 0,
            fill: "white",
            stroke: "black",
            stroke_width: 2,
            fill_opacity: 0
        }
    ]

    //render methods
    Geo_Primitives.DrawRect(square, "g" + id);

    // x axis
    coord.Cartesian_2D(scalex,col1,5,'h','g'+id).attr("class", "y axis"); // new

    //render circles
    Geo_Primitives.DrawCircle(mydata, 'g' + id).append("svg:title")
        .text(function (d) {
            return col1 + "=" + Math.round(scalex.invert(d.cx) * 100) / 100 + " , " + col2 + "=" + Math.round(scaley.invert(d.cy) * 100) / 100;
        });
}


/**
 *  Description
 * @ method : Draw Scatterplot Matrix
 * @ inputs :  dataset , width , height , fill color of circle.
 * @ return : none
 * */
function ScatterPlotMatrix(csv,swidth,sheight,color){
    var traits = keys_of_objects(csv); // get header names
    var no_of_cols = traits.length; // no of cols

    //Initialization SVG attrs
    var plot = Main_Bound_region;
    var padding=60;
    plot.svg_height = sheight;
    plot.svg_width = swidth;
    plot.g_width=plot.svg_width/(no_of_cols)-padding-5;
    plot.g_height=plot.svg_height/(no_of_cols)-padding-5;

    //Interaction Zoom
   var svg= plot.SVG("body");
    var myappend=plot.G("svg").attr("id");
    var myappend2=plot.G(myappend).attr("transform", "translate("+padding+",25)").attr("id");
    svg.call(Interaction.Zoom(1,8,myappend2));

    //Data Transforms
    var id=plot.id_Group_Bound_region;
    var x_pad= 0,y_pad=0;
    for(var col1= 0;col1<no_of_cols;col1++){
        for(var col2=no_of_cols-1;col2>-1;col2--){
            geo_scatterplot(csv,traits[col1],traits[col2],color,x_pad,y_pad,id,myappend2);

            id++;
            x_pad+=plot.g_width+padding;
        }
        y_pad+=plot.g_height+padding;x_pad=0;
    }


}


/**
 *  Description
 * @ method : Draw Histogram
 * @ inputs :  dataset , width , height , col name.
 * @ return : none
 * */


function Histogram(dataset,swidth,sheight,col_name) {

    //Initialization SVG attrs
    var histogram = Main_Bound_region;
    histogram.svg_width = swidth;
    histogram.svg_height = sheight;
    histogram.g_height = sheight - 50;
    histogram.g_width = swidth - 50;

    //Interaction Zoom
    var svg = histogram.SVG("body");
    var myappend = histogram.G("svg").attr("id");
    var myappend2 = histogram.G(myappend).attr("transform", "translate(40,10)").attr("id");
    svg.call(Interaction.Zoom(1, 8, myappend2))

    //Data Transforms
    var data = [], vkey = [], vvalue = [], mydata = [], mydata2 = [];
    values_of_key(dataset, col_name, data); //x
    var datas = frequancy_object(data); //height
    var traits2 = keys_of_objects(datas);
    values_of_key(datas, traits2[0], vkey);
    values_of_key(datas, traits2[1], vvalue);

    //Scale
    var color=d3.scale.category10();
    var width = d3.select("#" + myappend2).attr("width");
    var height = d3.select("#" + myappend2).attr("height");
    var y = d3.scale.linear()
        .domain([0, d3.max(datas, function (d) {
            return +d[traits2[1]];
        })])
        .range([height, 0]);
    var x = Scale.Quntitative.linear("", "", "", max_of_array(vkey) + width / vkey.length, min_of_array(vkey), width, 0, "x");

    var pad = 0, id = 0;
    for (var i = 0; i < vkey.length; i++) {
        Fill_DataObject.rect(mydata, parseInt(pad), y(vvalue[i]), (width / vkey.length), height - y(vvalue[i]), 0, 0, color(vvalue[i] ), "black", 1, 1, id);
        Fill_DataObject.text(mydata2, pad + (width / vkey.length) / 2, y(vvalue[i]) - 3, "middle", "12px sans-serif", "black", vvalue[i] + "%", 't' + id);
        id++;
        pad += width / vkey.length;

    }

    //Render
    Geo_Primitives.Text(mydata2, myappend2);
    coord.Cartesian_2D(x,col_name,vkey.length,"h",myappend2).attr("class","y axis");
    coord.Cartesian_2D(y,"frequency",vvalue.length,"v",myappend2).attr("class","y axis")

    Geo_Primitives.DrawRect(mydata, myappend2)
        .on("mouseover", function () {
            var id = d3.select(this).attr("id");
            d3.select(this).attr("fill", "#e80e6b");
            d3.select("#t" + id).attr("fill", "#e80e6b");
            console.log(x.invert(d3.select(this).attr("x")));
        })
        .on("mouseout", function () {
            d3.select(this).attr("fill", function (d) {
                return d.fill;
            })
            var id = d3.select(this).attr("id");
            d3.select("#t" + id).attr("fill", "black");
        })
        .attr("height", 0).attr("transform", "translate(0,0)").transition().attr("height", function (d) {
            return d.height;
        })
        .duration(1000)
        .delay(100);
}

function Boxplot(csv,swidth,sheight,append_id,scale,coordinate) {

    var col_keys = keys_of_objects(csv);

    //Initialization SVG attrs
    var boxplot = Main_Bound_region;
    boxplot.svg_width = swidth;
    boxplot.svg_height = sheight;
    boxplot.g_height = sheight-100;
    boxplot.g_width = swidth-100;

    //Interaction Zoom
    var svg= boxplot.SVG(append_id);
    var myappend=boxplot.G("svg").attr("id");
    var myappend2=boxplot.G(myappend).attr("transform", "translate(50,25)").attr("id");
    svg.call(Interaction.Zoom(1,8,myappend2))


    //Scale
    var tmax, tmin;
    tmax=maxmin_of_dataset(csv).split(",");
    tmin=tmax.pop();
    var width = d3.select("#"+myappend2).attr("width");
    var height = d3.select("#"+myappend2).attr("height");
    var scalex ;
    var scaley = Scale.Quntitative.linear(csv, tmax, tmin, 0, 0, height, 0, 'y');


    //Data Transforms
    if(col_keys.length>2) {
        var x_pad = 0, id = 2;
        for (var i = 0; i < col_keys.length; i++) {
            var array = [];
            values_of_key_int(csv, col_keys[i], array)

            scalex= Scale.Quntitative.linear(csv,col_keys[i],col_keys[i], 0, 0, width, 0, 'x');
            geo_boxplot(array, col_keys[i], x_pad,scalex ,scaley, id,myappend2);
            id += 1;
            x_pad += 70;
        }
    }
    else
    {
        var x_pad = 0, id = boxplot.id_Group_Bound_region;
        var col1=[],col2=[];
        values_of_key(csv,col_keys[0],col1);
        values_of_key(csv,col_keys[1],col2);
        var keys=frequancy_object(col2);
        for(var i=0;i<keys.length;i++){
            var key=keys[i].key,data=[];
            for(var n=0;n<col1.length;n++){
                if(key==col2[n])
                {
                    data.push(col1[n]);
                }
            }
            //Render
            geo_boxplot(data,key,x_pad,scalex,scaley,id,myappend2);
            id += 1;
            x_pad += 70;
        }
       }

    //Coordinate Axis
        coord.Cartesian_2D(scalex,'a',20,'h',myappend2)  //new - wafaa
        .attr("class", "y axis").attr("transform", "translate(-200,-100)").transition()
        .attr("transform", "translate("+0+","+height+")")
        .ease("elastic");

         coord.Cartesian_2D(scaley,'a',20,'v',myappend2) //new - wafaa
        .attr("class", "y axis").attr("transform", "translate(-200,-100)").transition()
        .attr("transform", "translate(0,0)")
        .ease("elastic");
}


/**
 *  Description
 * @ method : Draw Pie Chart
 * @ inputs :  dataset , width , height , col name.
 * @ return : none
 * */


function RoundChart(dataset,height,width,type,colName){

    //Initialization SVG attrs
    console.log("hi pie chart ");
    var roundChart = Main_Bound_region;
    roundChart.svg_width = width;
    roundChart.svg_height = height;
    roundChart.g_height = height-70;
    roundChart.g_width = width-70;
    console.log(Math.min(roundChart.g_height,roundChart.g_width)/2)

    //Interaction Zoom
    var svg= roundChart.SVG("body");
    var myappend=roundChart.G("svg").attr("transform", "translate(40,30)").attr("id");
    var myappend2=roundChart.G(myappend).attr("transform", "translate("+roundChart.g_width/2 +","+roundChart.g_height/2+")").attr("id");
    svg.call(Interaction.Zoom(1,8,myappend2))


    //Data Transforms
    var data = [], vkey = [], vvalue = [];
    values_of_key(dataset, colName, data); //x
    var datas = frequancy_object(data); //height
    var traits2 = keys_of_objects(datas);
    values_of_key(datas, traits2[0], vkey);
    values_of_key(datas, traits2[1], vvalue);
    //  console.log(vkey.length +"-- data  : "+ vkey); // data value  & frequency of them ;
    //console.log(vvalue.length + " -- data : "+vvalue);
    //vkey=vkey.sort(d3.descending);
    // console.log(vkey.length +"-- data  : "+ vkey); // data value  & frequency of them ;
    // console.log(vvalue.length + " -- data : "+vvalue);
    var maxFrequency = d3.max(vvalue);  //console.log(maxFrequency); //max numbers of repeat
    var maxKey=d3.max(vkey);            //console.log(maxKey)        // max value in data
    var radius=Math.min(roundChart.g_height,roundChart.g_width)/2 ;

    //Scale
    var color=d3.scale.category10();
    var r = d3.scale.linear()
        .domain([0, maxFrequency ])
        .range([ 0,radius]);

    var id=0
    var polar;
//render
    /** to Draw Polar roh **/
    if(type=="roh")
    {   vvalue=vvalue.sort(d3.descending);
        console.log(vvalue.length + " -- data : "+vvalue);
        for (var i = 0; i < vvalue.length; i++) {
            id++;
            Fill_DataObject.circle(data, 0,0,r(vvalue[i]), "black",1,color(vvalue[i]),id); //create data object for circles
            Fill_DataObject.text(data, 3, r(vvalue[i])  , "middle", "13px sans-serif", "black", vkey[i]  , 't' + id);
            id++;
        }
        Geo_Primitives.Text(data, myappend2);
        coord.Polar_roh_2D(maxFrequency,r,colName,vvalue.length,radius,myappend2);

       return Geo_Primitives.DrawCircle(data, myappend2 )
           .on("mouseover", function () {
               var id = d3.select(this).attr("id");
               d3.select(this).attr("fill", "#FAF0E6");
               d3.select("#t" + id).attr("fill", "#FAF0E6");
               console.log(Math.ceil(r.invert(d3.select(this).attr("r"))));
           })
           .on("mouseout", function () {
               d3.select(this).attr("fill", function (d) {
                   return d.fill;
               })
               var id = d3.select(this).attr("id");
               d3.select("#t" + id).attr("fill", "black");
           });
    }


    /** to draw polar Theta **/
    else if(type=="theta")
    {
        coord.Polar_theeta_2D(maxFrequency,r,colName,vvalue.length,radius,myappend2);

        r= r.range([0,360]);
        var scaledData=[], startAngle=[],endAngle=[];
        for(var i=0; i<vvalue.length;i++)
        {
            scaledData[i]=r(vvalue[i]);
        }
        for(var i=0;i<vvalue.length;i++)
        {
            startAngle[0]=0;
            endAngle[0]=(360/d3.sum(scaledData))*scaledData[0]*(Math.PI/180)
            endAngle[i+1]=endAngle[i]+(360/d3.sum(scaledData))*scaledData[i+1]*(Math.PI/180)
            startAngle[i+1]=endAngle[i];
            console.log( startAngle[i] +" ------ "+ endAngle[i]);
        }
        myappend2=appending_area+myappend2;
        var arc=d3.svg.arc()
            .innerRadius(0)
            .outerRadius(radius);
        console.log(vvalue.length);
        for(var i=0;i<vvalue.length;i++)
        {
            arc.startAngle(startAngle[i])
                .endAngle(endAngle[i]);

           polar=d3.select(myappend2).append("path")
                .attr("d", arc)
                .attr("fill", color(vvalue[i]))
                .style("stroke", "#444")
        }
        return polar;
    }

}


/**
 * Created by Ahmed Medhat on 10-Mar-15.
 */



//Histogram Methods
function frequancy_object(list) {

    var num,i=0,a=0,flag=0,b=0;
    var list2=[];

    var n;
    var m;
    var j;
    var counter = 0;
    for(n=0;n<list.length;n++){
        a=0;
        for( m=n;m<list.length;m++)
            if(list[n]==list[m])
                a++;

        for(j=n-1;j>=0;j--)     //check if the same number is printed before or not
            if(list[n]==list[j])
                b=1;
        if(b==1){b=0;continue;}

        if(a>1)       {
            //check if the number is repeated more than one time or only one time
            list2[counter] = new Array(2);
            list2[counter][0] = list[n];
            list2[counter][1] = a;
            counter++;
        }
        else if(a==1){
            list2[counter] = new Array(2);
            list2[counter][0] = list[n];
            list2[counter][1] = a;
            counter++;

        }

    }
    return converttojson(list2);
}
function converttojson(res){
    var arrobj = [];
    for(var i = 0;i<res.length;i++)
        arrobj.push({"key" :res[i][0],"value" : res[i][1]});

    return JSON.parse(JSON.stringify(arrobj));
}

/*-----------------------------------------------------------------------------------------------*/


//Dataset Methods
function maxmin_of_dataset(csv){
    var tmax,tmin;
    var col_keys = keys_of_objects(csv);
    var temp = 0;
    for (var i = 0; i < col_keys.length; i++) {
        var temp_data = [];
        values_of_key_int(csv, col_keys[i], temp_data);
        if (temp < max_of_array(temp_data)) {
            temp = max_of_array(temp_data);
            tmax = col_keys[i];
        }
    }


    var temp_data = [];
    values_of_key_int(csv, tmax, temp_data);
    var temp = max_of_array(temp_data);
    for (var i = 0; i < col_keys.length; i++) {
        temp_data = [];
        values_of_key_int(csv, col_keys[i], temp_data);
        if (temp > min_of_array(temp_data)) {
            temp = min_of_array(temp_data);
            tmin = col_keys[i];
        }
    }
    return tmax+","+tmin;
}
function keys_of_objects(Dataset){
    return d3.keys(Dataset[0]).filter(function (d) {
        return d;
    });
}
function values_of_key(Dataset,key,values){
    d3.select("body")
        .selectAll("x")
        .data(Dataset,function (d){values.push(d[key])});

}
function values_of_key_int(Dataset,key,values){
    d3.select("body")
        .selectAll("x")
        .data(Dataset,function (d){values.push(parseInt(d[key]))});

}


/*-----------------------------------------------------------------------------------------------*/


//Data Object OF Shapes
function Generate_DataObject_Circle(DataObject,cx,cy,r,stroke,stroke_width,fill,id){

    DataObject.push({
        cx:cx ,
        cy:cy ,
        r:r,
        stroke:stroke,
        stroke_width:stroke_width,
        fill:fill,
        id:id
    });


}
function Generate_DataObject_Rect(DataObject,x,y,width,height,rx,ry,fill,stroke,stroke_width,fill_opacity,id){
    DataObject.push({
        x:x,
        y:y,
        width:width,
        height:height,
        rx:rx,
        ry:ry,
        fill:fill,
        stroke:stroke,
        stroke_width:stroke_width,
        fill_opacity:fill_opacity,
        id:id
    });

}
function Generate_DataObject_line(DataObject,x1,y1,x2,y2,stroke,stroke_width,id){

    DataObject.push({
        x1:x1,
        y1:y1,
        x2:x2,
        y2:y2,
        stroke:stroke,
        stroke_width:stroke_width,
        id:id
    });

}
function Generate_DataObject_text(DataObject,x,y,text_anchor,style,color,text,id){
    DataObject.push({
        x:x,
        y:y,
        text:text,
        text_anchor:text_anchor,
        style:style,
        color:color,
        id:id

    });
}
function Generate_DataObject_Ellipse(DataObject,cx,cy,rx,ry,fill,id){
    DataObject.push({
        cx:cx,
        cy:cy,
        rx:rx,
        ry:ry,
        fill:fill,
        id:id

    });
}
function Generate_DataObject_Polygon(DataObject,point,fill,stroke,stroke_width,fill_rule,id){
    DataObject.push({
        point:point,
        fill:fill,
        stroke:stroke,
        stroke_width:stroke_width,
        fill_rule:fill_rule,
        id:id

    });
}
function Generate_DataObject_Polyline(DataObject,point,fill,stroke,stroke_width,id){
    DataObject.push({
        point:point,
        fill:fill,
        stroke:stroke,
        stroke_width:stroke_width,
        id:id

    });
}

/*-----------------------------------------------------------------------------------------------*/


//Arrays Methods
function max_of_array(data){
    return d3.max(data,function (d){return +d;})
}
function min_of_array(data){
    return d3.min(data,function (d){return +d;})
}
function sort_array_ACE(data){
    data.sort(function(a, b){
        return a - b;
    });

}
function median_of_array(data){
    return d3.median(data,function (d){return d;});
}
function divide_array(data,min,max) {
    for (var i = 0; i < data.length; i++) {
        if (isEven(data.length) == true) {
            if (i < (data.length / 2 - 1))
                min.push(data[i]);

            else if (i > (data.length / 2))
                max.push(data[i]);
        }

        else {
            if (i < (data.length + 1) / 2 - 1)
                min.push(data[i]);

            else if (i > (data.length / 2))
                max.push(data[i]);
        }
    }
}

/*-----------------------------------------------------------------------------------------------*/

//Numbers Methods
function isEven(n){
    return isNumber(n) && (n % 2 == 0);
}
function isOdd(n){
    return isNumber(n) && (Math.abs(n) % 2 == 1);
}
function isNumber(n){
    return n == parseFloat(n);
}




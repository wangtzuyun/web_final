
var chartData = {
   
    "barCircleDeath":[
        {"index":0.3, "value":46829, "fill":"#231F20", "label":"Cancer"},
        {"index":0.4, "value":19202, "fill":"#403437", "label":"Heart Disease"},
        {"index":0.5, "value":11169, "fill":"#53363C", "label":"Cerebrovescular"},
        {"index":0.6, "value":10761, "fill":"#5E2C3A", "label":"Pneumonia"},
        {"index":0.7, "value":9530, "fill":"#660E34", "label":"Diabetes"},
        {"index":0.8, "value":7033, "fill":"#Accidents", "label":"HealthGrades"},
        {"index":0.9, "value":6383, "fill":"#96606B", "label":"Respiratory"},
        {"index":1,   "value":5536,  "fill":"#4762", "label":"BloodPressure"},
        {"index":1.1, "value":4762,  "fill":"#D3BCBF", "label":"Kidney"},
        {"index":1.2, "value":4688 , "fill":"#EDE4E5", "label":"Liver"},
		{"index":1.3, "value":2675 , "fill":"#EDE4E5", "label":"Suicide"},
    ],   
	
	"barCircleGenderAge":[
        {"index":0.3, "value":2426, "fill":"#231F20", "label":"Male"},
        {"index":0.4, "value":1249, "fill":"#494551", "label":"Female"},
		 {"index":0.4,"fill":"#494551","label":""},
        {"index":0.6, "value":48,  "fill":"#574270", "label":"10-19"},
        {"index":0.7, "value":336,  "fill":"#4D2D77", "label":"20-29"},
        {"index":0.8, "value":640,  "fill":"#684E88", "label":"30-39"},
        {"index":0.9, "value":728,  "fill":"#846F9D", "label":"40-49"},
        {"index":1,   "value":690,  "fill":"#A494B7", "label":"50-59"},
        {"index":1.1, "value":553,  "fill":"#CBC3D6", "label":"60-69"},
        {"index":1.2, "value":388,  "fill":"#F1EFF4", "label":"70-79"},
		{"index":1.3, "value":292,  "fill":"#F1EFF4", "label":"80+"}
    ]
};



function drawBarCircleChart(data,target,values,labels){
    var w = 362,
        h = 362,
        size = data[0].value * 1.15,
        radius = 200,
        sectorWidth = .1,
        radScale = 25,
        sectorScale = 1.45,
        target = d3.select(target),
        valueText = d3.select(values),
        labelText = d3.select(labels);


    var arc = d3.svg.arc()
        .innerRadius(function(d,i){return (d.index/sectorScale) * radius + radScale; })
        .outerRadius(function(d,i){return ((d.index/sectorScale) + (sectorWidth/sectorScale)) * radius + radScale; })
        .startAngle(Math.PI)
        .endAngle(function(d) { return Math.PI + (d.value / size) * 2 * Math.PI; });
    
    var path = target.selectAll("path")
        .data(data);

    //TODO: seperate color and index from data object, make it a pain to update object order
    path.enter().append("svg:path")
        .attr("fill",function(d,i){return d.fill})
        .attr("stroke","#D1D3D4")
        .transition()
        .ease("elastic")
        .duration(1000)
        .delay(function(d,i){return i*100})
        .attrTween("d", arcTween);
        
    valueText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:50,
            y:function(d,i){return i*14},       
            "text-anchor":"end"
        })
        .text(function(d,i){return data[i].value});
    
    labelText.selectAll("tspan").data(data).enter()
        .append("tspan")
        .attr({
            x:0,
            y:function(d,i){return i*14}
        })
        .text(function(d,i){return data[i].label});

    function arcTween(b) {
        var i = d3.interpolate({value: 0}, b);
        return function(t) {
            return arc(i(t));
        };
    }
}

// Animation Queue
$(window).scroll(function(){
	if($(window).scrollTop() > $("#Suicide").position().top-100){

setTimeout(function(){drawBarCircleChart(chartData.barCircleDeath,"#circleBar-web-chart","#circleBar-web-values","#circleBar-web-labels")},250);
	
d3.select("#circleBar-web-text")
    .transition()
    .delay(300)
    .duration(250)
    .attr("opacity","1");

d3.select("#circleBar-web-text-2")
    .transition()
    .delay(300)
    .duration(250)
    .attr("opacity","1");


d3.select("#circleBar-web-clipLabels")
    .transition()
    .delay(300)
    .duration(600)
    .attr("height","250");

setTimeout(function(){drawBarCircleChart(chartData.barCircleGenderAge,"#circleBar-second-chart","#circleBar-second-values","#circleBar-second-labels")},300);
	
	d3.select("#circleBar-second-text")
    .transition()
    .delay(600)
    .duration(250)
    .attr("opacity","1");
	
	d3.select("#circleBar-second-text-2")
    .transition()
    .delay(600)
    .duration(250)
    .attr("opacity","1");

d3.select("#circleBar-second-clipLabels")
    .transition()
    .delay(600)
    .duration(600)
    .attr("height","250");

d3.select('#circleBar-web-legend').attr('opacity','1');

d3.select('#circleBar-second-legend').attr('opacity','1');

}else{
	d3.select('path').remove();
    d3.select('#circleBar-second-legend').attr('opacity','0');
	d3.select("#circleBar-second-text-2").attr('opacity','0');
	d3.select("#circleBar-second-text")
    .attr("opacity","0");
	d3.select('#circleBar-web-legend').attr('opacity','0');
	d3.select("#circleBar-web-text-2").attr('opacity','0');
	d3.select("#circleBar-web-text")
    .attr("opacity","0")

}
});


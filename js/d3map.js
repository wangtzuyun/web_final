$(document).ready(function () {
//    var density = {
//        "連江縣": 435.21, //1
//        "金門縣": 847.16, //2
//        "宜蘭縣": 213.89, //3
//        "新竹縣": 376.86, //4
//        "苗栗縣": 311.49, //5
//        "彰化縣": 1201.65, //6
//        "南投縣": 125.10, //7
//        "雲林縣": 545.57, //8
//        "嘉義縣": 275.18, //9
//        "屏東縣": 305.03, //10
//        "臺東縣": 63.75, //11
//        "花蓮縣": 71.96, //12
//        "澎湖縣": 802.83, //13
//        "基隆市": 2809.27, //14
//        "新竹市": 4151.27, //15
//        "嘉義市": 4512.66, //16
//        "臺北市": 9952.60, //17
//        "高雄市": 942.97, //18
//        "新北市": 1932.91, //19
//        "臺中市": 1229.62, //20
//        "臺南市": 860.02, //21
//        "桃園市": 1692.09 //22
//    };
    d3.json("county.json", function (topodata) {
        var features = topojson.feature(topodata, topodata.objects.county).features;
        var color = d3.scale.linear().domain([0, 10000]).range(["#090", "#f00"]);
//        var fisheye = d3.fisheye.circular().radius(100).distortion(2);
        var prj = function (v) {
            var ret = d3.geo.mercator().center([122, 23.25]).scale(6000)(v);
//            ret.x = ret[0];
//            ret.y = ret[1];
////            var ret = fisheye({
////                x: ret[0],
////                y: ret[1]
////            });
            return [ret[0], ret[1]];
        };
        var path = d3.geo.path().projection(prj);
//        for (idx = features.length - 1; idx >= 0; idx--) features[idx].density = density[features[idx].properties.C_Name];
        d3.select("svg").selectAll("path").data(features).enter().append("path");

        function update() {
            d3.select("svg").selectAll("path").attr({
                "d": path,
                "fill": 'rgba(255, 255, 255, 0.5)'
            });
//            d3.select("svg").selectAll("path").attr({
//                "d": path,
//                "fill": function (d) {
//                    return color(d.density);
//                }
//            }).on("mouseover", function (d) {
//                $("#name").text(d.properties.C_Name);
//                $("#density").text(d.density);
//
//            });
        }
        //        d3.select("svg").on("mousemove", function () {
        //            fisheye.focus(d3.mouse(this));
        //            update();
        //        });
        update();
    });


//    var window_width = $(window).width() - $('#moved').width();
//    console.log('window width\t' + $(window).width());
//    console.log('object width\t' + $('#moved').width());
//
//    var document_height = $(document).height() - $(window).height();


    //    var arr = [0,
    //               $('#story1').position().top, $('#story2').position().top, $('#story3').position().top, $('#story4').position().top, $('#story5').position().top, $('#story6').position().top,
    //               $('#story7').position().top, $(document).height()];

    //    console.log(arr);

    //    $('.story').each(function () {
    //        $('svg path').each(function(){
    //            $(this).css({fill: green});
    //        });
    //
    //        $(this).waypoint(function () {
    //            var t = $(this).attr("id");
    //            console.log(t);w
    //            var selected = 'svg path:nth-child(' + t + ')';
    //            $(selected).css({
    //                fill: 'red'
    //            });
    //        }, {
    //            offset: '10%', // middle of the page
    //            triggerOnce: true // just my preference...
    //        });
    //    });
    $('.story').waypoint(function () {
        $('svg path').css({
            fill: 'rgba(255, 255, 255, 0.5)'
        });
        var t = $(this.element).attr("id");
        console.log(t);
        var selected = 'svg path:nth-child(' + t + ')';
        $(selected).css({
            fill: 'red',
//            'transform':'scale(1.8)'
        });
    }, {
        offset: '30%', // middle of the page
        triggerOnce: true // just my preference...
    });



    //    $(window).scroll(function (){
    //        var cpos = $(window).scrollTop();
    //        for (i = 0; i < arr.length-1; i++) {
    //            if(arr[i]< cpos && arr[i+1]> cpos){
    //                var object_position_left = window_width * (arr[i] / document_height);
    //                var selected  = 'svg path:nth-child('+ i + ')'
    //                $(selected).css({fill:'red'});
    //            }
    //        }
    //    });

});

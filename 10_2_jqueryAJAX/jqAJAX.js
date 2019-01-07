$(document).ready(function () {
    $('#tofix2').affix({
        offset: {
            top: 300
        }
    });


    $("#hidetable").click(function () {
        $('#ajax > div').hide();
    });

    $("#ajax .button").click(function () {
        $(this).next("div").show();
    });

    //    assets/uv.json
    $.getJSON("uv.json", function (result) {

        var items = []
        $.each(result, function (i, data) {
            items.push("<tr><td>" + data['SiteName'] +
                "</td><td>" + data['UVI'] +
                "</td><td>" + data['County'] + "</td></tr>");
        });

        $("<table />", {
            'class': "table table-condensed",
            html: items.join("")
        }).appendTo("#jsontest2")

    });

});

var obj = JSON.parse("uv.json");
console.log(obj);

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxtest").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "toload.txt", true);
    xhttp.send();
}


function loadJSON() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var out = "<table class='table table-condensed'><thead><tr><th>SiteName</th><th>UVI</th><th>County</th></tr></thead><tbody>";

            for (var i = 0; i < obj.length / 2; i++) {
                out += "<tr><td>" + obj[i]['SiteName'] +
                    "</td><td>" + obj[i]['UVI'] +
                    "</td><td>" + obj[i]['County'];
            }
            out += "</td></tr></tbody></table>"
            document.getElementById("jsontest").innerHTML = out;
        }
    };
    xhttp.open("GET", "uv.json", true);
    xhttp.send();
}

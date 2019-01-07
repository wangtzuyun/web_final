//Navigation Bar Animation 

$(window).scroll(function () {
	var top = $('.bgimg-2').position().top;
	var height = $('.bgimg-2').height();
	var windowh = $(window).height() * 0.1;
	var bottom = top + height - windowh;
	console.log(bottom);

	if ($(window).scrollTop() > bottom) {
		$("#myNavbar").attr('class', 'w3-navbar w3-card-2 w3-animate-top w3-white');
	} else {
		$("#myNavbar").attr('class', 'w3-navbar');
	}
});

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
};

//Pie Chart


//Bar Chart
CanvasJS.addColorSet("Shades", [ 
                "rgba(18, 227, 227, 0.87)",
                "rgba(235, 163, 211, 0.85)"]);
var options = {
	colorSet: "Shades",
	title: {
		text: "Depression Prevalence",
		fontFamily: "Comfortaa",
		horizontalAlign: "center",
		fontSize: 30
	},
	animationEnabled: true,
	axisY: {

		title: "Depression Rate(%)",
		titleFontFamily: "Comfortaa",
		titleFontSize: 25,
		labelFontFamily: "Comfortaa",
		labelFontSize: 25,
	},
	axisX: {
		labelFontFamily: "Comfortaa",
	},
	data: [
		{
			type: "column",
			dataPoints: [
				{
					y: 12.7,
					label: "Male"
					},
				{
					y: 21.3,
					label: "Female"
					}
        ]
      }
      ]
};


function vis() {
	$("#chartContainer").CanvasJSChart(options)
};



//show div and trigger custom event in callback when div is visible

$(window).scroll(function () {

	if ($(window).scrollTop() > $('#Depression').position().top-10) {
		console.log(vis());
		$("#chartContainer").attr('id', 'chartContainer2');
	} else {
		$("#chartContainer2").attr('id', 'chartContainer')
	}
});
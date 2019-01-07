var mymap = L.map('mapid').setView([25.016298212748158, 121.53311133384706], 20);


L.tileLayer('https://api.mapbox.com/styles/v1/jirlong/civvxx2p4000k2ko4u2lzam6r/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamlybG9uZyIsImEiOiJjaXZzNmxtNnEwNDRyMnRxcnhlMWd2eWIzIn0.colQOdSaL2thS6DSM6WsZg', {
    maxZoom: 20
}).addTo(mymap);

L.marker([25.016298212748158, 121.53311133384706]).addTo(mymap);

L.polygon([
    [25.01967424802243, 121.542877256870],
    [25.01970341422938, 121.542879939079],
    [25.01969612267828, 121.543124020099],
    [25.01917356038931, 121.543107926845],
    [25.01917842144413, 121.542837023735],
    [25.01921974040215, 121.542839705944],
    [25.01922217092865, 121.542778015136],
    [25.01937529400169, 121.542780697345],
    [25.01937043295471, 121.543051600456],
    [25.01942390446113, 121.543051600456],
    [25.01943362655071, 121.543016731739],
    [25.01949682011420, 121.543016731739],
    [25.01949925063524, 121.543051600456],
    [25.01953813896505, 121.543054282665],
    [25.01954786104557, 121.542810201644],
    [25.01967181750488, 121.542804837226],
    [25.01967424802243, 121.542877256870]
]).addTo(mymap);

var myLines = [{
    "type": "LineString",
    "coordinates": [
        [121.53350830078124, 25.016716272548283],
        [121.5343451499939, 25.01733849845198],
        [121.53898000717163, 25.017367665213843]
    ]
}];

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJSON(myLines, {
    style: myStyle
}).addTo(mymap);

var lat, lng;

mymap.addEventListener('mousemove', function (ev) {
    lat = ev.latlng.lat;
    lng = ev.latlng.lng;
});

document.getElementById("mapid").addEventListener("contextmenu", function (event) {
    // Prevent the browser's context menu from appearing
    event.preventDefault();
    alert(lat + ', ' + lng);

    return false; // To disable default popup.
});

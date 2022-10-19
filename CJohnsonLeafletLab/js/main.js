/* Example from Leaflet Quick Start Guide*/
//set variable for map
var map = L.map('map').setView([38, -98], 4);

//add tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copywright"> OpenStreetMap </a>'
}).addTo(map);


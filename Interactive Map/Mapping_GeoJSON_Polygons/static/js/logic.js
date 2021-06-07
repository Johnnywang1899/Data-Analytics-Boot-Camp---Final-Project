// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);


//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
/*L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map); 
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#DC143C'
}).addTo(map);
*/
/*
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
console.log(city);
L.circleMarker(city.location, {
    radius : city.population/100000,
    color : "orange",
    fillColor : "yellow"
}).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population: " + city.population.toLocaleString() + "</h3>").addTo(map);
});

let myLine = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
]
L.polyline(myLine, {
    color : "red"
}).addTo(map);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};
*/
/*
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng){
        console.log(feature);
        console.log(latlng);
        return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2>" + "<hr>" + "<h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
    }
}).addTo(map);
*/
// Accessing the air port GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/Johnnywang1899/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// create the style of the lines
let myStyle = {
    color : "yellow",
    weight : 2
};

//Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data){
    console.log(data);
    //Creating a GeoJSON layer with the retrieved data.
    //data.forEach(function (item){
    L.geoJSON(data, {
        style : myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.AREA_NAME);
        }
    }).addTo(map);
});

/* Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    onEachFeature: function(feature, layer){
        console.log(feature);
        console.log(layer);
        layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + "<hr>" + "<h3>" + "Airport name: " + feature.properties.name + "</h3>");
    }
}).addTo(map);
*/

// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Street Hahaha": streets,
    "Satellite Street": satelliteStreets
};

let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 2,
    layers: [satelliteStreets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

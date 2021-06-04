// Add console.log to check to see if our code is working.
console.log("working");

// Initialize the date
var initial_date = '2021-04-01';

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

function getAreaColor(x){
    // Area W
    if (['001', '002', '003', '004', '005'].includes(x)) {
        return 'SpringGreen' ;
    }
    else if (['006', '007', '008'].includes(x)) {
        return 'AntiqueWhite' ;
    }
    else if (['009', '010', '011', '012', '013', '014', '015'].includes(x)) {
        return 'Aqua' ;
    }
    else if (['016'].includes(x)) {
        return 'Aquamarine' ;
    }
    else if (['017', '018', '019', '020'].includes(x)) {
        return 'Beige' ;
    }
    else if (['021', '022', '023', '024', '025', '026', '027'].includes(x)) {
        return 'Blue' ;
    }
    else if (['028', '029', '030', '031', '113', '115', '112', '108'].includes(x)) {
        return 'BlueViolet' ;
    }
    else if (['111', '110', '109', '091', '092'].includes(x)) {
        return 'BurlyWood' ;
    }
    else if (['114', '089', '088', '090', '093'].includes(x)) {
        return 'CadetBlue' ;
    }
    else if (['087', '086', '085'].includes(x)) {
        return 'Chartreuse' ;
    }

    // Area C
    else if (['083', '080', '079', '076', '084', '081', '078', '082', '077'].includes(x)) {
        return 'Chocolate' ;
    }
    else if (['095', '097', '096', '094'].includes(x)) {
        return 'Coral' ;
    }
    else if (['100', '101', '106', '107'].includes(x)) {
        return 'CornflowerBlue' ;
    }
    else if (['103', '102', '105', '039', '032'].includes(x)) {
        return 'Cornsilk' ;
    }
    else if (['034', '033'].includes(x)) {
        return 'DarkCyan' ;
    }
    else if (['035', '036', '037', '038'].includes(x)) {
        return 'DarkGoldenRod' ;
    }
    else if (['075', '073', '072', '071', '074'].includes(x)) {
        return 'DarkGreen' ;
    }
    else if (['098'].includes(x)) {
        return 'DarkKhaki' ;
    }
    else if (['099', '104'].includes(x)) {
        return 'DarkOrange';
    }
    else if (['056', '055', '044'].includes(x)) {
        return 'DarkOrchid' ;
    }
    else if (['041', '040'].includes(x)) {
        return 'DarkSalmon' ;
    }
    else if (['045', '042', '043'].includes(x)) {
        return 'DarkSeaGreen' ;
    }
    else if (['050', '051'].includes(x)) {
        return 'DarkSlateBlue' ;
    }
    else if (['049', '048', '052', '047', '046', '053'].includes(x)) {
        return 'DarkTurquoise' ;
    }

    // Area E
    else if (['068', '069', '065', '064', '070'].includes(x)) {
        return 'DeepSkyBlue' ;
    }
    else if (['062', '063'].includes(x)) {
        return 'DodgerBlue' ;
    }
    else if (['061', '054', '060', '058', '059', '066', '057', '067'].includes(x)) {
        return 'FloralWhite' ;
    }
    else if (['120', '124', '125', '119', '126'].includes(x)) {
        return 'Gold' ;
    }
    else if (['118', '117', '116'].includes(x)) {
        return 'Green' ;
    }
    else if (['122', '121'].includes(x)) {
        return 'GreenYellow' ;
    }
    else if (['130', '129', '128'].includes(x)) {
        return 'HotPink' ;
    }
    else if (['140', '139', '123', '138'].includes(x)) {
        return 'LavenderBlush' ;
    }
    else if (['135', '137', '127'].includes(x)) {
        return 'LightBlue' ;
    }
    else if (['133', '134', '136'].includes(x)) {
        return 'LightGoldenRodYellow' ;
    }
    else if (['131', '132'].includes(x)) {
        return 'OrangeRed' ;
    }
    
    else{
        return 'red'
    }
};

function getAreaName(x){
    // Area W
    if (['001', '002', '003', '004', '005'].includes(x)) {
        return 'W10' ;
    }
    else if (['006', '007', '008'].includes(x)) {
        return 'W09' ;
    }
    else if (['009', '010', '011', '012', '013', '014', '015'].includes(x)) {
        return 'W08' ;
    }
    else if (['016'].includes(x)) {
        return 'W07' ;
    }
    else if (['017', '018', '019', '020'].includes(x)) {
        return 'W06' ;
    }
    else if (['021', '022', '023', '024', '025', '026', '027'].includes(x)) {
        return 'W05' ;
    }
    else if (['028', '029', '030', '031', '113', '115', '112', '108'].includes(x)) {
        return 'W04' ;
    }
    else if (['111', '110', '109', '091', '092'].includes(x)) {
        return 'W03' ;
    }
    else if (['114', '089', '088', '090', '093'].includes(x)) {
        return 'W02' ;
    }
    else if (['087', '086', '085'].includes(x)) {
        return 'W01' ;
    }

    // Area C
    else if (['083', '080', '079', '076', '084', '081', '078', '082', '077'].includes(x)) {
        return 'C01' ;
    }
    else if (['095', '097', '096', '094'].includes(x)) {
        return 'C02' ;
    }
    else if (['100', '101', '106', '107'].includes(x)) {
        return 'C03' ;
    }
    else if (['103', '102', '105', '039', '032'].includes(x)) {
        return 'C04' ;
    }
    else if (['034', '033'].includes(x)) {
        return 'C06' ;
    }
    else if (['035', '036', '037', '038'].includes(x)) {
        return 'C07' ;
    }
    else if (['075', '073', '072', '071', '074'].includes(x)) {
        return 'C08' ;
    }
    else if (['098'].includes(x)) {
        return 'C09' ;
    }
    else if (['099', '104'].includes(x)) {
        return 'C10';
    }
    else if (['056', '055', '044'].includes(x)) {
        return 'C11' ;
    }
    else if (['041', '040'].includes(x)) {
        return 'C12' ;
    }
    else if (['045', '042', '043'].includes(x)) {
        return 'C13' ;
    }
    else if (['050', '051'].includes(x)) {
        return 'C14' ;
    }
    else if (['049', '048', '052', '047', '046', '053'].includes(x)) {
        return 'C15' ;
    }

    // Area E
    else if (['068', '069', '065', '064', '070'].includes(x)) {
        return 'E01' ;
    }
    else if (['062', '063'].includes(x)) {
        return 'E02' ;
    }
    else if (['061', '054', '060', '058', '059', '066', '057', '067'].includes(x)) {
        return 'E03' ;
    }
    else if (['120', '124', '125', '119', '126'].includes(x)) {
        return 'E04' ;
    }
    else if (['118', '117', '116'].includes(x)) {
        return 'E05' ;
    }
    else if (['122', '121'].includes(x)) {
        return 'E06' ;
    }
    else if (['130', '129', '128'].includes(x)) {
        return 'E07' ;
    }
    else if (['140', '139', '123', '138'].includes(x)) {
        return 'E08' ;
    }
    else if (['135', '137', '127'].includes(x)) {
        return 'E09' ;
    }
    else if (['133', '134', '136'].includes(x)) {
        return 'E10' ;
    }
    else if (['131', '132'].includes(x)) {
        return 'E11' ;
    }
    
    else{
        return 'No Region'
    }

};

function getPriceInfo(region) {
    const area = data.find(item => item.area_code === region);
    if (area) {
        const retval = {
            date: area.date,
            total_num: area.total_num,
            avg_price: area.avg_price,
            med_price: area.med_price
        };
        //console.log(my_selected_time);
        return retval;
    }
}

function getPriceInfo_withdate(region, date_select) {
    const area = data.find(item => item.area_code === region & item.date === date_select);
    if (area) {
        const retval = {
            date: area.date,
            total_num: area.total_num,
            avg_price: area.avg_price,
            med_price: area.med_price
        };
        //console.log(my_selected_time);
        return retval;
    }
    else {
        const retval = {
            date: 'N/A',
            total_num: 'N/A',
            avg_price: 'N/A',
            med_price: 'N/A'
        };
        //console.log(my_selected_time);
        return retval;
    }
}

function typeOptionChange(selected_type){
    dropDownTime = d3.select("#dropDownListTime");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        historicTimes.reverse().forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
    }
    else if (selected_type === "Forecast"){
        forecastTimes.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
    }
}

function timeOptionChange(selected_date){
    var date_condition = selected_date;

    d3.json(torontoHoods).then(function(data){

        L.geoJSON(data, {
            style : function(feature){
                return {
                fillColor: getAreaColor(feature.properties.AREA_S_CD),
                weight: 1,
                opacity: 0,
                color: getAreaColor(feature.properties.AREA_S_CD),
                dashArray: '3',
                fillOpacity: 0
              }
            },
            onEachFeature: function(feature, layer){
                const area_code = getAreaName(feature.properties.AREA_S_CD);
                const area_info = getPriceInfo_withdate(getAreaName(feature.properties.AREA_S_CD), date_condition);
                const html_content = '<b>Region: ' + area_code + "</b><br>Month: " + area_info.date + "<br>Average Price: " + area_info.avg_price +
                "<br>Total Sold: " + area_info.total_num;
                layer.bindPopup(html_content),
                layer.on({
                    mouseover: (event) => (event.target.setStyle({fillOpacity: 1})),
                    mouseout: (event) => (event.target.setStyle({fillOpacity: 0}))
                })
            }
        }).addTo(map);
    });
}

//Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data){

    L.geoJSON(data, {
        style : function(feature){
            return {
            fillColor: getAreaColor(feature.properties.AREA_S_CD),
            weight: 1,
            opacity: 0.7,
            color: getAreaColor(feature.properties.AREA_S_CD),
            dashArray: '3',
            fillOpacity: 0.7
          }
        },
        onEachFeature: function(feature, layer){
            const area_code = getAreaName(feature.properties.AREA_S_CD);
            const area_info = getPriceInfo_withdate(getAreaName(feature.properties.AREA_S_CD), initial_date);
            const html_content = '<b>Region: ' + area_code + "</b><br>Month: " + area_info.date + "<br>Average Price: " + area_info.avg_price +
            "<br>Total Sold: " + area_info.total_num;
            layer.bindPopup(html_content),
            layer.on({
                mouseover: (event) => (event.target.setStyle({fillOpacity: 1})),
                mouseout: (event) => (event.target.setStyle({fillOpacity: 0.7}))
            })
        }
    }).addTo(map);
});

// We create the light view tile layer that will be an option for our map.
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let darkStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Light Street": light,
    "Satellite Street": satelliteStreets,
    "Dark Street": darkStreets
};

let map = L.map("mapid", {
    center: [43.72, -79.4],
    zoom: 11,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Add console.log to check to see if our code is working.
console.log("working");

// Initialize the date
var initial_date = '2021-04-01';

// Initialize the flag for "Historic" or "Forecast"
var historicFlag = 0;
var forecastFlag = 0;
var startTimeSelection = 0;
var endTimeSelection = 0;

let torontoHoods = "https://raw.githubusercontent.com/Johnnywang1899/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

function getAreaColor(x){
    // Area W
    if (['001', '002', '003', '004', '005'].includes(x)) {
        return 'SpringGreen' ;
    }
    else if (['006', '007', '008'].includes(x)) {
        return 'Thistle' ;
    }
    else if (['009', '010', '011', '012', '013', '014', '015'].includes(x)) {
        return 'Aqua' ;
    }
    else if (['016'].includes(x)) {
        return 'Red' ;
    }
    else if (['017', '018', '019', '020'].includes(x)) {
        return 'SandyBrown' ;
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
        return 'SlateBlue' ;
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
        return 'Orchid' ;
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
        return 'MediumPurple' ;
    }
    else if (['135', '137', '127'].includes(x)) {
        return 'LightBlue' ;
    }
    else if (['133', '134', '136'].includes(x)) {
        return 'MediumSpringGreen' ;
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
    const area = data.find(item => item.Area_Code === region);
    if (area) {
        const retval = {
            date: area.Date,
            total_num: area.Total_Condo_Sold_Number,
            avg_price: area.Avg_Price,
            new_unit: area.New_Units_Number_construction_complete
        };
        //console.log(my_selected_time);
        return retval;
    }
}

function getPriceInfo_withdate(region, date_select) {
    const area = data.find(item => item.Area_Code === region & item.Date === date_select);
    if (area) {
        const retval = {
            date: area.Date,
            total_num: area.Total_Condo_Sold_Number,
            avg_price: area.Avg_Price,
            new_unit: area.New_Units_Number_construction_complete
        };
        //console.log(my_selected_time);
        return retval;
    }
    else {
        const retval = {
            date: 'N/A',
            total_num: 'N/A',
            avg_price: 'N/A',
            new_unit: 'N/A'
        };
        //console.log(my_selected_time);
        return retval;
    }
}

function typeOptionChange(selected_type){
    map.closePopup()

    dropDownTime = d3.select("#dropDownListTime");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historicFlag = 1;
        window.forecastFlag = 0;
        historicTimes.reverse().forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
    }
    else if (selected_type === "Forecast"){
        window.historicFlag = 0;
        window.forecastFlag = 1;
        forecastTimes.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
    }
}

function typeOptionChange_diagram(selected_type){
    map.closePopup()

    dropDownTime = d3.select("#dropDownListTime_start");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historicFlag = 1;
        window.forecastFlag = 0;
        historicTimes.reverse().forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
    }
    else if (selected_type === "Forecast"){
        window.historicFlag = 0;
        window.forecastFlag = 1;
        forecastTimes.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
    }
}

function timeOptionChange(selected_date){
    map.closePopup()
    var date_condition = selected_date;

    if (window.historicFlag === 1){
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
                    const html_content = '<b>Region: ' + area_code + "</b><br>Date: " + area_info.date + "<br>Average Price: " + area_info.avg_price +
                    "<br>Total Units Sold: " + area_info.total_num + "<br>New Units (Toronto): " + area_info.new_unit;
                    layer.bindPopup(html_content),
                    layer.on({
                        mouseover: (event) => (event.target.setStyle({fillOpacity: 1})),
                        mouseout: (event) => (event.target.setStyle({fillOpacity: 0}))
                    })
                }
            }).addTo(map);
        });
    }

    else if (window.forecastFlag === 1){
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
                    const html_content = '<b>Region: ' + area_code + "</b><br>Date: " + area_info.date + "<br>Forecast Price: " + area_info.avg_price;
                    layer.bindPopup(html_content),
                    layer.on({
                        mouseover: (event) => (event.target.setStyle({fillOpacity: 1})),
                        mouseout: (event) => (event.target.setStyle({fillOpacity: 0}))
                    })
                }
            }).addTo(map);
        });
    }

    
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
            "<br>Total Units Sold: " + area_info.total_num + "<br>New Units (Toronto): " + area_info.new_unit;;
            layer.bindPopup(html_content),
            layer.on({
                mouseover: (event) => (event.target.setStyle({fillOpacity: 1})),
                mouseout: (event) => (event.target.setStyle({fillOpacity: 0.7})),
                closeOnClick: true,
                autoClose: true
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

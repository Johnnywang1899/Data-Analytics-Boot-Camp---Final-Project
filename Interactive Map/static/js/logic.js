// Add console.log to check to see if our code is working.
console.log("working");

// Initialize the date
var initial_date = '2021-04-01';

// Initialize the flag for "Historic" or "Forecast"
var historicFlag = 0;
var forecastFlag = 0;

// Declaire the time order
var historic_time_ascending = JSON.parse(JSON.stringify(historicTimes));
var historic_time_descending = historicTimes.reverse();

var forecast_time_ascending = JSON.parse(JSON.stringify(forecastTimes));
var forecast_time_descending = forecastTimes.reverse();

// Initialize the start and end date
var start_date_1;
var end_date_1;
var start_date_2;
var end_date_2;
var region_1 = "C01";
var region_2 = "C01";

// Initialize the flag for lines
var line_1_flag = 0;
var line_2_flag = 0;

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
        return retval;
    }
    else {
        const retval = {
            date: 'N/A',
            total_num: 'N/A',
            avg_price: 'N/A',
            new_unit: 'N/A'
        };
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
        window.historic_time_descending.forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
    }
    else if (selected_type === "Forecast"){
        window.historicFlag = 0;
        window.forecastFlag = 1;
        window.forecast_time_ascending.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
    }
}

function typeOptionChange_diagram_1(selected_type){
    map.closePopup()

    dropDownTime = d3.select("#dropDownListTime_start_1");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historic_time_ascending.forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
        timeOptionChange_diagram_start_1('2000-01-01');
    }
    else if (selected_type === "Forecast"){
        window.forecast_time_ascending.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
        timeOptionChange_diagram_start_1('2021-05-01');
    }

    dropDownTime = d3.select("#dropDownListTime_end_1");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historic_time_descending.forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
        timeOptionChange_diagram_end_1('2021-04-01');
    }
    else if (selected_type === "Forecast"){
        window.forecast_time_descending.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
        timeOptionChange_diagram_end_1('2024-05-01');
    }
}

function typeOptionChange_diagram_2(selected_type){
    map.closePopup()

    dropDownTime = d3.select("#dropDownListTime_start_2");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historic_time_ascending.forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
        timeOptionChange_diagram_start_2('2000-01-01');
    }
    else if (selected_type === "Forecast"){
        window.forecast_time_ascending.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
        timeOptionChange_diagram_start_2('2021-05-01');
    }

    dropDownTime = d3.select("#dropDownListTime_end_2");
    dropDownTime.html("");
    if (selected_type === 'Historic'){
        window.historic_time_descending.forEach((historicTime) => {
            dropDownTime.append("option").text(historicTime.Date).property("value", historicTime.Date);
        })
        timeOptionChange_diagram_end_2('2021-04-01');
    }
    else if (selected_type === "Forecast"){
        window.forecast_time_descending.forEach((forecastTime) => {
            dropDownTime.append("option").text(forecastTime.Date).property("value", forecastTime.Date);
        })
        timeOptionChange_diagram_end_2('2024-05-01');
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

function timeOptionChange_diagram_start_1(selected_date_start){
    window.start_date_1 = new Date(selected_date_start + "T00:00:00");
}

function timeOptionChange_diagram_end_1(selected_date_end){
    window.end_date_1 = new Date(selected_date_end + "T00:00:00");
}

function typeOptionChange_region_1(selected_region){
    window.region_1 = selected_region;
}

function timeOptionChange_diagram_start_2(selected_date_start){
    window.start_date_2 = new Date(selected_date_start + "T00:00:00");
}

function timeOptionChange_diagram_end_2(selected_date_end){
    window.end_date_2 = new Date(selected_date_end + "T00:00:00");
}

function typeOptionChange_region_2(selected_region){
    window.region_2 = selected_region;
}

function buttonClicked(){
    window.line_1_flag = 0;
    window.line_2_flag = 0;
    if ((window.end_date_1 > window.start_date_1) || (window.end_date_2 > window.start_date_2)){
        if (window.end_date_1 > window.start_date_1){
            window.line_1_flag = 1;
            var x_date_1 = [];
            var y_price_1 = [];
    
            let start_time_local = new Date(start_date_1);
            let end_time_local = new Date(end_date_1);
    
            var year_start_local = start_time_local.getFullYear();
            var year_end_local = end_time_local.getFullYear();
            var month_start_local = start_time_local.getMonth() + 1; // In JS the month starts from 0
            var month_end_local = end_time_local.getMonth() + 1;
    
            if (month_end_local >= month_start_local){
                var year_diff = year_end_local - year_start_local;
                var month_diff = year_diff * 12;
                var total_month_diff = month_diff + month_end_local - month_start_local;
            }
            else{
                var year_diff = year_end_local - year_start_local - 1;
                var month_diff = year_diff * 12;
                total_month_diff = month_diff + 12 - month_start_local + month_end_local;
            }
    
            for (i = 0; i <= total_month_diff; i++){
                if (i > 0){
                    start_time_local.setMonth(start_time_local.getMonth() + 1);
                }
                if (start_time_local.getMonth() + 1 > 9) {
                    var month_temp = (start_time_local.getMonth() + 1).toString();
                }
                else {
                    var month_temp = "0" + (start_time_local.getMonth() + 1).toString();
                }
                var year_temp = start_time_local.getFullYear().toString();
                var date_temp = year_temp + "-" + month_temp + "-01";
                x_date_1.push(date_temp);
                y_value = getPriceInfo_withdate(window.region_1, date_temp);
                y_price_1.push(y_value.avg_price);
            }
        }

        if (window.end_date_2 > window.start_date_2){
            window.line_2_flag = 1;
            var x_date_2 = [];
            var y_price_2 = [];
    
            let start_time_local = new Date(start_date_2);
            let end_time_local = new Date(end_date_2);
    
            var year_start_local = start_time_local.getFullYear();
            var year_end_local = end_time_local.getFullYear();
            var month_start_local = start_time_local.getMonth() + 1; // In JS the month starts from 0
            var month_end_local = end_time_local.getMonth() + 1;
    
            if (month_end_local >= month_start_local){
                var year_diff = year_end_local - year_start_local;
                var month_diff = year_diff * 12;
                var total_month_diff = month_diff + month_end_local - month_start_local;
            }
            else{
                var year_diff = year_end_local - year_start_local - 1;
                var month_diff = year_diff * 12;
                total_month_diff = month_diff + 12 - month_start_local + month_end_local;
            }
    
            for (i = 0; i <= total_month_diff; i++){
                if (i > 0){
                    start_time_local.setMonth(start_time_local.getMonth() + 1);
                }
                if (start_time_local.getMonth() + 1 > 9) {
                    var month_temp = (start_time_local.getMonth() + 1).toString();
                }
                else {
                    var month_temp = "0" + (start_time_local.getMonth() + 1).toString();
                }
                var year_temp = start_time_local.getFullYear().toString();
                var date_temp = year_temp + "-" + month_temp + "-01";
                x_date_2.push(date_temp);
                y_value = getPriceInfo_withdate(window.region_2, date_temp);
                y_price_2.push(y_value.avg_price);
            }
        }
        
        if (window.line_1_flag){
            if (window.line_2_flag){
                var trace_1 = {
                    x : x_date_1,
                    y : y_price_1,
                    type : 'scatter',
                    name : 'Input 1'
                };
                var trace_2 = {
                    x : x_date_2,
                    y : y_price_2,
                    type : 'scatter',
                    name : 'Input 2'
                }
                Plotly.newPlot("Data_Plot", [trace_1, trace_2], layout);
            }
            else{
                var trace_1 = {
                    x : x_date_1,
                    y : y_price_1,
                    type : 'scatter',
                    name : 'Input 1'
                }
                Plotly.newPlot("Data_Plot", [trace_1], layout);
            }
        }
        else {
            var trace_2 = {
                x : x_date_2,
                y : y_price_2,
                type : 'scatter',
                name : 'Input 2'
            }
            Plotly.newPlot("Data_Plot", [trace_2], layout);
        }
    }

    else{
        alert("Warning: Please select correct start/end date");
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

// initialize the trace for plotting
var date_ini = [];
var region_ini_1 = 'C01';
var region_ini_2 = 'E06';
var price_ini_1 = [];
var price_ini_2 = [];
var y_value_ini;
window.historic_time_ascending.forEach((historicTime) => {
    date_ini.push(historicTime.Date);
})
console.log(date_ini);

date_ini.forEach((each_date_ini) => {
    y_value_ini = getPriceInfo_withdate(region_ini_1, each_date_ini);
    price_ini_1.push(y_value_ini.avg_price);
})
console.log(price_ini_1);

date_ini.forEach((each_date_ini) => {
    y_value_ini = getPriceInfo_withdate(region_ini_2, each_date_ini);
    price_ini_2.push(y_value_ini.avg_price);
})
console.log(price_ini_2);

var trace_1_ini = {
    x : date_ini,
    y : price_ini_1,
    type : 'scatter',
    name : 'Input 1'
};
var trace_2_ini = {
    x : date_ini,
    y : price_ini_2,
    type : 'scatter',
    name : 'Input 2'
}
var layout = {
    title:{
        text: "Condo Monthly Sale Price by Region",
        font:{
            family:'Arial',
            size:18,
            color:'black'
        },
        x : 0.5,
    },
    xaxis:{
        title:{
            text: 'Date',
            font:{
                family: 'Arial',
                size:12,
                color:'black'
            }
        },
    },
    yaxis:{
        title:{
            text: 'Condo Avg. Sale Price',
            font:{
                family: 'Arial',
                size:12,
                color:'black'
            }
        }
    }
};
Plotly.newPlot("Data_Plot", [trace_1_ini, trace_2_ini], layout);

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

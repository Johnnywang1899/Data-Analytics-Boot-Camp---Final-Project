

var his_dash_flag = 0;
var his_dash_date;
var his_last_month_date;
var his_dash_region;
var fore_dash_flag = 0;
var fore_dash_date;
var fore_last_month_date;
var fore_dash_region;
var historic_time_ascending1 = JSON.parse(JSON.stringify(historicTimes));

var forecast_time_ascending1 = JSON.parse(JSON.stringify(forecastTimes));


var his_dash_time;
var fore_dash_time;


//where an area code is input, update the flag and call updatedashfilter to see whether both input box are filled
function fore_area_code_input(){
    window.fore_dash_flag = window.fore_dash_flag + 1;
    fore_dash_region = d3.select("#foreArea_Code").property("value");
    console.log(fore_dash_region);
    console.log(fore_dash_flag);
    fore_updatedashFilters();
}
  
//where an area code is input, update the flag and call updatedashfilter to see whether both input box are filled
function his_area_code_input(){
    window.his_dash_flag = window.his_dash_flag + 1;
    his_dash_region = d3.select("#hisArea_Code").property("value");
    console.log(his_dash_region);
    console.log(his_dash_flag);
    his_updatedashFilters();
}
//where a date is input, update the flag and call updatedashfilter to see whether both input box are filled
function his_date_input(){
    window.his_dash_flag = window.his_dash_flag + 1;
    his_dash_date = d3.select("#hisDate").property("value");
    //convert input string to date
    let his_this_date = new Date(his_dash_date + "T00:00:00");
    var his_last_date = his_this_date;
    //get the date for last month to calculate increase rate
    his_last_date.setMonth(his_last_date.getMonth()-1)
    //conver date back to string
    //case 1: the month has 2 digits, convert to stirng directly
    if(his_last_date.getMonth() +  1 > 9){
        var last_month_MM = (his_last_date.getMonth() +  1).toString();
    }
    //case 2: the month has 1 digit, add a 0 before the converted string
    else{
        var last_month_MM = "0" + (his_last_date.getMonth() +  1).toString();
    }
    var last_month_YY = his_last_date.getFullYear().toString();

    his_last_month_date = last_month_YY + "-" + last_month_MM + "-01"
    
    console.log(his_dash_date);
    console.log(his_dash_flag);
    console.log(his_last_month_date);

    his_updatedashFilters();
}
//where a date is input, update the flag and call updatedashfilter to see whether both input box are filled
function fore_date_input(){
    window.fore_dash_flag = window.fore_dash_flag + 1;
    fore_dash_date = d3.select("#foreDate").property("value");
    let fore_this_date = new Date(fore_dash_date + "T00:00:00");
    var fore_last_date = fore_this_date;
    fore_last_date.setMonth(fore_last_date.getMonth()-1)
    if(fore_last_date.getMonth() +  1 > 9){
        var last_month_MM = (fore_last_date.getMonth() +  1).toString();
    }
    else{
        var last_month_MM = "0" + (fore_last_date.getMonth() +  1).toString();
    }
    var last_month_YY = fore_last_date.getFullYear().toString();
    fore_last_month_date = last_month_YY + "-" + last_month_MM + "-01"
    
    console.log(fore_dash_date);
    console.log(fore_dash_flag);
    console.log(fore_last_month_date);

    fore_updatedashFilters();
}


function his_updatedashFilters() {
    //if both date and area code are input, change the display on dashboard
    if (his_dash_flag === 2){
        his_regionOptionChange_Dashboard();
        //change the flag back to 0
        window.his_dash_flag = 0;
        console.log(his_dash_flag);
    }
    else{
        return null;
    }
  }
  
  function fore_updatedashFilters() {
    if (fore_dash_flag === 2){
        fore_regionOptionChange_Dashboard();
        window.fore_dash_flag = 0;
        console.log(fore_dash_flag);
    }
    else{
        return null;
    }
  }
//clear the input of input box
  function clearfore(){
    document.getElementById('foreArea_Code').value = '';
    document.getElementById('foreDate').value = ''
  }
//clear the input of input box
  function clearhis(){
    document.getElementById('hisArea_Code').value = '';
    document.getElementById('hisDate').value = ''
  }

//calculate the increase rate
function getIncreaseRate(region, this_date, last_date) {
    const this_month = data_new.find(item => item.Area_Code === region & item.Date === this_date);
    const last_month = data_new.find(item => item.Area_Code === region & item.Date === last_date);
    if (this_month && last_month) {
        const increase_rate_temp = ((this_month.Avg_Price - last_month.Avg_Price) / last_month.Avg_Price)*100;
        console.log(increase_rate_temp);
        const increase_rate = increase_rate_temp.toFixed(2) + "%";
        return increase_rate;
    }
    else {
        const increase_rate = "N/A";
        return increase_rate;
    } 
}

function getNewListing_withdate(region, input_date) {
    const area = data_new.find(item => item.Area_Code === region & item.Date === input_date
);
    if (area) {
        const NewListing = area.New_Units_Number_construction_complete;
        return NewListing;
    }
    else {
        const NewListing = "N/A"
        return NewListing;
        };
    }

    function dashGetPriceInfo_withdate(region, input_date) {
        const area = data_new.find(item => item.Area_Code === region & item.Date === input_date
    );
        if (area) {
            const average_price = area.Avg_Price;
            return average_price;
        }
        else {
            const average_price = "N/A"
            return average_price;
        }
    }

function his_regionOptionChange_Dashboard(){
    var  avg_price_his = dashGetPriceInfo_withdate(his_dash_region,his_dash_date);
    console.log(avg_price_his);
    var  new_listing_his = getNewListing_withdate(his_dash_region,his_dash_date);
    console.log(new_listing_his);
    var increase_rate_his = getIncreaseRate(his_dash_region, his_dash_date, his_last_month_date);
    console.log(increase_rate_his);
    d3.select("#avgpricehis").text(avg_price_his);
    d3.select("#newlistinghis").text(new_listing_his);
    d3.select("#increaseratehis").text(increase_rate_his);
}



function fore_regionOptionChange_Dashboard(){
    var  avg_price_fore = dashGetPriceInfo_withdate(fore_dash_region,fore_dash_date);
    console.log(avg_price_fore);
    var  new_listing_fore = getNewListing_withdate(fore_dash_region,fore_dash_date);
    console.log(new_listing_fore);
    var increase_rate_fore = getIncreaseRate(fore_dash_region, fore_dash_date, fore_last_month_date);
    console.log(increase_rate_fore);
    d3.select("#avgpricefore").text(avg_price_fore);
    d3.select("#newlistingfore").text(new_listing_fore);
    d3.select("#increaseratefore").text(increase_rate_fore);
}

his_dash_time = d3.select("#hisDate");
historic_time_ascending1.forEach((historicTime) => {
    his_dash_time.append("option").text(historicTime.Date).property("value", historicTime.Date);})
fore_dash_time = d3.select("#foreDate");
forecast_time_ascending1.forEach((forecastTime) => {
    fore_dash_time.append("option").text(forecastTime.Date).property("value", forecastTime.Date);})
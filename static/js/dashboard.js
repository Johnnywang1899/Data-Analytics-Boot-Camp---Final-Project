

var his_dash_flag = 0;
var his_dash_date;
var his_dash_region;
var fore_dash_flag = 0;
var fore_dash_date;
var fore_dash_region;

function fore_area_code_input(){
    window.fore_dash_flag = window.fore_dash_flag + 1;
    fore_dash_region = d3.select("#foreArea_Code").property("value");
    console.log(fore_dash_region);
    console.log(fore_dash_flag);
    fore_updatedashFilters();
}

function fore_date_input(){
    window.fore_dash_flag = window.fore_dash_flag + 1;
    fore_dash_date = d3.select("#foreDate").property("value");
    console.log(fore_dash_date);
    console.log(fore_dash_flag);
    fore_updatedashFilters();
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
  

function his_area_code_input(){
    window.his_dash_flag = window.his_dash_flag + 1;
    his_dash_region = d3.select("#hisArea_Code").property("value");
    console.log(his_dash_region);
    console.log(his_dash_flag);
    his_updatedashFilters();
}

function his_date_input(){
    window.his_dash_flag = window.his_dash_flag + 1;
    his_dash_date = d3.select("#hisDate").property("value");
    console.log(his_dash_date);
    console.log(his_dash_flag);
    his_updatedashFilters();
}
function his_updatedashFilters() {
    if (his_dash_flag === 2){
        his_regionOptionChange_Dashboard();
        window.his_dash_flag = 0;
        console.log(his_dash_flag);
    }
    else{
        return null;
    }
  }
  


function dashGetPriceInfo_withdate(region, date_select) {
    const area = data_new.find(item => item.Area_Code === region & item.Date === date_select);
    if (area) {
        const average_price = area.Avg_Price;
        return average_price;
    }
    else {
        const average_price = "N/A"
        return average_price;
    }
}

function getNewListing_withdate(region, date_select) {
    const area = data_new.find(item => item.Area_Code === region & item.Date === date_select);
    if (area) {
        const NewListing = area.New_Units_Number_construction_complete;
        return NewListing;
    }
    else {
        const NewListing = "N/A"
        return NewListing;
        };
    }

function his_regionOptionChange_Dashboard(){
    var  avg_price_his = dashGetPriceInfo_withdate(his_dash_region,his_dash_date);
    console.log(avg_price_his);
    var  new_listing_his = getNewListing_withdate(his_dash_region,his_dash_date);
    console.log(new_listing_his);
    d3.select("#avgpricehis").text(avg_price_his);
    d3.select("#newlistinghis").text(new_listing_his);
}

function his_regionOptionChange_Dashboard(){
    var  avg_price_his = dashGetPriceInfo_withdate(his_dash_region,his_dash_date);
    console.log(avg_price_his);
    var  new_listing_his = getNewListing_withdate(his_dash_region,his_dash_date);
    console.log(new_listing_his);
    d3.select("#avgpricehis").text(avg_price_his);
    d3.select("#newlistinghis").text(new_listing_his);
}

function fore_regionOptionChange_Dashboard(){
    var  avg_price_fore = dashGetPriceInfo_withdate(fore_dash_region,fore_dash_date);
    console.log(avg_price_fore);
    var  new_listing_fore = getNewListing_withdate(fore_dash_region,fore_dash_date);
    console.log(new_listing_fore);
    d3.select("#avgpricefore").text(avg_price_fore);
    d3.select("#newlistingfore").text(new_listing_fore);
}

function fore_regionOptionChange_Dashboard(){
    var  avg_price_fore = dashGetPriceInfo_withdate(fore_dash_region,fore_dash_date);
    console.log(avg_price_fore);
    var  new_listing_fore = getNewListing_withdate(fore_dash_region,fore_dash_date);
    console.log(new_listing_fore);
    d3.select("#avgpricefore").text(avg_price_fore);
    d3.select("#newlistingfore").text(new_listing_fore);
}


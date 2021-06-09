
var dashfilters = {}

function updatedashFilters() {
    let dashchangedelement = d3.select(this);
    let dashelementvalue = d3.select(this).property("value");
    console.log(elementvalue);
    let dashfilterid = d3.select(this).attr("id");
    console.log(filterid);
    if(dashelementvalue){
        dashfilters[dashfilterid] = dashelementvalue;
    }
    else{
        delete dashfilters[dashfilterid];
    }
    his_regionOptionChange_Dashboard();
  }


function dashGetPriceInfo_withdate(region, date_select) {
    const area = data.find(item => item.Area_Code === region & item.Date === date_select);
    if (area) {
        const average_price = area.Average_Price_Month;
        return average_price;
    }
    else {
        const average_price = "N/A"
        return average_price;
    }
}

function getNewListing_withdate(region, date_select) {
    const area = data.find(item => item.Area_Code === region & item.Date === date_select);
    if (area) {
        const NewListing = area.New_Units_Number_Construction;
        return NewListing;
    }
    else {
        const NewListing = "N/A"
        return NewListing;
        };
    }

function his_regionOptionChange_Dashboard(){
    var his_dash_date;
    var his_dash_region;
    for (var dashfilterid in dashfilters){
        if (filterid === "hisDate"){
          his_dash_date = dashfilters[dashfilterid]
          console.log(his_dash_date);
        }
        if (filterid === "hisArea_Code"){
          his_dash_region = dashfilters[dashfilterid]
          console.log(his_dash_region);
        }}
    var  avg_price_his = dashGetPriceInfo_withdate(his_dash_region,his_dash_date);
    var  new_listing_his = getNewListing_withdate(his_dash_region,his_dash_date);
    d3.select("#avgpricehis").text(avg_price_his);
    d3.select("#newlistinghis").text(new_listing_his);
}

d3.selectAll("input").on("change", updatedashFilters);


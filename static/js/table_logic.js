// from data.js
const all_data = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedelement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementvalue = d3.select(this).property("value");
    console.log(elementvalue);
    // 4c. Save the id of the filter that was changed as a variable.
    let filterid = d3.select(this).attr("id");
    console.log(filterid);

    // 5. If a filter value was entered then add that filterId and value
    if(elementvalue){
        filters[filterid] = elementvalue;
    }
    // to the filters list. Otherwise, clear that filter from the filters object.
    else{
        delete filters[filterid];
    }
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
function filterTable() {
  
    // 8. Set the filtered data to the all_data.
    let filteredData = all_data;
    console.log(filteredData);
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (var filterid in filters){
        if (filterid === "Date"){
          filteredData = filteredData.filter(row => row.Date === filters[filterid]);
        }
        if (filterid === "Area_Code"){
            filteredData = filteredData.filter(row => row.Area_Code === filters[filterid]);
        }
        if (filterid === "Average_Price_Month"){
            filteredData = filteredData.filter(row => row.Avg_Price <= filters[filterid]);
        }
        if (filterid === "Month"){
            filteredData = filteredData.filter(row => row.Month.toString() === filters[filterid]);
        }
    }
    
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }


  
  // 2. Attach an event to listen for changes to each filter
  d3.select("#tableinput").selectAll("input").on("change", updateFilters);
  

  // Build the table when the page loads
  var current_data = all_data;
  current_data = current_data.filter(row => row.Date === "2021-04-01");
  buildTable(current_data);

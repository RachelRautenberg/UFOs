// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
   // clear out existing data
    tbody.html("");

    // loop through each object in the data, append a row and cells
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // loop through each fied in the dataRow and add value to table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
         );

    });
}

function handleClick() {
    // grab the datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and filter with that date
    // filter
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // rebuild table using filteredData, use default if no date entered
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);


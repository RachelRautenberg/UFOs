// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

// simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
};

// practice arrow.fat arrows
addition = (a, b) => a+b;

function doubleAddition(c, d) {
    var total = addition(c, d) *2;
    return total;
}

doubleAddition = (c, d) => addition(c, d) * 2;

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
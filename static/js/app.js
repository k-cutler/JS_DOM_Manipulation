// from data.js
var tableData = data;

// *** DATA INTO THE WEB PAGE ***
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through "data" and console.log each UFO sighting object
function buildTable(tableData) {

    // Reset the table values with input of data
     tbody.html("");

    tableData.forEach(function(ufoSighting){
    // console.log(ufoSighting);

        // Use d3 to append one table row `tr` for each UFO sighting report object
        // Don't worry about adding cells or text yet, just try appending the `tr` elements.
        var row = tbody.append("tr");

        // Use `Object.entries` to console.log each weather report value
        Object.entries(ufoSighting).forEach(function([key, value]){
            // console.log(key,value);
            // Append a cell to the row for each value in the UFO sighting report object
            var cell = row.append("td");
            // Use d3 to update each cell's text with UFO sighting report values
            cell.text(value);
        });
    });
};

buildTable(tableData);

// *** FORM FILTERING ***
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    buildTable(filteredData);

    // clear the input data
    d3.select("#datetime").node().value = "";
});

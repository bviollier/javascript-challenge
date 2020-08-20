// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function table(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr")
        Object.values(dataRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value)
        });
    })
}

function click() {
    d3.event.preventDefault();
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    table(filterData)
}

d3.selectAll("#filter-btn").on("click", click);

table(tableData);
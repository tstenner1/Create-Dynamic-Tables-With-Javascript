// from data.js
let tableData = data;
console.log(tableData);

let tbody = d3.select("tbody");
console.log(data);

data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    let row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);
        let cell = tbody.append("td");
        cell.text(value);
    });
});

let button = d3.select("#filter-btn");

button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

let inputElement = d3.select("#datetime"); 
let inputValue = inputElement.property("value");

let filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    let row=tbody.append("tr");
    Object.entries(dateData).forEach(function([key,value]){
    let cell=tbody.append("td");
    cell.text(value);
        });
    });
});

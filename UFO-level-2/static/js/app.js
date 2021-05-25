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
    let cityInput=d3.select("#city").property("value");
    let stateInput=d3.select("#state").property("value");
    let countryInput=d3.select("#country").property("value");
    let shapeInput=d3.select("#shape").property("value");
    console.log(cityInput);

    let filterData=tableData;
    if (inputValue){
        filterData = filterData.filter(row => row.datetime === inputValue); 
    }
    if (cityInput){
        filterData = filterData.filter(row => row.city === cityInput);       
    }
    if (stateInput){
        filterData = filterData.filter(row => row.state === stateInput);       
    }
    if (countryInput){
        filterData = filterData.filter(row => row.country === countryInput);       
    }
    if (shapeInput){
        filterData = filterData.filter(row => row.shape === shapeInput);       
    }
    filterData.forEach(function(dateData){
        let row=tbody.append("tr");
        Object.entries(dateData).forEach(function([key,value]){
        let cell=tbody.append("td");
        cell.text(value);
            });
        });
    });

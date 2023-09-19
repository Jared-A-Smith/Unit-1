// initialize cities function 
function initialize(){
	cities();
	// addEvents();
}

// function to create cities table which will include city names & population
function cities(){
// City array which contains objects with city and population info
var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// ------CREATE TABLE --------------------------------------------------------------------------------
// Create table with data identifying city names and population
var table = document.createElement("table");

//create a header row
var headerRow = document.createElement("tr");

//add the row to the table
table.appendChild(headerRow);

//add the "City" and "Population" columns to the header row
headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

// LOOP THROUGH cityPop ARRAY ADDING DATA TO TABLE----------------------------------------------------
for(var i = 0; i < cityPop.length; i++){
	//assign longer html strings to a variable
	var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
	//add the row's html string to the table
	table.insertAdjacentHTML('beforeend',rowHtml);
	document.querySelector("#mydiv").appendChild(table);
};
addColumns(cityPop);
};

// LOOP TO CREATE NEW COLUMN FOR City Size-------------------------------------------------------------
console.log('Before forEach Loop');
function addColumns(cityPop){
    var rows = document.querySelectorAll("tr");
    document.querySelectorAll("tr").forEach(function(row, i){

		if (i == 0){
			
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
			// table.appendChild(row);
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			// var rowHtml = '<tr><td>' + citySize + '</td></tr>';
			console.log(citySize);
			row.insertAdjacentHTML("beforeend",'<td>' + citySize + '</td>');
			// document.querySelector("#mydiv".appendChild(table));
    	};
		addEvents();
    });
	// document.querySelector("#mydiv").appendChild(row);
};
console.log("After forEach Loop");

console.log("Before Event")
function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		var color;
		var color = "rgb(";
		
		// var color = "rgb(" + random + "," + random + "," + random + ")";
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
				}
    		};
		console.log(color);
		document.querySelector("table").style.color = color;
		});
		// console.log(color);
		// document.querySelector("table").style.color = color;
	console.log("After Event")

		// document.querySelector("table").color = color;;
    
	console.log("before click me")
	function clickme(){

		alert('Hey, you clicked me!');
		document.querySelector("table").addEventListener("click", clickme);
	};
	console.log("after click me")
	// table.addEventListener("click", clickme);
};

	// document.querySelector("table").addEventListener("click", clickme);

document.addEventListener('DOMContentLoaded', initialize);
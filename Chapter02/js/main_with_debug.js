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
	//create variable which is selecting all table row elements
    var rows = document.querySelectorAll("tr");
    document.querySelectorAll("tr").forEach(function(row, i){
		//if row == 0 create header row with City Size label
		if (i == 0){
			
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
		// if row does not == 0, run else, if, and else if statements to assign city size
    	} else {
			//create citySize variabe to be populated by for each loop and to be used in insertAdjacentHTML
    		var citySize;
			//if cityPop is less than 100000 assign "small"
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			//if cityPop is less than 500000 assign "medium"
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			//if cityPop is greater than 500000 assign "large"
    		} else {
    			citySize = 'Large';
    		};
			//console.log used check work
			console.log(citySize);
			//insert "row" result into the table beneath citySize header
			row.insertAdjacentHTML("beforeend",'<td>' + citySize + '</td>');
    	};
		addEvents();
    });
};
//console.log used to check work
console.log("After forEach Loop");
//console.log used to check work
console.log("Before Event")
// Create addEvents function listening for mousover action 
function addEvents(){
	//Select table element and add mouseover event listener with function to hange color as you mouse over the table.
	document.querySelector("table").addEventListener("mouseover", function(){
		//craete color variable
		var color;
		//assign default rgb value to color variable
		var color = "rgb(";
		
		//loop through color variable assigning random colors to the table element
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
				}
    		};
		//console.log used to check work
		console.log(color);
		//apply style to table
		document.querySelector("table").style.color = color;
		//create click me event with an alert notifying user that they clicked feature
		document.querySelector("table").addEventListener("click", function(){
			alert('Hey, you clicked me!');
		})
		});
	//console.log to check work
	console.log("after click me")
};

document.addEventListener('DOMContentLoaded', initialize);
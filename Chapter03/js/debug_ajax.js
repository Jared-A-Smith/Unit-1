//create function used to fetch geojson data and return file as json. This function also displays the json string to screen.
function jsAjax(){

    //fetch MegaCities geojson file 
    fetch('data/MegaCities.geojson')
        //convert file to json format
        .then(function(response){
            //return json file to function to be used in callback
            return response.json();
        }) 
        //call callback function
        .then(callback)
};
//callback function utilizing previously converted json which was returned during the initial function during fetch
function callback(response){
    //Create myData variable to assign json data. This variable is later used to create string for display
    myData = response; // NEW
    //select "mydiv" element from HTML and insert MegaCities Json as a string. This allows the data to be displayed to the screen
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br> GeoJSON data:<br>' + JSON.stringify(myData));    
}

document.addEventListener('DOMContentLoaded',jsAjax)

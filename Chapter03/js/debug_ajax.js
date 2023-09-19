function jsAjax(){
    //define a variable to hold the data
    // var myData;

    //basic fetch
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) 
        
        .then(callback)
        // .then(function(response){
        //     myData = response;

        //     //check the data
        //     console.log(myData)
        // }) 

    //check the data
    // console.log(myData)
};
function callback(response){
    // var myData = response;
    myData = response; // NEW
    // myDataString = JSON.stringify(myData);
    // console.log(response) // NEW
    // console.log(JSON.stringify(myData))
    // console.log(myDataString);
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br> GeoJSON data:<br>' + JSON.stringify(myData));
    // document.querySelector("#mydiv").insertAdjacentHTML('beforeend', JSON.stringify(myData));
    
}
// document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(myData));

document.addEventListener('DOMContentLoaded',jsAjax)

// Add all scripts to the JS folder
function jsAjax(){
    var myData;
    //NOTE: STEP 1: Create the data request
//NOTE:  var request = new Request('data/MegaCities.geojson'); // <--SIMPLIFIED BELOW--> REQUEST OBJECT 'data/MegaCities.geojson' can be defined in the fectch() method
    fetch('data/MegaCities.geojson')
//NOTE:      .then(conversion) // convert data to usable form  //<<-- SIMPLIFIED BELOW--> BY PROCESSING CONVERSION DIRECTLY TO THE .then()
        .then(function(response){
           return response.json();
        })
/*        .then(function(response){ //<-----Data WILL log to console BECAUSE the variable is being called within the fetch AFTER data is "fetched"
            myData = response; //<-----Data WILL log to console BECAUSE the variable is being called within the fetch AFTER data is "fetched"
            // CHECK THE DATA
            console.log(myData); //<-----Data WILL log to console BECAUSE the variable is being called within the fetch AFTER data is "fetched"
        })*/ //<-----Data WILL log to console BECAUSE the variable is being called within the fetch AFTER data is "fetched"
        .then(callback) //send retrieved data to a callback function
//CHECK THE DATA 
// console.log(myData); //<------- Data WILL log "undefined" to console BECAUSE the variable is called BEFORE the data "fetch" is completed
};

// -------------------------------------------------------------------------------------------
    //NOTE: STEP 2: Define Fetch parameter
/*      var init = { //(NOTE)=///////<---SIMPLIFICATION IN STEP 1 ABOVE ELIMINATES THE NEED TO DEFINE INIT VARIABLE SINCE GET IS THE DEFAULT
            method: 'GET' //(NOTE)=///////// ^^^<---SIMPLIFICATION IN STEP 1 ABOVE ELIMINATES THE NEED TO DEFINE INIT VARIABLE SINCE GET IS THE DEFAULT
        }*/ //(NOTE)=////////^<---SIMPLIFICATION IN STEP 1 ABOVE ELIMINATES THE NEED TO DEFINE INIT VARIABLE SINCE GET IS THE DEFAULT

// -------------------------------------------------------------------------------------------
    //NOTE: STEP 3: Use Fetch to retrieve the data
/*      fetch(request,init) //(NOTE)=///////<---SIMPLIFICATION IN STEP 1 FETCHES DIRECTLY AND ELIMIATES THE NEED FOR SEPARATE FETCH AN SETP 4 & 5 IN THIS SEGMENT OF CODE
            .then(conversion) //(NOTE)=//STEP 4: Convert data to a usable form
            .then(callback)*/ //(NOTE)=// STEP 5: Send retrieved data to a callback function
// }; <<---- PREVIOUS CLOSING BRACKET FOR jsAjax FUNCTION

//NOTE: DEFINE CONVERSION CALLBACK FUNCTION ///////////<---SIMPLIFICATION IN STEP 1, USES ANYNOMOUS FUNCTION THE THE .THEN() TO CONVERT DATA TO USABLE FORM
/*  function conversion(response){ //(NOTE):///////////<---SIMPLIFICATION IN STEP 1, USES ANYNOMOUS FUNCTION THE THE .THEN() TO CONVERT DATA TO USABLE FORM
    // convert data to usable form (NOTE):///////////<---SIMPLIFICATION IN STEP 1, USES ANYNOMOUS FUNCTION THE THE .THEN() TO CONVERT DATA TO USABLE FORM
        return response.json();  (NOTE):///////////<---SIMPLIFICATION IN STEP 1, USES ANYNOMOUS FUNCTION THE THE .THEN() TO CONVERT DATA TO USABLE FORM
    }*/ //(NOTE):///////////<---SIMPLIFICATION IN STEP 1, USES ANYNOMOUS FUNCTION THE THE .THEN() TO CONVERT DATA TO USABLE FORM

//NOTE:define callback function
function callback(response){
    // tasks usinig the data GO HERE
    /*console.log(JSON.stringify(response));*/ // (NOTE) = // converts MegaCities.geojson object to a string
    console.log(response);
}

window.onload = jsAjax();
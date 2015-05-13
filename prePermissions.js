
function printUserAgent () {
    console.log(navigator.userAgent);
}



function getGeoLocation( callback, alertMessage ) {
// This function first checks the user's browser vendor. If using Chrome, will instruct user to manage their own location settings
// in order to share their location; if using any other browser vendor, will trigger an alert warning the user that they are about
// to be asked to share their location.
//
// This function returns nothing.
//
// callback - function to be called when the user location is available
// alertMessage - optional string that can be customized based on what you want to say in the pre-permissions dialogue box, e.g.
//    "You are about to be asked to share your location." 

    if ( alertMessage === undefined) {
        alertMessage = "You are about to be asked to share your location."
    }
    if (navigator.userAgent.indexOf('Chrome') !== -1 ) {
        // User is using Chrome
        alert( alertMessage + "  Click on the icon to the right of the URL and enable location services."); // Change alert message to be clearer to user; may need to check the way Chrome behaves on different platforms
    } else {
        alert( alertMessage ); 
        
    }
    navigator.geolocation.getCurrentPosition( callback );
}


        
        

        
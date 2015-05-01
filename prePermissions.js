
function printUserAgent () {
    console.log(navigator.userAgent);
}


function getGeoLocation() {
    if (navigator.userAgent.indexOf('Chrome') !== -1 ) {
        // User is using Chrome
        alert("Click on the icon to the right of the URL and enable location services."); // Change alert message to be clearer to user; may need to check the way Chrome behaves on different platforms
    } else {
        alert("You are about to be asked to share your location.");
        navigator.geolocation.getCurrentPosition( function() {} );
    }
}

        
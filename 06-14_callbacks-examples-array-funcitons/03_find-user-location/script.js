
function get_user_location() {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("latitude: " + position.coords.latitude);
        console.log("latitude: " + position.coords.longitude);
        console.log(position.coords.latitude + "," + position.coords.longitude);
    });
}

async function display_user_location() {
    const user_position = document.getElementById("user_position");

    try {
        const position = await get_user_location();
        user_position.innerHTML = `${position.coords.latitude}, ${position.coords.longitude}`;
    }
    catch (err) {
        alert(err.message);
    }
}

function get_user_location() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        )
    })

}
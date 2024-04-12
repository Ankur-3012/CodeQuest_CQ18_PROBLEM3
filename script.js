// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to check if the user has accepted the cookie
function checkCookie() {
    var userAccepted = getCookie("archivingPlatformCookie");
    if (userAccepted) {
        // Cookie already set, do nothing
        return;
    } else {
        // Cookie not set, prompt user and set cookie
        var accept = confirm("This website uses cookies to improve user experience. Do you accept the use of cookies?");
        if (accept) {
            setCookie("archivingPlatformCookie", "accepted", 30); // Cookie expires in 30 days
        }
    }
}

// Call the function to check for cookie acceptance
checkCookie();

/* JavaScript Interaction */

// Welcome Button

document.getElementById("welcomeBtn").addEventListener("click", function() {

    document.getElementById("welcomeMessage").textContent =
        "Welcome to WebNova! We are happy to have you here.";

});


// Contact Button

document.getElementById("contactBtn").addEventListener("click", function() {

    document.getElementById("contactMessage").textContent =
        "Thank you for your interest! Contact us at info@webnova.com.";

});



/* jQuery Interaction */

// Show and Hide Extra Information

$(document).ready(function() {

    $("#toggleBtn").click(function() {

        $("#extraInfo").slideToggle(500);

        if ($("#toggleBtn").text() === "Show More Information") {

            $("#toggleBtn").text("Hide Information");

        } else {

            $("#toggleBtn").text("Show More Information");

        }

    });

});

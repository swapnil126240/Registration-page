const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    if (!name || !email) {

        alert("Please enter your name and email.");

        return;

    }

    // Create a unique registration ID

    const registrationId =

        "REG-" + Math.random().toString(36).substring(2, 10).toUpperCase();

    // Save registration on this browser

    localStorage.setItem("registered", "true");

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);

    localStorage.setItem("registrationId", registrationId);

    // Go to the game

    window.location.href = "game.html";

});

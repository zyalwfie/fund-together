document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const showPassword = document.getElementById("show-password");
    const hidePassword = document.getElementById("hide-password");

    showPassword.addEventListener("click", function () {
        passwordInput.type = "text";
        showPassword.classList.add("hidden");
        hidePassword.classList.remove("hidden");
    });

    hidePassword.addEventListener("click", function () {
        passwordInput.type = "password";
        hidePassword.classList.add("hidden");
        showPassword.classList.remove("hidden");
    });
});

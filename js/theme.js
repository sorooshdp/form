document.addEventListener("DOMContentLoaded", ()=> {
    const themeButton = document.getElementById("theme_button");
    const themeIcon = document.querySelector("i");
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");

        const isDark = document.body.classList.contains("dark-theme");
        themeIcon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
})
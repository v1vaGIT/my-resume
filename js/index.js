const changeThemeButton = document.querySelector('.changeThemeButton');
changeThemeButton.addEventListener('click', function() {
    if (document.body.hasAttribute('lightTheme')) {
        document.body.removeAttribute('lightTheme')
    } else {
        document.body.setAttribute('lightTheme', '')
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem(".changeThemeButton");

    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll(".changeThemeButton")) {
        optionElement.selected = savedTheme === optionElement.value;
    }

    document.querySelector(".changeThemeButton").addEventListener("change", function () {
        localStorage.setItem(".changeThemeButton", this.value);
        applyTheme(this.value);
    });
});
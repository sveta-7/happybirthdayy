const enterImage = document.getElementById("enter-image");
const enterScreen = document.getElementById("enter");
const desktop = document.getElementById("desktop");

enterImage.addEventListener("click", function () {
    enterScreen.classList.add("hidden");
    desktop.classList.remove("hidden");
});

function openWindow(windowID) {
    const windowElement = document.getElementById(windowID);

    if (windowElement) {
        windowElement.style.display = "block";
        windowElement.style.zIndex = "101";
    }
}

function closeWindow(windowID) {
    const windowElement = document.getElementById(windowID);

    if (windowElement) {
        windowElement.style.display = "none";
    }
}

const windows = document.querySelectorAll(".window");

windows.forEach(function (windowElement) {
    windowElement.addEventListener("mousedown", function () {
        windows.forEach(function (otherWindow) {
            otherWindow.style.zIndex = "100";
        });

        windowElement.style.zIndex = "101";
    });
});

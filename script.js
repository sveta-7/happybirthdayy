const enterImage = document.getElementById("enter-image");
const enterScreen = document.getElementById("enter");
const desktop = document.getElementById("desktop");
const backgroundMusic = document.getElementById("backgroundMusic");


// ENTER SCREEN
enterImage.addEventListener("click", function () {
    enterScreen.classList.add("hidden");
    desktop.classList.remove("hidden");

    // Start background music
    backgroundMusic.play();
});


// OPEN WINDOWS
function openWindow(windowID) {
    const windowElement = document.getElementById(windowID);

    if (windowElement) {
        windowElement.style.display = "block";
        windowElement.style.zIndex = "101";
    }

    // Play carousel video when "For You" opens
    if (windowID === "folder1-window") {
        const carouselVideo = document.getElementById("carouselVideo");

        if (carouselVideo) {
            carouselVideo.currentTime = 0;
            carouselVideo.play();
        }
    }

    // Play cupid video when "For You Too" opens
    if (windowID === "folder7-window") {
        const cupidVideo = document.getElementById("cupidVideo");

        if (cupidVideo) {
            cupidVideo.currentTime = 0;
            cupidVideo.play();
        }
    }
}


function closeWindow(windowID) {
    const windowElement = document.getElementById(windowID);

    if (windowElement) {
        windowElement.style.display = "none";
    }

    // Stop carousel video when "For You" closes
    if (windowID === "folder1-window") {
        const carouselVideo = document.getElementById("carouselVideo");

        if (carouselVideo) {
            carouselVideo.pause();
            carouselVideo.currentTime = 0;
        }
    }

    // Stop cupid video when "For You Too" closes
    if (windowID === "folder7-window") {
        const cupidVideo = document.getElementById("cupidVideo");

        if (cupidVideo) {
            cupidVideo.pause();
            cupidVideo.currentTime = 0;
        }
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


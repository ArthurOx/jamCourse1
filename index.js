contactButton = document.querySelector("#fishVideoButton");
video = document.querySelector("#fishVideo");
image1 = document.querySelector("#floatingFish1");
image2 = document.querySelector("#floatingFish2");
colorsButton = document.querySelector("#changeColorsButton");
container = document.querySelector("#container");
title = document.querySelector("#title");

contactButton.addEventListener("click", function contactClickhandler() {
    if (video.style.display == 'none') {
        contactButton.textContent = '⏩HIDE VIDEO⏪';
        image1.style.display = 'block';
        image2.style.display = 'block';
        video.style.display = 'block';
    } else {
        contactButton.textContent = '⏩OPEN VIDEO⏪';
        image1.style.display = 'none';
        image2.style.display = 'none';
        video.style.display = 'none';
    }
});

colorsButton.addEventListener("click", function colorsClickhandler() {
    const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor();
    container.style.color = randomColor();
    title.style.color = randomColor();
});
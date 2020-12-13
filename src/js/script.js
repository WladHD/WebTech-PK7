window.addEventListener('resize', log());

function log() {
    console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel`); // Ab ES6
}

function getViewportWidth() {
    return window.innerWidth ||
        document.documentElement.clientWidth;
}
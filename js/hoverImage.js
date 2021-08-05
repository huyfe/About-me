function hoverImage(e) {
    const inMaxX = e.target.width;
    const inMaxY = e.target.height;

    const xMapped = (map(e.offsetX, 0, inMaxX, -1, 1));
    const yMapped = (map(e.offsetY, 0, inMaxY, 1, -1));

    e.target.style.transform = "rotate3d(" + yMapped + "," + xMapped + ",0,30deg)";
}

function leaveImage(e) {
    e.target.style.transform = "rotate3d(0,0,0,10deg)";
    console.log("out");
}

// Mapping function
function map(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var image = document.querySelectorAll(".hover-image");
console.log(image);

image.forEach(function (img) {
    img.addEventListener('mousemove', hoverImage);
    img.addEventListener('mouseleave', leaveImage);
})



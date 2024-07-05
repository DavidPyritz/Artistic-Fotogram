let images = ['img/abstract-1867937_1280.jpg', 'img/color-4158152_1280.jpg', 'img/colorful-3256055_1280.jpg', 'img/colors-2004497_1280.jpg', 'img/cubes-3381438_1280.jpg', 'img/drops-3273161_1280.jpg', 'img/hex-675576_1280.jpg', 'img/hexagon-6233333_1280.jpg', 'img/water-7456116_1280.jpg'];

function load() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('imgContainer').innerHTML += `
    <div class="imageColumn">
        <div><img onclick="openImage(${i})" src="${images[i]}"></div>
    </div>
    `;
    }
}

function openImage(i) {
    document.getElementById('image').classList.remove('d-none');
    document.getElementById('background').classList.add('d-none');
    document.getElementById('image').innerHTML = `
    <div><img src="${images[i]}"></div>   
    <div class="buttonStyle">
        <button onclick="backPic(${i})"><i class="fa fa-angle-left" style="font-size:26px"></i></button>
        <button onclick="removePic1()"><i class="fa fa-stop-circle-o" style="font-size:26px"></i></button>
        <button onclick="nextPic(${i})"><i class="fa fa-angle-right" style="font-size:26px"></i></i></button>
    </div>  
    `;
}

function removePic1() {
    document.getElementById('background').classList.remove('d-none');
    document.getElementById('image').classList.add('d-none');
}

function backPic(i) {
    i--
    if (i < 0) {
        i = images.length - 1
    }
    openImage(i);
}

function nextPic(i) {
    i++

    if (i >= images.length) {
        i = 0
    }
    openImage(i);
}
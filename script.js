


// Array of image paths for the gallery
let imgs = [
    "img/a0.jpg",
    "img/a1.jpg",
    "img/a2.jpg",
    "img/a3.jpg",
    "img/a4.jpg",
    "img/a5.jpg",
    "img/a6.jpg",
    "img/a7.jpg",
    "img/a8.jpg",
    "img/a9.jpg",
    "img/a10.jpg",
    "img/a11.jpg"
];

// Array of descriptions corresponding to each image
let imgDescription = [
    "Schnee auf den Spitzen",
    "Winterberge im Morgenlicht",
    "Frost zieht durch Täler",
    "Gipfel glitzern im Schnee",
    "Weiße Decke über allem",
    "Klarer Himmel, Schnee",
    "Bergpfade tief verschneit",
    "Eisige Ruhe überall",
    "Frischer Schnee auf Felsen",
    "Helle Sonne, weiße Berge",
    "Schneewolken über Gipfeln",
    "Stille Winterlandschaft zieht",
];


let currentIndex = 0;

// Function to render all images in the gallery
function renderImages() {
    let container = document.getElementById("content");
    for (let index = 0; index < imgs.length; index++) {
        container.innerHTML += getImgs(index);
    }
}


function getImgs(index) {
    return `<img onclick="showImage(${index})" src="${imgs[index]}" alt="${imgDescription[index]}">`;
}


function toggleOverlay(index) {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}

function showImage(index) {
    let overlayImage = document.querySelector("#overlayimg");
    let overlayRef = document.getElementById("overlay");

    overlayImage.src = imgs[index];
    document.querySelector("#imgtitle").innerHTML = imgDescription[index];
    overlayRef.classList.remove("d_none");

    currentIndex = index;
}

function preventBubbling(event) {
    event.stopPropagation();
  }

  function closeDialog() {
    let overlayRef = document.getElementById("overlay");

    overlayRef.classList.add("d_none");
    document.getElementsByClassName('img_overlay').innerHTML = '';
  }


  function updateImg(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    } else if (currentIndex >= imgs.length) {
        currentIndex = 0;
    }

    document.getElementById("overlayimg").src = imgs[currentIndex];
    document.getElementById("imgtitle").innerHTML = imgDescription[currentIndex];
}

function nextImg() {
    updateImg(1);
}

function backImg() {
    updateImg(-1); 
}


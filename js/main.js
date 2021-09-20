
var imgs = document.querySelectorAll(".img-fluid");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");

var index;


// Display Modal & Set Background To The Background Of The Image clicked

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function () {
        fixedBox.classList.replace("d-none", "d-flex");
        index = i;
        var src = this.getAttribute("src");
        smallBox.style.backgroundImage = `url(${src})`
    });
}

// Close Button

closeBtn.addEventListener("click", function () {
    fixedBox.classList.replace("d-flex", "d-none");
});

// Hide Modal While Clicking Outside

fixedBox.addEventListener("click", function (e) {
    e.stopPropagation();
    fixedBox.classList.replace("d-flex", "d-none");
});

// Stop Propagation in Small Box

smallBox.addEventListener("click", function (e) {
    e.stopPropagation();
});


// Next Button click
nextBtn.addEventListener("click", getNextImage);

function getNextImage() {
    index++;
    if (index == imgs.length) {
        index = 0;
    }
    var src = imgs[index].getAttribute("src");
    smallBox.style.backgroundImage = `url(${src})`;
}


// Previous Button Click

prevBtn.addEventListener("click", getPrevImage);


function getPrevImage() {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    var src = imgs[index].getAttribute("src");
    smallBox.style.backgroundImage = `url(${src})`;
}


// Keyboard Clicks

document.onkeydown = checkKey;

function checkKey(e) {
    if (fixedBox.getAttribute("class").includes("d-flex")) {
        if (e.key == 'ArrowLeft' || e.key == 'ArrowDown') {
            getPrevImage();
        } else if (e.key == 'ArrowRight' || e.key == 'ArrowUp') {
            getNextImage();
        } else if (e.key == 'Escape') {
            fixedBox.classList.replace("d-flex", "d-none");
        }
    } 
}




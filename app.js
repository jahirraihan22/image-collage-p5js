let bgImg;
let images = [];
function preload() {
    // Create the image file input element and label
    let bgImgInput = createFileInput(handleFile);
    bgImgInput.attribute('id', 'image-file-input');
    let bgImgLabel = createElement('label', 'Select background:');
    bgImgLabel.attribute('for', 'image-file-input');
    bgImgLabel.style('font-size', '24px');
    bgImgLabel.style('color', '#333');
    bgImgLabel.style('margin-right', '20px');

    // Create the img file input element and label
    let imgInput = createFileInput(uploadFile);
    imgInput.attribute('id', 'img-file-input');
    imgInput.attribute('multiple', '');
    let imgLabel = createElement('label', 'Select images:');
    imgLabel.attribute('for', 'img-file-input');
    imgLabel.style('font-size', '24px');
    imgLabel.style('color', '#333');
    imgLabel.style('margin-right', '20px');

    // Position the file input elements and labels
    bgImgLabel.position(10, 10);
    bgImgInput.position(bgImgLabel.x, 50);
    imgLabel.position(10, 100);
    imgInput.position(imgLabel.x, 150);

    // save image
    saveButton = createButton("Save")
    saveButton.mousePressed(() => {
        saveCanvas('canvas_image', 'png')
    });
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('canvas-container');
}

function draw() {
    // set the image as the background
    if (bgImg) {
        background(bgImg);
    } else {
        background(0);
    }
    let x = 0;
    let y = height / 4;
    let imgSize = width / 2;
    for (let i = 0; i < images.length; i++) {
        image(images[i], x, y, imgSize, imgSize);
        x += imgSize;
        if (x >= width) {
            x = 0;
            y += imgSize;
        }
    }

}

function handleFile(file) {
    if (file.type === 'image') {
        bgImg = loadImage(file.data, () => console.log('Image loaded successfully'));
    } else {
        console.log('Invalid file type');
    }
}
function uploadFile(file) {
    if (file.type === 'image') {
        let img = loadImage(file.data, () => console.log('Image loaded successfully'));
        images.push(img);
    } else {
        console.log('Invalid file type');
    }
}
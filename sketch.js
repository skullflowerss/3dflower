let img
let reImg
let zz = 25
let on = false

function preload() {
    img = loadImage("data/blossom.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    reImg = createGraphics(img.width * 0.4, img.height * 0.4)
    reImg.background(0, 0)
    reImg.image(img, 0, 0, reImg.width, reImg.height)

    noFill()
}

function draw() {


    let xx = reImg.width / 2
    let yy = reImg.height / 2

    let cellX = 50
    let cellY = 90

    let px = map(mouseX, 0, width, -PI, PI)
    let py = map(mouseY, 0, height, -PI, PI)

    translate(0, 0)
    rotateY(px)
    rotateX(py)
    strokeWeight(0.5)
    let csX = reImg.width / cellX
    let csY = reImg.height / cellY

    for (let i = 0; i < cellX; i++) {
        for (let j = 0; j < cellY; j++) {
            let x = (i * csX)
            let y = (j * csY)
            let c = color(reImg.get(int(x), int(y)))

            if (alpha(c) === alpha(0)) {
                let x1 = x - xx
                let y1 = y - yy
                let b = map(brightness(c), 0, 255, 1, 0)
                let z = map(b, 0, 1, -400, 400)
                stroke(c)

                push();
                translate(x1, y1, z + zz)
                box(csX * b, csY * b)
                pop()
            }

        }
    }
}

function mouseWheel(event) {
    zz += event.delta
}

function mousePressed() {
    background(255)
}
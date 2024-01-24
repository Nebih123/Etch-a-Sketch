let container = document.querySelector('#container')
let whiteColor = document.querySelector('#white')
let blackColor = document.querySelector('#black')
let randomColor = document.querySelector('#random')
let rainbowColor = document.querySelector('#rainbow')
let clearButton = document.querySelector('#clear')
container.style.cssText = `width: 289px;display: flex; flex-wrap: wrap`

let chose = false
let color = "black"
let ngjyra;
let div;

for (let i = 0; i < 289; i++) {
    div = document.createElement("div")
    div.classList.add("pixels")
    container.appendChild(div)
}
let pixels = document.querySelectorAll('.pixels')

whiteColor.addEventListener("click", function() {
    color = "white"
    chose = false
})

function blackColorFunction() {
    blackColor.addEventListener("click", function() {
        color = "black"
        chose = false
    })
}

randomColor.addEventListener("click", function() {
    multiColor()
    chose = false
})

rainbowColor.addEventListener("click", function() {
    multiColor()
    chose = true
})

pixels.forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
        if (chose == true) {
            multiColor()
            event.target.style.backgroundColor = `${color}`
        } else if (chose == false) {
            blackColorFunction()
            event.target.style.backgroundColor = `${color}`
        }

    })
})

clearButton.addEventListener("click", function() {
    clearSketch();
});

function multiColor() {
    const num1 = Math.floor(Math.random() * 256);
    const num2 = Math.floor(Math.random() * 256);
    const num3 = Math.floor(Math.random() * 256);
    color = `rgb(${num1},${num2},${num3})`
}

function paint() {
    pixels.forEach(function (element) {
        element.addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = `${color}`
        })
    })
}

function clearSketch() {
    pixels.forEach(function(element) {
        element.style.backgroundColor = 'whitesmoke';
    })
}
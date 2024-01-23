let container = document.querySelector('#container')
let whiteColor = document.querySelector('#white')
let blackColor = document.querySelector('#black')
let randomColor = document.querySelector('#random')
let rainbowColor = document.querySelector('#rainbow')
let clearButton = document.querySelector('#clear')
let chose = false
let color = "black"
container.style.cssText = `width: 289px;display: flex; flex-wrap: wrap`
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
    let num1 = parseInt(Math.random() * 50)
    let num2 = parseInt(Math.random() * 100)
    let num3 = parseInt(Math.random() * 150)
    color = `rgb(${num1},${num2},${num3})`
    chose = false
})

rainbowColor.addEventListener("click", multiColor)

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
    let num1 = parseInt(Math.random() * 100)
    let num2 = parseInt(Math.random() * 100)
    let num3 = parseInt(Math.random() * 100)
    color = `rgb(${num1},${num2},${num3})`
    chose = true
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


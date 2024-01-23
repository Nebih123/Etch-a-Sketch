let container = document.querySelector('#container')
let whiteColor = document.querySelector('#white')
let blackColor = document.querySelector('#black')
let randomColor = document.querySelector('#random')
let rainbowColor = document.querySelector('#rainbow')
let chose = "false"
let color = "black"
container.style.cssText = 'width: 300px;display: flex; flex-wrap: wrap'
let ngjyra;

for (let i = 0; i < 400; i++) {
    let div = document.createElement("div")
    div.classList.add("pixels")
    container.appendChild(div)
}
let pixels = document.querySelectorAll('.pixels')

whiteColor.addEventListener("click", function() {
    color = "white"
    chose = "false"
})

function blackColorFunction() {
    blackColor.addEventListener("click", function() {
        color = "black"
        chose = "false"
    })
}


randomColor.addEventListener("click", function() {
    let num1 = parseInt(Math.random() * 100)
    let num2 = parseInt(Math.random() * 100)
    let num3 = parseInt(Math.random() * 100)
    color = `rgb(${num1},${num2},${num3})`
    chose = "false"
})

rainbowColor.addEventListener("click", multiColor)

pixels.forEach(function (element) {
    element.addEventListener("mouseover", function (event) {
        if (chose == "true") {
            multiColor()
            event.target.style.backgroundColor = `${color}`
        } else if (chose == "false") {
            blackColorFunction()
            event.target.style.backgroundColor = `${color}`
        }

    })
})



function multiColor() {
    let num1 = parseInt(Math.random() * 100)
    let num2 = parseInt(Math.random() * 100)
    let num3 = parseInt(Math.random() * 100)
    color = `rgb(${num1},${num2},${num3})`
    chose = "true"
}
function paint() {
    pixels.forEach(function (element) {
        element.addEventListener("mouseover", function (event) {
            event.target.style.backgroundColor = `${color}`
        })
    })
}

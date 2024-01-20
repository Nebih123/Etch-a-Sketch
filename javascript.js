let container = document.querySelector('#container')
container.style.cssText = 'width: 150px;display: flex; flex-wrap: wrap'
let div = '<button>!'


for (let i = 0; i < 49; i++) {
    container.innerHTML += div
}
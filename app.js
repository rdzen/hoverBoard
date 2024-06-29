const board = document.querySelector('#board')
const colors = ['#FF8C00', '#FF4500', '#DB7093', '#556B2F', '#8FBC8F', '#4682B4', '#ADFF2F',
'#8B4513', '#800000', '#FF0000', '#000080', '#2F4F4F', '#20B2AA', '#FF1493', '#FF7F50']
const SQUARES_NUMBER = 800

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square)) 

        square.addEventListener('mouseleave', () => 
        removeColor(square)) 

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 50px ${color}`
} 

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
} 

function getRandomColor() {
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
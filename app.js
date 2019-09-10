
// let numSquares = 6;
// let colors = genRandomColors(numSquares)
// const squares = document.querySelectorAll('.square')
// const colorDisplay = document.getElementById('color-display')
// let pickedColor = pickColor()
// const messageDisplay = document.getElementById('message');
// const h1 = document.querySelector('h1');
// const reset = document.getElementById('reset')
// const easyBtn = document.getElementById('easy-btn')
// const hardBtn = document.getElementById('hard-btn')


// colorDisplay.textContent = pickedColor;


// easyBtn.addEventListener('click', function () {
//     hardBtn.classList.remove('selected')
//     easyBtn.classList.add('selected')
//     numSquares = 3
//     colors = genRandomColors(numSquares)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i]
//         } else {
//             squares[i].style.display = 'none'
//         }
//     }
// })

// hardBtn.addEventListener('click', function () {
//     easyBtn.classList.remove('selected')
//     hardBtn.classList.add('selected')
//     numSquares = 6
//     colors = genRandomColors(numSquares)
//     pickedColor = pickColor()
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//             squares[i].style.backgroundColor = colors[i]
//             squares[i].style.display = 'block'
//     }
// })

// reset.addEventListener('click', function () {

//     // gen all new color
//     colors = genRandomColors(numSquares)
//     // pick new random color 
//     pickedColor = pickColor();

//     // change color dispolay to match pickcolor
//     colorDisplay.textContent = pickedColor;
//     // change colors of square 
//     for (let i = 0; i < squares.length; i++) {
//         // add initial colors to squares
//         squares[i].style.backgroundColor = colors[i]
        
//     }

//     h1.style.backgroundColor = "steelblue"
//     this.textContent = "New Color"; // same as reset.textContent = "New Color"
//     messageDisplay.textContent = " ";
// })


// for (let i = 0; i < squares.length; i++){
//     // add initial colors to squares
//     squares[i].style.backgroundColor = colors[i]

    

//     // add click listerner to squares 
//     squares[i].addEventListener("click", function () {
//         // get color of clicked square
//         let clickedColor = this.style.backgroundColor;

//         // compare color to pickedcolor
//         console.log(`color: ${clickedColor} and ${pickedColor} `)
//         if (clickedColor === pickedColor) {
//             messageDisplay.textContent = "Correct";
//             reset.textContent = "Play Again"
//             changeColor(clickedColor)
//             h1.style.backgroundColor = clickedColor
            
//         } else {
//             this.style.backgroundColor = "#232323"
//             messageDisplay.textContent = "Try Again"

//         }
//     })
// }


// function changeColor(color) {
//     for (let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = color
//     }
// }


// function pickColor() {
//     const randomPick = Math.floor(Math.random() * colors.length )

//     return colors[randomPick]
// }


// function genRandomColors(num) {
//     // make an array
//     const arr=[]
//     // add num random colors to array
//     for (let i = 0; i < num; i++){
//         // get random color and push to array
//         arr.push(randomColor())
//     }
//     // return the array
//     return arr


// }

// function randomColor() {
//     // pick a red from 0 to 255
//     let r = Math.floor(Math.random() * 256);
//     // pick a green from 0 to 255
//     let g = Math.floor(Math.random() * 256);
//     // pick a blue from 0 to 255
//     let b = Math.floor(Math.random() * 256);

//     return "rgb(" + r + ", " + g + ", " + b + ")"

    
// }


// function compare() {
    
// }


// function init() {
    
// }


// ******************refactor code**************//


let numSquares = 9;
let colors = genRandomColors(numSquares)
const squares = document.querySelectorAll('.square')
const colorDisplay = document.getElementById('color-display')
let pickedColor = pickColor()
const messageDisplay = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetBtn = document.getElementById('reset')
const modeBtn = document.querySelectorAll('.mode');

colorDisplay.textContent = pickedColor;

// load dom event

document.addEventListener('DOMContentLoaded', function () {
    modeBtn[2].classList.add('selected')
})

for (let i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener('click', modeEvent)
}

resetBtn.addEventListener('click', function () {
    reset()
    
})


for (let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listerner to squares 
    squares[i].addEventListener("click", squaresEvent)
}


// call back functions 

function reset() {
    colors = genRandomColors(numSquares)
    // pick new random color 
    pickedColor = pickColor();

    // change color dispolay to match pickcolor
    colorDisplay.textContent = pickedColor;

    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = " ";
    // change colors of square 
    for (let i = 0; i < squares.length; i++) {
        // add initial colors to squares
        if (colors[i]) {
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i]
        } else {
            squares[i].style.display = 'none'
        }

    }

    h1.style.backgroundColor = "steelblue"

}


function modeEvent() {
    modeBtn[0].classList.remove('selected')
    modeBtn[1].classList.remove('selected')
    modeBtn[2].classList.remove('selected')
    this.classList.add('selected')
    // this.textContent === "Easy" ? numSquares = 3: numSquares = 6
    if (this.textContent === "Easy") {
        numSquares = 3
    } else if (this.textContent === "Hard") {
        numSquares = 9
    } else {
        numSquares = 6
    }
    reset();
        // how many squares to show
        // pick new colors
        // pick a new pickedcolor
        // update page to reflect changes 
}


function squaresEvent() {
    // get color of clicked square
    let clickedColor = this.style.backgroundColor;

    // compare color to pickedcolor
    // console.log(`color: ${clickedColor} and ${pickedColor} `)
    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "You're Correct !!";
        resetBtn.textContent = "Play Again?"
        changeColor(clickedColor)
        h1.style.backgroundColor = clickedColor

    } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
    }
}


function changeColor(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    const randomPick = Math.floor(Math.random() * colors.length)
    return colors[randomPick]
}

function genRandomColors(num) {
    // make an array
    const arr = []
    // add num random colors to array
    for (let i = 0; i < num; i++) {
        // get random color and push to array
        arr.push(randomColor())
    }
    // return the array
    return arr
}

function randomColor() {
    // pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}



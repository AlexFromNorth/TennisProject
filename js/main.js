const count = document.querySelector('.count p')
const ball = document.querySelector('.ball')

let countLeft = 0,
    countRight = 0

function updateCount(){
    count.textContent = countLeft + " : " + countRight
}

updateCount()

// random vector ball
function random(){
   return Math.round(Math.random()) == 0 ? 1 : -1;
}

let up = wrapper.clientHeight / 2 
let upVector = 3 * random()

let left = wrapper.clientWidth / 2
let leftVector = 3 * random()



setInterval(()=>{
    // up/down
    if(up > wrapper.clientHeight - ball.clientHeight || up < 0){
        upVector = -upVector
    }


    // left/right
    if(left > wrapper.clientWidth - ball.clientWidth){
        leftVector = -leftVector
        countLeft++
        updateCount()
    }
    else if(left < 0){
        leftVector = -leftVector
        countRight++
        updateCount()
    }
    

    //left racket collider 
    if(left < leftRacket.offsetLeft && up >= leftUp && up <= leftUp + leftRacket.clientHeight){
        leftVector = -leftVector
    }

    //right racket collider 
    if(left > rightRacket.offsetLeft - ball.clientWidth && up >= rightUp && up <= rightUp + rightRacket.clientHeight){
        leftVector = -leftVector
    }

    up += upVector
    ball.style.top = up + 'px'

    left += leftVector
    ball.style.left = left + 'px'
}, 17)

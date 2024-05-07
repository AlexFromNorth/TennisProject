const wrapper = document.querySelector('.wrapper')

const ball = document.querySelector('.ball')

function random(){
   return Math.round(Math.random()) == 0 ? 1 : -1;
}

let up = wrapper.clientHeight /2 
let upVector = 3 * random()

let left = wrapper.clientWidth / 2
let leftVector = 3 * random()

setInterval(()=>{
    // up/down
    if(up > wrapper.clientHeight - ball.clientHeight || up < 0){
        upVector = -upVector
    }
    up += upVector
    ball.style.top = up + 'px'

    // left/right
    if(left > wrapper.clientWidth - ball.clientWidth || left < 0){
        leftVector = -leftVector
    }
    left += leftVector
    ball.style.left = left + 'px'

}, 17)
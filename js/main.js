const wrapper = document.querySelector('.wrapper')

const ball = document.querySelector('.ball')

console.log(wrapper.clientHeight)

let up = 0
let upVector = 3

let left = 0
let leftVector = 3

setInterval(()=>{
    // up
    if(up > wrapper.clientHeight - ball.clientHeight || up < 0){
        upVector = -upVector
    }
    up += upVector
    ball.style.top = up + 'px'

    // left
    if(left > wrapper.clientWidth - ball.clientWidth || left < 0){
        leftVector = -leftVector
    }
    left += leftVector
    ball.style.left = left + 'px'

}, 17)
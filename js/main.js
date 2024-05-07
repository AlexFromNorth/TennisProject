const wrapper = document.querySelector('.wrapper')

const ball = document.querySelector('.ball')

console.log(wrapper.clientHeight)

let up = 0
let upVector = 1

setInterval(()=>{
    if(up > wrapper.clientHeight - ball.clientHeight || up < 0){
        upVector = -upVector
    }
    up += upVector
    ball.style.top = up + 'px'

}, 17)
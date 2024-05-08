const wrapper = document.querySelector('.wrapper')

const leftRacket = document.querySelector('.leftRacket')
const rightRacket = document.querySelector('.rightRacket')

let leftUp = 30
let rightUp = 30

let speedLeftRacket = 10
let speedRightRacket = 10

let leftRacketDirection = 1 
let rightRacketDirection = 1 



leftRacket.style.top = leftUp + 'px'
rightRacket.style.top = rightUp + 'px'


document.addEventListener('keydown',(e)=>{
    //leftRacket
    if(e.code === 'KeyW' && leftUp > 0){
        leftRacketDirection = -1
        leftUp += speedLeftRacket * leftRacketDirection
        leftRacket.style.top = leftUp + 'px'
    } 
    else if(e.code === 'KeyS' && leftUp + leftRacket.clientHeight < wrapper.clientHeight){
        leftRacketDirection = 1
        leftUp += speedLeftRacket * leftRacketDirection 
        leftRacket.style.top = leftUp + 'px'
    }    

    //rightRacket
    if(e.code === 'ArrowUp' && rightUp > 0){
        rightRacketDirection = -1
        rightUp += speedRightRacket * rightRacketDirection
        rightRacket.style.top = rightUp + 'px'
    } 
    else if(e.code === 'ArrowDown' && rightUp + rightRacket.clientHeight < wrapper.clientHeight){
        rightRacketDirection = 1
        rightUp += speedRightRacket * rightRacketDirection
        rightRacket.style.top = rightUp + 'px'
    }   
})
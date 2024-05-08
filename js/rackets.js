const wrapper = document.querySelector('.wrapper')

const leftRacket = document.querySelector('.leftRacket')
const rightRacket = document.querySelector('.rightRacket')

let leftUp = 30
let rightUp = 30

let speedLeft = 10
let speedRight = 10

leftRacket.style.top = leftUp + 'px'
rightRacket.style.top = rightUp + 'px'


document.addEventListener('keydown',(e)=>{
    //leftRacket
    if(e.code === 'KeyW' && leftUp > 0){
        leftUp -= speedLeft
        leftRacket.style.top = leftUp + 'px'
    } 
    else if(e.code === 'KeyS' && leftUp + leftRacket.clientHeight < wrapper.clientHeight){
        leftUp += speedLeft
        leftRacket.style.top = leftUp + 'px'
    }    

    //rightRacket
    if(e.code === 'ArrowUp' && rightUp > 0){
        rightUp -= speedRight
        rightRacket.style.top = rightUp + 'px'
    } 
    else if(e.code === 'ArrowDown' && rightUp + rightRacket.clientHeight < wrapper.clientHeight){
        rightUp += speedRight
        rightRacket.style.top = rightUp + 'px'
    }   
})
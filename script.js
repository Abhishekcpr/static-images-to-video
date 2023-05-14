const slider = document.querySelector('.slider');
const speedSlider = document.querySelector('#speed-slider');
const speedValue = document.querySelector('#speed-value');
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const images = document.querySelector('#images')

let isDown = false;
let startX;
let scrollLeft;
let speed = 5;
var numberOfImages = 65 ;
var index = 0 ;
var play
var timer = 1000


speedSlider.addEventListener('input', () => {
	speed = speedSlider.value;
	speedValue.textContent = speed;
    console.log("speed :" + speed) ;
    clearInterval(play) ;
    timer = 1100 - speed*100 ;
});

 

start.addEventListener('click',()=>{
    
 play =   setInterval(() => {
        index = index % numberOfImages  + 1;
      
       images.src = `images/ezgif-frame-0${index}.jpg` 
       console.log(images.src)
    
       console.log(timer)
    }, timer);
})

stop.addEventListener('click',()=>{
    clearInterval(play) ;
    
})

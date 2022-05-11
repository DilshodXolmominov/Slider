const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const img = document.querySelectorAll('#imgs img');

let index = 0;

function changeImages(){
    if(index > img.length - 1){
        index = 0;
    }else if(index < 0){
        index = img.length - 1; 
    }
    imgs.style.transform = `translateX(${-index * 500}px)`;
}
rightBtn.addEventListener('click', function change(){
    index++;
    resetInterval()
    changeImages()
} );
leftBtn.addEventListener('click', function change(){
    index--;
    resetInterval()
    changeImages()
} );

let interval = setInterval(run, 2000)

function run(){
    index++;  

    changeImages()
}
function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000)
}
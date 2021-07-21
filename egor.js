$(document).ready(function(){
let circle = $('.circle'), 
    currentTime = Date.now(),
    top = '',
    left = '',
    r = 200, 
    alpha = 2 * 3.14;
 function drawP(t){
    left = 10 + r * Math.cos(alpha*t)
    top = 10 + r* Math.sin(-alpha*t)
    circle.css({'left': left, 'top': top})
}
let startTime = setInterval(function(){
    let t = Date.now() - currentTime
    drawP(t)
},5)
})


// $('h1').on('click', setInterval(()=>{
//     x+=1
//     y+=1
//     $('h1').css('left', x + 'px')
//     $('h1').css('top', y + 'px')

// }, 100))

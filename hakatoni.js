

let buttons = document.querySelectorAll( '.bt')
let pasuxebi = document.querySelectorAll('.pasuxebi')
let pasuxeb = document.querySelectorAll('.pasuxeb')
let firstQuestion = document.querySelector('.firstQuestion')
let secondQuestion = document.querySelector('.secondQuestion')
let thirdQuestion = document.querySelector('.thirdQuestion')
let fourthQuestion = document.querySelector('.fourthQuestion')
let pasuxe = document.querySelectorAll('.pasuxe')
let fifthQuestion = document.querySelector('.fifthQuestion')
let pasux = document.querySelectorAll('.pasux')
let counter = 0;
let six = document.querySelector('.sixth')
console.log(buttons)

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        firstQuestion.style.display = 'none'
        secondQuestion.style.display = 'block'
    })
    
})


pasuxebi.forEach(btn => {
    btn.addEventListener('click', function(){
        secondQuestion.style.display = 'none'
        thirdQuestion.style.display = 'block'
    })
    
})

pasuxeb.forEach(btn => {
    btn.addEventListener('click', function(){
        thirdQuestion.style.display = 'none'
        fourthQuestion.style.display = 'block'
    })
    
})


pasuxe.forEach(btn => {
    btn.addEventListener('click', function(){
        
        fourthQuestion.style.display = 'none'
        fifthQuestion.style.display = 'block'
        
    })
    
})


buttons[1].addEventListener('click', function(){
    
    counter++


})

pasuxebi[0].addEventListener('click', function(){

    counter++
  



})

pasuxeb[0].addEventListener('click', function(){

    counter++
 



})
pasuxe[2].addEventListener('click', function(){

    counter++




})
pasux[0].addEventListener('click', function(){

    counter++

  
})


pasux.forEach(btn => {
    btn.addEventListener('click', function(){
        fifthQuestion.style.display = 'none'
        six.style.display='block'
        six.innerHTML=`შენ გამოიცანი 5 საკითხიდან ${counter}`
        
    })
    
})


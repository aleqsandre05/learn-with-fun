let buttons = document.querySelectorAll('.first')
let firstQuestion = document.querySelector('.firstQuestion')
let secondQuestion = document.querySelector('.secondQuestion')
let button = document.querySelectorAll('.seconde')
let fourthQuestion = document.querySelector('.fourthQuestion')
let bt = document.querySelectorAll('.third')
let  thirdQuestion= document.querySelector('.thirdQuestion')
let fifthQuestion = document.querySelector('.fifthQuestion')
let but = document.querySelectorAll('.four')
let bit = document.querySelectorAll('.fifve')
let counter = 0;
let six = document.querySelector('.sixth')
buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        firstQuestion.style.display = 'none'
        secondQuestion.style.display = 'block'
    })
})






button.forEach(btn => {
    btn.addEventListener('click', function(e){
        secondQuestion.style.display = 'none'
        thirdQuestion.style.display = 'block'
    })
})


bt.forEach(btn => {
    btn.addEventListener('click', function(){
        
        
        thirdQuestion.style.display = 'none'
        fourthQuestion.style.display = 'block'
        
    })
})

but.forEach(btn => {
    btn.addEventListener('click', function(){
    
        fourthQuestion.style.display = 'none'
        fifthQuestion.style.display = 'block'
    })
})




    buttons[3].addEventListener('click', function(){
    
        counter++


    })

    button[2].addEventListener('click', function(){
    
        counter++
      



    })

    bt[2].addEventListener('click', function(){
    
        counter++
     



    })
    but[2].addEventListener('click', function(){
    
        counter++
    



    })
    bit[0].addEventListener('click', function(){
    
        counter++

      
    })
    bit.forEach(btn => {
        btn.addEventListener('click', function(){
        
            
            fifthQuestion.style.display = 'none'
            six.style.display='block'
            six.innerHTML=`შენ გამოიცანი 5 საკითხიდან ${counter}`
    
     
        })
       
    })
    
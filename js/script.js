//practice one and two done.
var  headings = document.getElementsByTagName('h2'); 
for (const heading of headings){
    heading.style.color = 'lightblue '
}
//working for Backpack section //practice 3
const backpack = document.querySelector('.Backpack');
backpack.style.backgroundColor = 'tomato'

//working for card class to add border radius //practice 4

const cards = document.querySelectorAll('.card');
for (const card of cards){
    card.style.borderRadius = '30px '
}

//function for onclick event pracitce 5

function eventLog(){
    console.log("Clicked Buy now button !!");
}

//working with buy now button 

const buyBtns = document.querySelectorAll('.btn');
    for(const btn of buyBtns){
        btn.addEventListener('click', function(event){
            event.target.parentNode.removeChild(event.target)
        })
    }


// working for input field. 
const input = document.getElementById('mailField');
const send = document.getElementById('send');

input.addEventListener('keyup', function(){
    if(input.value == 'email'){
        send.removeAttribute('disabled');
    }else{
        send.setAttribute('disabled', true)
    }
})

// working with subscribe section 

const subscribe =  document.querySelector('.subscribe');
subscribe.addEventListener('dblclick', function(){
    subscribe.style.backgroundColor = 'purple'
})

//change image when enter mouse 
const images = document.querySelectorAll('img');

for(const img of images){
    const src = img.src;
    img.addEventListener('mouseenter', function(){
       img.src = 'images/click-here.png';
       img.style.cursor = 'pointer'
       console.log("Mouse enter");
    });
    img.addEventListener('mouseout', function(){
        img.src =  src;
        console.log("Mouse out");
    })
}
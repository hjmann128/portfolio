
const bgImg = document.querySelector('.bg-text')
const body = document.getElementsByTagName('body')
const card = document.getElementsByClassName('collapsible');
const less = document.getElementsByClassName('close');
const galleries = document.getElementsByClassName('gallery__img')


//Adding event listners to buttons
for(let i = 0; i < less.length; i++){
    less[i].addEventListener('click', ()=> {
        CloseDisplay(less[i]);
    })}

for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', ()=> {
        ReverseDisplay(card[i]);

    })}

for(let i =0; i< galleries.length; i++) {
    galleries[i].addEventListener('click', ()=> {
        myFunction(galleries[i])
    })
    galleries[i].addEventListener('mouseover', ()=> {
        mouseOn(galleries[i])
    })
    galleries[i].addEventListener('mouseout', ()=> {
        mouseOut(galleries[i])
    })
}





//Closes card boxes
function CloseDisplay(d){
    
    if(d.previousElementSibling.style.display != "none"){
        d.previousElementSibling.style.display = "none"
    }else {
    d.parentNode.style.display = "none"
    d.parentNode.previousElementSibling.style.display = "flex";  
    }
}



//Toggles display
function ReverseDisplay(d) {
    console.log(card.nextElementSibling)
    
    if(d.nextElementSibling.style.display == "none") 
    {   for(let i = 0; i < card.length; i++){
        card[i].nextElementSibling.style.display = "none"
        card[i].style.display = "flex"
    }
        d.nextElementSibling.style = "posistion: static; opacity: 1; transition: opacity 3s linear;"; 

}
    else { d.nextElementSibling.style.display = "none"; }
    d.style.display = "none";
   
}



//Hero text fade as scroll effect on home page


if(document.body.classList == "index"){
document.addEventListener('scroll', () => {
let windowPage = window.scrollY
if(windowPage>=300){
    bgImg.classList.add("fade__out")
    
    
}else {
    bgImg.classList.remove("fade__out")
  
}
})
}


let footerItemOne = document.querySelector('.__social')
let footerItemTwo = document.querySelector('.__follow')
let footerItemThree = document.querySelector('.__email')



function myFunction(imgs) {
        console.log(imgs)
        
        imgs.style = 'transform: scale(2.2); opacity:1; z-index: 10000; border: 5px white solid; border-radius: 10%; padding: 0'
  }

function mouseOn(img){
    img.style = 'transform: scale(1.1); z-index: 10000'
}

function mouseOut(img){
    img.style = 'transform: scale(1.0); opacity: .7; z-index: auto '
}



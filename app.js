
const bgImg = document.querySelector('.bg-text')
const body = document.getElementsByTagName('body')
const card = document.getElementsByClassName('collapsible');
const less = document.getElementsByClassName('close');


//Adding event listners to buttons
for(let i = 0; i < less.length; i++){
    less[i].addEventListener('click', ()=> {
        CloseDisplay(less[i]);
    })}

for(let i = 0; i < card.length; i++){
    card[i].addEventListener('click', ()=> {
        ReverseDisplay(card[i]);

    })}


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
    
    if(d.nextElementSibling.style.display == "none") {d.nextElementSibling.style.display = "block"; }
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
    // Get the expanded image
    console.log(imgs.parentNode.parentNode.parentNode.id)
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    
    expandImg.parentElement.style.display = "block";
  }



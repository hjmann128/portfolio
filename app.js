
const bgImg = document.querySelector('.bg-text')
const body = document.getElementsByTagName('body')


document.addEventListener('scroll', () => {
let windowPage = window.scrollY
if(windowPage>=300){
    bgImg.classList.add("fade__out")
    
    
}else {
    bgImg.classList.remove("fade__out")
  
}
})


let footerItemOne = document.querySelector('.__social')
let footerItemTwo = document.querySelector('.__follow')
let footerItemThree = document.querySelector('.__email')







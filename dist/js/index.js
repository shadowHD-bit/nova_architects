//preloader

setTimeout(() => {
    document.querySelector('.preloader').style.animation = 'fadeInFromNone 3s ease-in-out forwards'
    document.body.style.overflow = 'visible'

}, 2000) 

setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'
}, 5000) //6000


//mobile menu

let mobileButton = document.getElementById('mobile-btn')
let win_mobile = document.querySelector('.mobile_nav')
mobileButton.addEventListener('click', () => {
    if(mobileButton.className == 'far fa-building close'){
        mobileButton.classList.remove('close')
        mobileButton.classList.add('open')
        win_mobile.style.visibility = 'visible'
        document.body.style.overflow = 'hidden'
    }
    else{
        mobileButton.classList.remove('open')
        mobileButton.classList.add('close')
        win_mobile.style.visibility = 'hidden'
        document.body.style.overflow = 'visible'
    }

})
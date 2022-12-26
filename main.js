var ham = document.querySelector('.hamburger');
var naver = document.querySelector('.headm');
var nave = document.querySelector('.m');
var buddy = document.querySelector('body');
var banner = document.querySelector('.banner');
var window = document.documentElement
var preloader = document.getElementById("preloader")

function kaisen(){
    // alert('hey')
    buddy.classList.toggle('hey')
    ham.classList.toggle('showburger');
    nave.classList.toggle('mm');
    naver.classList.toggle('headmm');
    // document.querySelector('.pop').duration = 2000;
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
    toliver.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
}

// function swoosh(){
//     document.querySelector('.pop').volume = 0.1;
//     document.querySelector('.pop').play();
// }

var toliver = document.querySelector('.oliver');
var toliverr = document.querySelector('.oliverr');
var toliverrr = document.querySelector('.oliverrr');
var toliverrrr = document.querySelector('.oliverrrr');

function holiver(){
    toliver.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
    // nave.classList.toggle('mm');
    // ham.classList.toggle('showburger');
    // naver.classList.toggle('headmm');
    // document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverr(){
    toliverr.classList.add('active');
    toliver.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
    // ham.classList.toggle('showburger');
    // naver.classList.toggle('headmm');
    // document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverrr(){
    toliverrr.classList.add('active');
    toliverr.classList.remove('active');
    toliver.classList.remove('active');
    toliverrrr.classList.remove('active');
    // ham.classList.toggle('showburger');
    // naver.classList.toggle('headmm');
    // document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverrrr(){
    toliverrrr.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliver.classList.remove('active');
    // ham.classList.toggle('showburger');
    // naver.classList.toggle('headmm');
}

function submit(){
    document.querySelector('.submit').classList.toggle('submitted');
    document.querySelector('.newsletter').classList.add('shownews');
    document.getElementById('email').value = " ";
}

function closenews(){
    // alert('hey')
    document.querySelector('.newsletter').classList.remove('shownews');
}

// let bull = preloader.style.display = "none"

function hidePreloader() {
    preloader.style.display = "none"
    naver.style.display = "flex"
    banner.style.display = "flex"
    buddy.style.overflowY = "visible"
    
}

window.addEventListener("load", () => {
    setTimeout(
        hidePreloader , 1500
    )
})


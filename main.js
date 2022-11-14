var ham = document.querySelector('.hamburger');
var naver = document.querySelector('.headm');

function kaisen(){
    // alert('hey')
    ham.classList.toggle('showburger');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

var toliver = document.querySelector('.oliver');
var toliverr = document.querySelector('.oliverr');
var toliverrr = document.querySelector('.oliverrr');
var toliverrrr = document.querySelector('.oliverrrr');

function holiver(){
    toliver.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
}

function holiverr(){
    toliverr.classList.add('active');
    toliver.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
}

function holiverrr(){
    toliverrr.classList.add('active');
    toliverr.classList.remove('active');
    toliver.classList.remove('active');
    toliverrrr.classList.remove('active');
}

function holiverrrr(){
    toliverrrr.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliver.classList.remove('active');
}
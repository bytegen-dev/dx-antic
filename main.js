var ham = document.querySelector('.hamburger');
var naver = document.querySelector('.headm');
var nave = document.querySelector('.m');
var buddy = document.querySelector('body');

function kaisen(){
    // alert('hey')
    buddy.classList.toggle('hey')
    ham.classList.toggle('showburger');
    nave.classList.toggle('mm');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
    toliver.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
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
    ham.classList.toggle('showburger');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverr(){
    toliverr.classList.add('active');
    toliver.classList.remove('active');
    toliverrr.classList.remove('active');
    toliverrrr.classList.remove('active');
    ham.classList.toggle('showburger');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverrr(){
    toliverrr.classList.add('active');
    toliverr.classList.remove('active');
    toliver.classList.remove('active');
    toliverrrr.classList.remove('active');
    ham.classList.toggle('showburger');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}

function holiverrrr(){
    toliverrrr.classList.add('active');
    toliverr.classList.remove('active');
    toliverrr.classList.remove('active');
    toliver.classList.remove('active');
    ham.classList.toggle('showburger');
    naver.classList.toggle('headmm');
    document.querySelector('.mobile-link-holder').classList.toggle('show-mobile-link-holder');
}
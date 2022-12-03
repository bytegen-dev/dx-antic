// window.addEventListener('scroll', () => {
//     // console.log('Scrolled!');
//     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled = window.scrollY;

//     console.log(scrollable)

//     if (Math.ceil(scrolled) === scrollable){
//         alert('You\ve reached the bottom!')
//     }
// });
var skept = document.getElementById('skept');


window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight -window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable){
        alert('you\'ve reached the bottom')
    };
});


// window.addEventListener('touchstart', () => {
//     skept.style.scale = '1.15';
// });

// window.addEventListener('touchend', () => {
//     skept.style.scale = '1';
// });

// skept.addEventListener('wheel', () => {
//     skept.style.scale = '1';
// });


function kaisen() {
    const scrollable = document.documentElement.scrollHeight -window.innerHeight;
    const scrolled = window.scrollY;
    const kray = document.getElementById('skept').offsetHeight;
    skept.style.border = ' 2px solid red';
    // skept.style.transition = '2s ease';
    setTimeout(function() {
        skept.innerHTML = "Hello brother man";
    }, 1000);
    setTimeout(function() {
        skept.innerHTML = "Hello what is your Name?";
    }, 4000);
    skept.offsetWidth;
    
    setTimeout(function() {
        // alert("height is " + kray + "px width is " + krayy + "px")
        if (Math.ceil(scrolled) === scrollable){
            alert('you\'ve reached the bottom!!!')
        };
    }, 8000);
    
    setTimeout(function() {
        skept.innerHTML = "Click Me";
        skept.style.border = ' 2px solid black';
    }, 10000);
}




const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.5;
//set opacity of first image
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //Chnage current image to src of click image
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fade-in');

    //Remove fadi-in class after 0.5s
    setTimeout(() => current.classList.remove('fade-in'), 500);

    //change opacity to opacity variable

    e.target.style.opacity = opacity;
}
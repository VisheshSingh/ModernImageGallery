const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.5;
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e){
    //Reset opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //Chnage current image to src of click image
    current.src = e.target.src;
    //change opacity to opacity variable
    e.target.style.opacity = opacity;
}
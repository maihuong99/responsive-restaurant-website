var bars = document.querySelector("#bars");
var navbar = document.querySelector(".navbar");

bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-bar').onclick =()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick =()=>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlider: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
  });
    


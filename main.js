var bars = document.querySelector("#bars");
var navbar = document.querySelector(".navbar");
var links = document.querySelectorAll('header .navbar a');
var section = document.querySelectorAll('section');

bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    bars.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id= sec.getAttribute('id');
     
        if(top >= offset && top < offset + height){
          
            links.forEach(link =>{
                
                link.classList.remove('active');
            })
            document.querySelector('header .navbar a[href*='+id+']').classList.add('active');


        }
    })
}

links.forEach(link => {
    link.onclick = () => {
        var parent = link.parentElement;
        for(let i=0; i<parent.children.length; i++){
            parent.children[i].classList.remove('active')
        }
        link.classList.add('active');
    }
});


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
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlider: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction:false
    },
    loop: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },

    }
  });


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

function fadeOut(){
    setInterval(loader, 2000);
}

window.onload = fadeOut;
    


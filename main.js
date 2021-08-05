var bars = document.querySelector("#bars");
var navbar = document.querySelector(".navbar");

bars.onclick = () =>{
    bars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
    


 /* ===========================================
   MARIA PORTFOLIO
   script.js - Part 1
===========================================*/

// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking a link

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// =========================
// Sticky Header
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


// =========================
// AOS Animation
// =========================

AOS.init({

    duration:1000,
    once:true,
    easing:"ease-in-out"

});


// =========================
// Typing Effect
// =========================

new Typed(".typing",{

strings:[
"Professional Web Designer",
"UI/UX Designer",
"Landing Page Designer",
"Business Website Designer",
"Creative Freelancer"
],

typeSpeed:70,
backSpeed:45,
backDelay:1500,
loop:true

});
/* ===========================================
   script.js - Part 2
===========================================*/

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 150;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});


// =========================
// Hero Image Animation
// =========================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("float");

},2000);

}


// =========================
// Button Ripple Effect
// =========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


// =========================
// Project Card Hover
// =========================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(138,43,226,.25),
#111 65%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="#121212";

});

});


// =========================
// Contact Form
// =========================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}
/* ===========================================
   script.js - Part 3
===========================================*/

// =========================
// Scroll To Top Button
// =========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";
scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        scrollBtn.classList.add("show");
    }else{
        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// =========================
// Page Loaded Animation
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================
// Hero Image Floating Effect
// =========================

const style = document.createElement("style");

style.innerHTML = `
.float{
animation:float 3s ease-in-out infinite;
}

@keyframes float{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-15px);
}

100%{
transform:translateY(0px);
}

}

.scroll-top{

position:fixed;
right:25px;
bottom:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#8A2BE2;
color:#fff;
font-size:24px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 0 20px rgba(138,43,226,.5);

}

.scroll-top.show{

display:block;

}

.scroll-top:hover{

transform:scale(1.1);

}
`;

document.head.appendChild(style);

// =========================
// Console Message
// =========================

console.log("Maria Portfolio Loaded Successfully 💜");
// Sayfalar

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");


// Butonlar

const next1 = document.getElementById("next1");
const yes = document.getElementById("yes");
const no = document.getElementById("no");


// İlk sayfadan ikinciye geçiş

next1.addEventListener("click", () => {

    page1.classList.remove("active");

    page2.classList.add("active");

});



// Evet butonu

yes.addEventListener("click", () => {

    page2.classList.remove("active");

    page3.classList.add("active");

});



// Hayır butonu kaçma efekti

function moveNoButton(){

    const x =
    Math.random() * 220 - 110;

    const y =
    Math.random() * 120 - 60;


    no.style.transform =
    `translate(${x}px, ${y}px)`;

}


no.addEventListener(
"mouseenter",
moveNoButton
);



no.addEventListener(
"touchstart",
(e)=>{

    e.preventDefault();

    moveNoButton();

});




// Ay tıklama efekti

const moon = document.querySelector(".moon");


moon.addEventListener("click",()=>{


    moon.classList.add("moon-click");


    setTimeout(()=>{

        moon.classList.remove("moon-click");

    },800);


});


window.addEventListener("scroll", function(){
    var scroll = document.querySelector(".scroltop");
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}















window.addEventListener("scroll", function reduce(){
    var header = document.querySelector(".n-sh");
    header.classList.toggle("shrink", window.scrollY > 0)
})

const list = document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) =>
item.addEventListener("click", activeLink));




function tun (){
    document.body.classList.toggle("dark");
    if (document.body.className == "dark"){
        document.getElementById("mode2").setAttribute("style", "background-color: #82737f;"); 
        document.querySelector(".indicator").setAttribute("style","border-color: #82737f;" );
    }else{
        // document.getElementById("mode2").setAttribute("style", "background-color:white");
    }
}


function kun (){
    document.body.classList.toggle("dark");
    if (document.body.className == "dark"){
        document.getElementById("mode2").setAttribute("style", "background-color: #ffffff;");
        document.querySelector(".indicator").setAttribute("style","border-color: #fff;" );
    }else{
        // document.getElementById("mode2").setAttribute("style", "background-color:white");
    }
}



var indexValue = 1;
showImg(indexValue);
function btm_slide (e){showImg(indexValue = e);}
function side_slide (e){showImg(indexValue += e);}
function showImg(e){
    var i ;
    const img = document.querySelectorAll('#img');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if (e > img.length){
        indexValue = 1;
    }
    if (e < 1){
        indexValue = img.length;
    }
    for (i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    for (i = 0; i < sliders.length; i++){
        sliders[i].style.background = "rgba(255,255,255,0.1)";
    }
    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "white";
}


const addition = document.querySelector('.addition');
const change = document.querySelector('#change img');

addition.addEventListener('click', (event) => { 
    let src = event.target.src;
     src && (change.src = src);
});



const icbtn = document.querySelectorAll(".icordion button");

icbtn.forEach( (btn) => {
    btn.addEventListener('click', function(){
       this.parentNode.classList.toggle("active");
       icbtn.forEach((item) => {
        item != this && item.parentNode.classList.remove("active");
       })
    });
});
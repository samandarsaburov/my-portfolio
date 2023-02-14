

const icbtn = document.querySelectorAll(".icordion button");

icbtn.forEach( (btn) => {
    btn.addEventListener('click', function(){
       btn.nextElementSibling.style.display="block";
    });
});
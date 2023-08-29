
const burger_btns = document.getElementsByClassName('burger-btn');
const burger_menu = document.getElementById('burger-menu');
const burger_items = document.getElementsByClassName('burger-item');

const overlay = document.querySelector('.overlay');

const modal = document.getElementById('id01');
const login_btn = document.getElementById('login-btn');
const have_acc_signin = document.getElementById('have-acc-signin');


for (let i = 0; i < burger_btns.length; i++) {
    burger_btns[i].addEventListener('click', function handleClickOutsideBurgerMenu(event) {
        // console.log(' toggle');

        burger_menu.classList.toggle('active');
        overlay.classList.toggle('on'); // Toggle the overlay
            // console.log('on');

        event.stopPropagation();
    
    })
};

window.addEventListener('click', function(event) { 
    if ((burger_menu.classList.contains('active')) && !burger_menu.contains(event.target)  ) {
        // console.log('outside clicked');
        burger_menu.classList.toggle('active');
        overlay.classList.toggle('on'); // Toggle the overlay
            // console.log('off');
    }
});

for (let i = 0; i < burger_items.length; i++) {
    burger_items[i].addEventListener('click', function handleClickOutsideBurgerMenu(event) {
        // console.log(' toggle');

        burger_menu.classList.toggle('active');
        overlay.classList.toggle('on'); // Toggle the overlay
        // console.log('on');

        // event.stopPropagation();    
    })
}



login_btn.onclick = function(){
    modal.style.display='block';
    document.getElementById('modal-signup').style.display='none';
    document.getElementById('modal-signin').style.display='block'; 
}

document.getElementById('no-acc-singup').onclick = function(){
    document.getElementById('modal-signin').style.display='none';
    document.getElementById('modal-signup').style.display='block';
}

have_acc_signin.onclick = function(){
    document.getElementById('modal-signup').style.display='none';
    document.getElementById('modal-signin').style.display='block';    
}


// When the user clicks anywhere outside of the (desktop) modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("destination-item");
    let dots = document.getElementsByClassName("dot");

    // let slideWidth = slides.clientWidth; //new

    if(window.matchMedia("(width<=390px)").matches){ //when mobile
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
            // document.getElementById("slider").scrollLeft -= slideWidth; //new

        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");

        }


        // let slideWidth = slides.clientWidth; //new
        // document.getElementById("slider").scrollLeft += slides.clientWidth; //new


        slides[slideIndex-1].style.display = "block";  
            // slides[slideIndex-1].className.replace("", "");;  

        dots[slideIndex-1].className += " active";

    } else { //when desktop


        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            // slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        // dots[slideIndex-1].className += " active";
        dots[slideIndex].className += " active";


        //desktop
        document.getElementById('slide_1').onclick= function() {
            document.getElementById("slider").classList.add("active-center1");
            document.getElementById("slider").classList.remove("active-center2");
            document.getElementById("slider").classList.remove("active-center3");
        
            document.getElementById("slide_1").classList.add("active");
            document.getElementById("slide_2").classList.remove("active");
            document.getElementById("slide_3").classList.remove("active");
        }
        document.getElementById('slide_2').onclick = function() {
            document.getElementById("slider").classList.remove("active-center1");
            document.getElementById("slider").classList.add("active-center2");
            document.getElementById("slider").classList.remove("active-center3");
            
            document.getElementById("slide_1").classList.remove("active");
            document.getElementById("slide_2").classList.add("active");
            document.getElementById("slide_3").classList.remove("active");
        }
        document.getElementById('slide_3').onclick = function() {
            document.getElementById("slider").classList.remove("active-center1");
            document.getElementById("slider").classList.remove("active-center2");
            document.getElementById("slider").classList.add("active-center3");
        
            document.getElementById("slide_1").classList.remove("active");
            document.getElementById("slide_2").classList.remove("active");
            document.getElementById("slide_3").classList.add("active");
        }



    }


}



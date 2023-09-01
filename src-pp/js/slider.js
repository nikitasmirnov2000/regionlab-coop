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


    if(window.matchMedia("(width<=390px)").matches){ //when mobile
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex-1].className += " active";
        

        // for (i = 0; i < slides.length; i++) {
                //     slides[i].style.display = "none";  
                // }
        // slides[slideIndex-1].style.display = "block";  

        
        // for (i = 0; i < slides.length; i++) {
            //   slides[i].style.transform = `translateX(${100 * (i - slideIndex + 1)}%)`; // Slide the item to the left
        // }
        // slides[slideIndex-1].style.transform = 'translateX(0%)'; // Bring the selected item into view
            // for (i = 0; i < slides.length; i++) {
            //     var j = 100*i-(slideIndex-1)*100+"%";
            //     slides[i].style.transform = "translateX("+j+")";
            //   }

        
        if(n==1 || n > slides.length){
            // document.getElementById("slider").style.transform = 'translateX(0%)'
            slides[0].style.transform = 'translateX(0%)'
            slides[1].style.transform = 'translateX(100%)'
            slides[2].style.transform = 'translateX(200%)'
        }  else if (n==2) {
            // document.getElementById("slider").style.transform = 'translateX(-10%)'
            slides[0].style.transform = 'translateX(-200%)'
            slides[1].style.transform = 'translateX(-100%)'
            slides[2].style.transform = 'translateX(100%)'
        } else if (n==3 || n < 1){
            // document.getElementById("slider").style.transform = 'translateX(-20%)'
            slides[0].style.transform = 'translateX(-400%)'
            slides[1].style.transform = 'translateX(-300%)'
            slides[2].style.transform = 'translateX(-200%)'
        }


        // for (let i = 0; i < slides.length; i++) {
        //     if (i === slideIndex - 1) {
        //       slides[i].style.transform = 'translateX(0%)'; // Bring the selected item into view
        //     } else {
        //       slides[i].style.transform = `translateX(${100 * (i - slideIndex + 1)}%)`; // Slide the item to the left
        //     }
        //   }

        // for (let i = 0; i < slides.length; i++) {
        //     if (i === slideIndex - 1) {
        //       slides[i].style.transform = 'translateX(0%)'; // Bring the selected item into view
        //     } else if (i === slideIndex - 2) {
        //       slides[i].style.transform = 'translateX(-100%)'; // Slide the previous item to the left
        //     } else if (i === slideIndex) {
        //       slides[i].style.transform = 'translateX(100%)'; // Slide the next item to the right
        //     } else {
        //       slides[i].style.transform = 'translateX(200%)'; // Move other items off screen
        //     }
        //   }        

    } else { //when desktop

        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex].className += " active";
        
        // for (i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";  
        // }
        // slides[slideIndex-1].style.display = "block";  
        // dots[slideIndex-1].className += " active";

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
function include(file) {
 
    let script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
 
    document.getElementsByTagName('head').item(0).appendChild(script);
 
}
/* Include js files */
include('src-pp/js/mobile_nav.js');
include('src-pp/js/slider.js');



//
//desktop modal+content: login, register,  bg
const modal = document.getElementById('modal--desktop');
const login_btn = document.getElementById('login-btn');
const have_acc_signin = document.getElementById('have-acc-signin');
const no_acc_singup = document.getElementById('no-acc-singup');

login_btn.onclick = function(){
    modal.style.display='block';
    document.getElementById('modal-signup').style.display='none';
    document.getElementById('modal-signin').style.display='block'; 
}

no_acc_singup.onclick = function(){
    document.getElementById('modal-signin').style.display='none';
    document.getElementById('modal-signup').style.display='block';
}

have_acc_signin.onclick = function(){
    document.getElementById('modal-signup').style.display='none';
    document.getElementById('modal-signin').style.display='block';    
}


// When the user clicks anywhere outside of the (desktop) modal, close it
modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







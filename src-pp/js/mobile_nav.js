// export function mobile_nav(){
    const burger_btns = document.getElementsByClassName('burger-btn');
    const burger_menu = document.getElementById('burger-menu');
    const burger_items = document.getElementsByClassName('burger-item');
    const overlay = document.querySelector('.overlay');


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
// }
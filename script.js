var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {
    menu.classList.toggle('active');
}
var owl = $('.carouselStandar');
owl.carouselStandar({
    items:3, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
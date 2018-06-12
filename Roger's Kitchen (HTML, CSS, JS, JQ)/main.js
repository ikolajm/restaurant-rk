//Dropdown menu
var dropIcon = document.getElementById('dropdown');
var navMenu = document.getElementsByTagName('nav');
    
dropIcon.addEventListener('click', function() {
    if (navMenu[0].style.display == 'none') {
        navMenu[0].style.display = 'flex';
        dropIcon.classList.remove('fa-bars');
        dropIcon.classList.add('fa-times');
    } else {
        navMenu[0].style.display = 'none';
        dropIcon.classList.remove('fa-times');
        dropIcon.classList.add('fa-bars');                  
     }
});
//End Dropdown

//Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slides');
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';

    setTimeout(showSlides, 8000);  
}
//End Slideshow

//Menu Page Click Function (JQ)
var $app = $('.app');
var $entre = $('.entre');
var $dessert = $('.dessert');
var $drink = $('.drink');
var $all = $('.app, .entre, .dessert, .drink')
var $appButton = $('.app-button');
var $entreButton = $('.entre-button');
var $dessertButton = $('.dessert-button');
var $drinkButton = $('.drink-button');
var $allButton = $('.app-button, .entre-button, .dessert-button, .drink-button')
       
$appButton.click(function() {
    $all.css('display', 'none');
    $app.css('display', 'flex');
    $allButton.css('text-decoration', 'none');
    $appButton.css('text-decoration', 'underline');
});

$entreButton.click(function() {
    $all.css('display', 'none');
    $entre.css('display', 'flex');
    $allButton.css('text-decoration', 'none');
    $entreButton.css('text-decoration', 'underline');
    });
    
$dessertButton.click(function() {
    $all.css('display', 'none');
    $dessert.css('display', 'flex');
    $allButton.css('text-decoration', 'none');
    $dessertButton.css('text-decoration', 'underline');
});

$drinkButton.click(function() {
    $all.css('display', 'none');
    $drink.css('display', 'flex');
    $allButton.css('text-decoration', 'none');
    $drinkButton.css('text-decoration', 'underline');
});
//


//Google Map
function map() {
  latLng = new google.maps.LatLng(41.154141, -80.568578)
  var mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var marker = new google.maps.Marker({
      position: latLng,
      title:"Roger's Kitchen",
      visible: true
  });
  marker.setMap(map);
}
//
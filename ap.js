let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); 
}
var imageUrls = [
  'https://dressup.ge/img/m/4-small_default.jpg',
  'https://dressup.ge/img/m/5-small_default.jpg',
  'https://dressup.ge/img/m/7-small_default.jpg',
  'https://dressup.ge/img/m/8-small_default.jpg',
  'https://dressup.ge/img/m/52-small_default.jpg',
  'https://dressup.ge/img/m/47-small_default.jpg',
  'https://dressup.ge/img/m/176-small_default.jpg',
  'https://dressup.ge/img/m/60-small_default.jpg',
  'https://dressup.ge/img/m/73-small_default.jpg',
  'https://dressup.ge/img/m/63-small_default.jpg',
  'https://dressup.ge/img/m/66-small_default.jpg',
  'https://dressup.ge/img/m/79-small_default.jpg',
  'https://dressup.ge/img/m/83-small_default.jpg',
  'https://dressup.ge/img/m/85-small_default.jpg',
  'https://dressup.ge/img/m/92-small_default.jpg',
  'https://dressup.ge/img/m/93-small_default.jpg',
  'https://dressup.ge/img/m/95-small_default.jpg',
  'https://dressup.ge/img/m/96-small_default.jpg',
  'https://dressup.ge/img/m/97-small_default.jpg',
  'https://dressup.ge/img/m/102-small_default.jpg',
  'https://dressup.ge/img/m/110-small_default.jpg',
  'https://dressup.ge/img/m/117-small_default.jpg',
  'https://dressup.ge/img/m/1-small_default.jpg',
  'https://dressup.ge/img/m/44-small_default.jpg',
  'https://dressup.ge/img/m/45-small_default.jpg',
  'https://dressup.ge/img/m/80-small_default.jpg',
  'https://dressup.ge/img/m/101-small_default.jpg',
  'https://dressup.ge/img/m/112-small_default.jpg',
  'https://dressup.ge/img/m/118-small_default.jpg',
  'https://dressup.ge/img/m/122-small_default.jpg',
  'https://dressup.ge/img/m/48-small_default.jpg',
  'https://dressup.ge/img/m/114-small_default.jpg',
  'https://dressup.ge/img/m/129-small_default.jpg',
  'https://dressup.ge/img/m/130-small_default.jpg',
  'https://dressup.ge/img/m/128-small_default.jpg',
  'https://dressup.ge/img/m/213-small_default.jpg',
];
var targetElement = document.getElementById('targetElementId');
var imagesHTML = '';
targetElement.innerHTML = imagesHTML;
window.onload = function() {
  var targetElement = document.getElementById('targetElementId');
  var imagesHTML = '';

  for (var i = 0; i < imageUrls.length; i++) {
      imagesHTML += '<img src="' + imageUrls[i] + '" alt="Image ' + (i + 1) + '">';
  }

  targetElement.innerHTML = imagesHTML;
};


//manual change
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}
//automatic change
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

////////////////////////////////////////////////////////////////////
function go(where){
    switch (where){
      case 'quiz':
          window.location.href="quiz.html";
        break;
      case 'houses':
          window.location.href="houses.html";
       break;
       case 'charms':
          window.location.href="charms.html";
       break;
       case 'characters':
          window.location.href="characters.html";
       break;
       
    }
}

var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
   this.title = title;
   this.subtitle = subtitle;
   this.background = background;
   this.link = link;
   this.id = "slide" + slideIndex;
   slideIndex++;
   slideArray.push(this);
}

// ви можете зробити скільки завгодно слайдів

var slide1 = new Slide(
   "Горы",
   "Горы 1",
   "public/images/slide5.jpg",
   "https://www.dacha-svoimi-rukami.com/sdelat/sad-ogorod"
);


var slide2 = new Slide(
   "Рассвет",
   "Рассвет 1",
   "public/images/slide2.jpg",
   "https://krrot.net/vurashivanie-gribov/"
);

var slide3 = new Slide(
    "Горы",
    "Горы 2",
    "public/images/slide3.jpg",
    "https://www.russianfood.com/recipes/bytype/?fid=1043"
 );

 var slide4 = new Slide(
    "Горы 3",
    "Горы 3",
    "public/images/slide4.jpg",
    "https://krrot.net/vurashivanie-gribov/"
 );
 
 var slide5 = new Slide(
     "Горы 4",
     "Горы 4",
     "public/images/slide1.png",
     "https://www.russianfood.com/recipes/bytype/?fid=1043"
  );

function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h2>" + slideArray[i].title + "</h2>" +
            "<h3>" + slideArray[i].subtitle + "</h3>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }
 
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 }
 
 buildSlider();
 
 function prevSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }
 
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
 
    currentSlideIndex = nextSlideIndex;
 }
 
 function nextSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
 
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
 
    currentSlideIndex = nextSlideIndex;
 }
 function buildSlider(){
    var myHTML;
    for(var i = 0; i < slideArray.length; i++) {
        myHTML += "<div id='" + slideArray[i].id +
            "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
            "<div class='slideOverlay'>" +
            "<h2>" + slideArray[i].title + "</h2>" +
            "<h3>" + slideArray[i].subtitle + "</h3>" +
            "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
            "</div>" +
            "</div>";
    }
 
    document.getElementById("mySlider").innerHTML = myHTML;
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 }
 
 buildSlider();
 
 function prevSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === 0 ) {
        nextSlideIndex = slideArray.length - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }
 
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
 
    currentSlideIndex = nextSlideIndex;
 }
 
 function nextSlide(){
    var nextSlideIndex;
    if (currentSlideIndex === (slideArray.length - 1) ) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }
 
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;
 
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
 
    currentSlideIndex = nextSlideIndex;
 }
  
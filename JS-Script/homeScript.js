//changed from 1 to 0
var slideIndex = 0;
var noAuto = 0;

// For manual slideshow
function startSlides(currentSlide) {
    "use strict";
    var i, listOfSlides = document.getElementsByClassName("slide");
    
    if (currentSlide > listOfSlides.length) {
        slideIndex = 1;
    }
    if (currentSlide < 1) {
        slideIndex = listOfSlides.length;
    }
    for (i = 0; i < listOfSlides.length; i = i + 1) {
        listOfSlides[i].style.display = "none";
    }
    listOfSlides[slideIndex - 1].style.display = "block";
}
//Switches slides forward or backward
function switchSlide(ForB) {
    "use strict";
    //noAuto is for once someone changes slide manually , the auto slideshow stops
    noAuto = 1;
    startSlides(slideIndex = slideIndex + ForB);
    
}
//for auto slideshow
function autoSlides() {
    "use strict";
    //If they dont press any arrows keep autoing else stop autoing and turn manual
    if (noAuto === 0) {
        var i, listOfSlides = document.getElementsByClassName("slide");
    
        for (i = 0; i < listOfSlides.length; i = i + 1) {
            listOfSlides[i].style.display = "none";
        }
        slideIndex = slideIndex + 1;
        if (slideIndex > listOfSlides.length) {
            slideIndex = 1;
        }
        listOfSlides[slideIndex - 1].style.display = "block";
        setTimeout(autoSlides, 4000);
    } else {
        //starts manual slides
        startSlides(slideIndex);
    }
}
// starts auto slideshow
autoSlides();
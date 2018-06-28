/*jslint browser: true, devel: true */
var $ = this.$, document = this.document, console = this.console;

//Basically file just handles the service boxes expanding and going back to normal

// These variables are for the double double check that the mouse is still on the container once the function has been called
var frameStillIn = 0;
var sidingStillIn = 0;
var deckStillIn = 0;
var DWStillIn = 0;

// Expand container functions all expand the container when mouse is over for each specific container
function expandFrameContainer() {
    "use strict";
    $("#frameImage").hide();
    $("#sidingContainer").animate({width: '17%' }, {queue: false});
    $('#decksContainer').animate({width: '17%' }, {queue: false });
    $('#projectsContainer').animate({width: '17%' }, {queue: false });
    $('#frameContainer').animate({width: '49%' }, {queue: false, complete: function () {
        // Double double check: the if statements are to catch if mouse has left
        if (frameStillIn === 1) {
            $('#frameTitleDesContainer').css("width", "50%"); //****ADDED***
            $('#frameDes').fadeIn();
            $('#frameImage2').fadeIn();
            $('#frameImage3').fadeIn();
            $('#frameServiceImagesContainer').fadeIn(); //****ADDED***
        }
    }});
}
function expandSidingContainer() {
    "use strict";
    $("#sidingImage").hide();
    $('#frameContainer').animate({width: '17%' }, {queue: false});
    $('#sidingContainer').animate({width: '49%' }, {queue: false, complete: function () {
        if (sidingStillIn === 1) {
            $('#sidingTitleDesContainer').css("width", "50%"); //****ADDED***
            $('#sidingDes').fadeIn();
            $('#sidingImage2').fadeIn();
            $('#sidingImage3').fadeIn();
            $('#sidingServiceImagesContainer').fadeIn(); //****ADDED***
        }
    }});
    $('#decksContainer').animate({width: '17%' }, {queue: false});
    $('#projectsContainer').animate({width: '17%' }, {queue: false});
}
function expandDecksContainer() {
    "use strict";
    $("#deckImage").hide();
    $('#frameContainer').animate({width: '17%' }, {queue: false});
    $('#sidingContainer').animate({width: '17%' }, {queue: false});
    $('#decksContainer').animate({width: '49%'}, {queue: false, complete: function () {
        if (deckStillIn === 1) {
            $('#deckTitleDesContainer').css("width", "50%"); //****ADDED***
            $('#decksDes').fadeIn();
            $('#deckImage2').fadeIn();
            $('#deckImage3').fadeIn();
            $('#deckServiceImagesContainer').fadeIn(); //****ADDED***
        }
    }});
    $('#projectsContainer').animate({width: '17%' }, {queue: false});
}
function expandDoorWindowsContainer() {
    "use strict";
    $("#windowImage").hide();
    $('#frameContainer').animate({width: '17%' }, {queue: false});
    $('#sidingContainer').animate({width: '17%' }, {queue: false});
    $('#decksContainer').animate({width: '17%' }, {queue: false});
    $('#projectsContainer').animate({width: '49%' }, {queue: false, complete: function () {
        
        if (DWStillIn === 1) {
            $('#windowTitleDesContainer').css("width", "50%"); //****ADDED***
            $('#windowsDes').fadeIn();
            $('#windowImage2').fadeIn();
            $('#windowImage3').fadeIn();
            $('#windowServiceImagesContainer').fadeIn(); //****ADDED***
        }
        
    }});
}
// reset Functions are to fade out images and bring in images needed when mouse leaves for each specific container
function resetFrameContainer() {
    "use strict";
    
    $('#frameDes').hide();
    $('#frameImage2').hide();
    $('#frameImage3').hide();
    $('#frameServiceImagesContainer').hide(); //****ADDED*********************
    $('#frameTitleDesContainer').css("width", "100%"); //****ADDED********************
}
function resetSidingContainer() {
    "use strict";
    $('#sidingDes').hide();
    $('#sidingImage2').hide();
    $('#sidingImage3').hide();
    $('#sidingServiceImagesContainer').hide(); //****ADDED*********************
    $('#sidingTitleDesContainer').css("width", "100%"); //****ADDED********************
}
function resetDecksContainer() {
    "use strict";
    $('#decksDes').hide();
    $('#deckImage2').hide();
    $('#deckImage3').hide();
    $('#deckServiceImagesContainer').hide(); //****ADDED*********************
    $('#deckTitleDesContainer').css("width", "100%"); //****ADDED********************
}
function resetDoorWindowsContainer() {
    "use strict";
    $('#windowsDes').hide();
    $('#windowImage2').hide();
    $('#windowImage3').hide();
    $('#windowServiceImagesContainer').hide(); //****ADDED*********************
    $('#windowTitleDesContainer').css("width", "100%"); //****ADDED********************
}

//sets the service containers back to there original size, also fades out inside images
//and fades in orginal images showing
function resetServicesContainer() {
    "use strict";
    $('#frameContainer').animate({width: '25%' }, {queue: false, complete:  function () {
        $('#frameImage').fadeIn();
    }});
    $('#sidingContainer').animate({width: '25%' }, {queue: false, complete: function () {
        $('#sidingImage').fadeIn();
    }});
    $('#decksContainer').animate({width: '25%'}, {queue: false, complete: function () {
        $('#deckImage').fadeIn();
    }});
    $('#projectsContainer').animate({width: '25%' }, {queue: false, complete: function () {
        $('#windowImage').fadeIn();
    }});
}

//makes sure mouse stays over element for half a second before expanding
function doubleCheckMouse(elem) {
    "use strict";
    
    var myTimeout;

    $(elem).mouseenter(function () {
        myTimeout = setTimeout(function () {
            //if statements checks which container it is in
            if (elem === '#frameContainer') {
                frameStillIn = 1;
                expandFrameContainer();
            }
            if (elem === '#sidingContainer') {
                sidingStillIn = 1;
                expandSidingContainer();
            }
            if (elem === '#decksContainer') {
                deckStillIn = 1;
                expandDecksContainer();
            }
            if (elem === '#projectsContainer') {
                DWStillIn = 1;
                expandDoorWindowsContainer();
            }
        }, 500); //time before reacts so its not to quick with it
    }).mouseleave(function () {
        //Mouse leaves clears myTimeout and if statements are for checking which container it left so it can
        //  call the function for it
        clearTimeout(myTimeout);
        if (elem === '#frameContainer') {
            frameStillIn = 0;
            resetFrameContainer();
        }
        if (elem === '#sidingContainer') {
            sidingStillIn = 0;
            resetSidingContainer();
        }
        if (elem === '#decksContainer') {
            deckStillIn = 0;
            resetDecksContainer();
        }
        if (elem === '#projectsContainer') {
            DWStillIn = 0;
            resetDoorWindowsContainer();
        }
        resetServicesContainer();
    });
}

//Calls functions for each container within the #servicesContainer
function serviceBlocksExpand() {
    "use strict";
    doubleCheckMouse('#frameContainer');
    doubleCheckMouse('#sidingContainer');
    doubleCheckMouse('#decksContainer');
    doubleCheckMouse('#projectsContainer');
}

$(document).ready(function () {
    "use strict";
    serviceBlocksExpand();
    //allows for images to load then fades them in smoothly
    $('.serviceTitleImage').css('visibility', 'visible').hide().delay(300).fadeIn();
});
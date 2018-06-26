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
            $('#frameDes').fadeIn();
            $('#frameImage2').fadeIn();
            $('#frameImage3').fadeIn();
        }
    }});
}
function expandSidingContainer() {
    "use strict";
    $("#sidingImage").hide();
    $('#frameContainer').animate({width: '17%' }, {queue: false});
    $('#sidingContainer').animate({width: '49%' }, {queue: false, complete: function () {
        if (sidingStillIn === 1) {
            $('#sidingDes').fadeIn();
            $('#sidingImage2').fadeIn();
            $('#sidingImage3').fadeIn();
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
            $('#decksDes').fadeIn();
            $('#deckImage2').fadeIn();
            $('#deckImage3').fadeIn();
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
            $('#windowsDes').fadeIn();
            $('#windowImage2').fadeIn();
            $('#windowImage3').fadeIn();
        }
        
    }});
}
// reset Functions are to fade out images and bring in images needed when mouse leaves for each specific container
function resetFrameContainer() {
    "use strict";
    $('#frameDes').hide();
    $('#frameImage2').hide();
    $('#frameImage3').hide();
}
function resetSidingContainer() {
    "use strict";
    $('#sidingDes').hide();
    $('#sidingImage2').hide();
    $('#sidingImage3').hide();
}
function resetDecksContainer() {
    "use strict";
    $('#decksDes').hide();
    $('#deckImage2').hide();
    $('#deckImage3').hide();
}
function resetDoorWindowsContainer() {
    "use strict";
    $('#windowsDes').hide();
    $('#windowImage2').hide();
    $('#windowImage3').hide();
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
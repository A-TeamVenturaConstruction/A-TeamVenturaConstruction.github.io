/*jslint browser: true, devel: true */
var $ = this.$, document = this.document, console = this.console;

$(document).ready(function () {
    "use strict";
    //slides down #contactInfo
    $('#contactInfo').css('visibility', 'visible').hide().slideDown('slow');
    $('#contactNumberEmail').css('visibility', 'visible').hide().delay(550).slideDown('slow');
    $('#contactName').css('visibility', 'visible').hide().delay(550).slideDown('slow');
    $('#ownerTitle').css('visibility', 'visible').hide().delay(550).slideDown('slow');
    
});
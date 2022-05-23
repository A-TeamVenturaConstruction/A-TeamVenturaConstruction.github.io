var screen_width = window.innerWidth;
var screen_height = window.innerHeight;
//document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;

//if(screen_width )
function show_menu()
{
    'use strict';
    document.getElementById("menuImage").style.display = "none";
    document.getElementById("menu_show_container").style.display = "block";
    document.getElementById("close_image").style.display = "block";
}
function close_menu()
{
    'use strict';
     document.getElementById("menu_show_container").style.display = "none";
    document.getElementById("close_image").style.display = "none";
    document.getElementById("menuImage").style.display = "block";
                            
   
}
function checkScreen()
{
    'use strict';
                        if(screen_width < 800)
                        {
                            //remove tabs
                            
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "60px";
                            //resize image
                            document.getElementById("logoImage").style.height = "40px";
                            //bar height
                            document.getElementById("bar").style.height = "120px";
                            document.getElementById("menuImage").style.display = "block";
                            
                            
                        }
                        if(screen_width > 800)
                        {
                            
//}
                            close_menu();
                            document.getElementById("menuImage").style.display = "none";
                             document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline"; 
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "70px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            //bar height
                            document.getElementById("bar").style.height = "180px";
                        }

}

checkScreen();


window.addEventListener('resize', 
    function(event){
                        screen_width = window.innerWidth;
                        screen_height = window.innerHeight;
                        //document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
    
                        checkScreen();
                        
                    });
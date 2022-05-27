var browser_width = window.innerWidth;
var browser_height = window.innerHeight;
//document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
var screen_width = screen.width;
var screen_height = screen.height;

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
                        if((screen_width <= 800) || (browser_width <= 800))
                        {
                            //remove tabs
                            
                            document.getElementById("list_one").style.display = "none";
                            document.getElementById("list_two").style.display = "none";
                            document.getElementById("list_three").style.display = "none";
                            document.getElementById("list_four").style.display = "none";
                            document.getElementById("topHeadline").style.fontSize = "6vw";
                           
                            document.getElementById("menuImage").style.display = "block";
                            //document.getElementById("experience_title").style.marginTop = "30px";
                            if(screen_width <= 800)
                            {
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "120px";
                                //resize image
                                document.getElementById("logoImage").style.height = "100px";
                                document.getElementById("menuImage").style.height = "100px";
                                document.getElementById("menuImage").style.width = "100px";
                                //bar height
                                document.getElementById("bar").style.height = "180px";
                            }
                            else
                            {
                                //resize nav container
                                document.getElementById("nav_container").style.paddingTop = "60px";
                                //resize image
                                document.getElementById("logoImage").style.height = "50px";
                                //bar height
                                document.getElementById("bar").style.height = "125px";
                            }
                            
                            
                        }
                        if((screen_width > 800) && (browser_width > 800))
                        {
                            close_menu();
                            document.getElementById("menuImage").style.display = "none";
                            //document.getElementByClassName("nav_list").style.display = "inline";
                             document.getElementById("list_one").style.display = "inline";
                            document.getElementById("list_two").style.display = "inline";
                            document.getElementById("list_three").style.display = "inline";
                            document.getElementById("list_four").style.display = "inline";
                            document.getElementById("topHeadline").style.fontSize = "3vw";
                            //resize nav container
                            document.getElementById("nav_container").style.paddingTop = "70px";
                            //resize image
                            document.getElementById("logoImage").style.height = "80px";
                            
                            //bar height
                            document.getElementById("bar").style.height = "170px";
                           
                        }

}

checkScreen();


window.addEventListener('resize', 
    function(event){
                        browser_width = window.innerWidth;
                        browser_height = window.innerHeight;
                        
                        screen_width = screen.width;
                        screen_height = screen.height;
                        //document.getElementById("endPageBar").innerHTML = "Width: " + screen_width + " Height: " + screen_height;
    
                        checkScreen();
                        
                    });

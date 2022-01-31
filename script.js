
$(document).ready(function(){
    $( ".world2" ).children().draggable();

  $("#world1").draggable({
    stop: function(){
        $(this).animate({top:0, left:0}, 1000, 'easeOutElastic');
    }
})
  $("#world2").draggable(function(){
  })



  $("#world2").click(function(){
            var world1 = $("#world1");
            world1.animate({"font-size": "800%", height: '400px', opacity: '0.4'}, "slow");
            world1.animate({"font-size": "800%", width: '400px', opacity: '0.4'}, "slow");
            world1.animate({"font-size": "400%", height: '100px', opacity: '0.4'}, "slow");
            world1.animate({"font-size": "400%", width: '100px', opacity: '0.8'}, "slow");

  })

  //couldnt figure out how to combine the #world2 + #worlds4 to them make #world3 animate together.
  $("#world2").click(function(){
      $("#world3")
            $("#worlds3").animate({
              height: '+=500px',
              width: '-=500px'
            });
            $("#worlds3").animate({
                height: '-=500px',
                width: '+=500px'
              });

})
$("#world2").click(function(){
    $("#worlds7").fadeToggle();
     $("#worlds8").fadeToggle("slow");
    $("#worlds9").fadeToggle(3000);
   });

  $("#world3").click(function(){
      $("#worlds3")
            $("#worlds3").animate({
            "font-size": "1000%",
              height: '+=500px',
            });
            $("#worlds3").animate({
                "font-size": "500%",
                });
            $("#worlds3").animate({
                "font-size": "15000%",
                height: '-=500px',
              });
              $("#worlds3").animate({
                "font-size": "500%",
                });

})

$("#worlds5").click(function(){
    scrollTo(0,7500)
})

$(".world4").children().hover(function(){
    $(this).toggleClass("worlds111")
    $(this).toggleClass("worlds1")
  })
  
  $("#worlds12").click(function(){
    scrollTo(7500,0)
})
    
     });
     



    // $(".world2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //   // $("#container2").slideToggle();
    // //    $("#container2").animate({
    // //       opacity: '0.2',
    // //       height: '60%',
    // //       width: '60%',},2000,function(){
    // //         alert("The paragraph is now hidden");
    // //     });
    // })

    
    // $("#menuitem6").click(function(){
    //     console.log("click")
    //     scrollTo(0,5000)
    // })

    // $("#menuitem9").click(function(){
    //     console.log("click")
    //     scrollTo(0,0)
    // })

    
// });

    // $("#menuitem1").click(function(){
    //       $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    //   })

    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    // $("#menuitem3").click(function(){
    //   $("#container1").text("this is text");
    // })

    //   $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })
    //   $("#menuitem6").click(function(){
    //       scrollTo(0,5000)
    //   })

    //   $( ".menu3" ).children().draggable();



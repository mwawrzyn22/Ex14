
$(document).ready(function(){
  $(".world2").draggable();

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

    $("longscroll").click(function(){
      scrollTo(7500,0)
    })


  })

  function setup() {
    let cnv = createCanvas(windowWidth, 5000);
    cnv.parent ('longscroll')
  }
    let x, y, r, g, b;

    function draw() {
      r = random(255);
      g = random(255); 
      b = random (0);
      x = random(width);
      y = random(height);
      fill(r, g, b, );
      circle (x, y, 9);
      noStroke();

    }
  
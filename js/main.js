$('#header1').click(function (e) { 
    e.preventDefault();
    $('.content-card1').slideToggle();

    $('.content-card2').slideUp();
    $('.content-card3').slideUp();
    $('.content-card4').slideUp();    
});

$('#header2').click(function (e) { 
    e.preventDefault();
    $('.content-card2').slideToggle()
    ;
    $('.content-card1').slideUp();
    $('.content-card3').slideUp();
    $('.content-card4').slideUp();   
});
$('#header3').click(function (e) { 
    e.preventDefault();
    $('.content-card3').slideToggle();

    $('.content-card2').slideUp();
    $('.content-card1').slideUp();
    $('.content-card4').slideUp();    
});

$('#header4').click(function (e) { 
    e.preventDefault();
    $('.content-card4').slideToggle();

    $('.content-card2').slideUp();
    $('.content-card1').slideUp();
    $('.content-card3').slideUp();
});


$(".open").click(function(){
    $(".sidenav").animate({ width:'230px'},35)
   $(".home-content").animate({marginLeft :'230px'},35)
})

$(".close").click(function(){
    $(".sidenav").animate({ width:'0px'},35)
   $(".home-content").animate({marginLeft :'0px'},35)
})

$(".sidenav a").click(function(){
    
    var section= $('.sidenav a').attr("href");
    
    var sectionpos = $(section).offset().top;
    
    $("html , body").animate({scrollTop:sectionpos},10);
    
})



var max =100
$('#text-area').keyup(function (e) { 
    var len = $('#text-area').val().length;
    var remain = max-len ;
    if(remain<=0){
        document.querySelector('#noleft').innerHTML = "You have no chars left";
    }
   else{
    
    $('#numchar').text(remain);

   }
     
    
});





window.onload = function()
 {
       countDown("1 October 2023 10:00:00");
  }

  function countDown(count) {
  
    let upcoming = new Date(count);
    upcoming = (upcoming.getTime()/1000);
    let current = new Date();
    current = (current.getTime()/1000);
    timeDifference = (upcoming- current);

    let days = Math.floor( timeDifference / (24*60*60));

    let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);

    let min = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);

    let sec = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (min * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ min } m`);
    $('.seconds').html(`${ sec} s`)

  
    setInterval(function() {  countDown(count); }, 500);
  }


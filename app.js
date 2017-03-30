$(document).ready(function() {
    console.log('działa');

    var neon = $('.neon');
    neon.on('mouseenter', function(){
        neon.css('visibility','hidden');
    });
    
    var shop = $('.shop');
    shop.on('mouseenter', function(){
         neon.css('visibility','visible');
    });
    
    var shine = function() { 
    neon.fadeTo(300,0.1).delay(2500).fadeTo(800,1);
    };
    setInterval(shine, 10000);
    
    /*var playGame = $('.play');
    
    playGame.on('click', function() {
        $('body').css('background', '#201314');
        $('.main').css('display', 'none');
         $('#mama1').fadeIn(20000);
        $('#mama1').removeClass('mama').css('display', 'block');
        /*$('#mama1').fadeOut(3000);
    });*/
    
    $('.toggle').hide();
    $('.napis').on('click', function() {
        
        $('.toggle').fadeToggle(2000);
    });
   
    var links =$('a');
    links.on('click', function() {
        var content =$(this).attr('href');
        $('html,body').animate({scrollTop: $(content).offset().top}, 2000);
    });
    
    $('.book').on('click', function() {
        $(this).hide();
        $(this).next('.book').removeClass('.none').fadeIn(3000);
    });
    
    $('.aboutUs').on('click', function(){
        $('.book').hide();
        $('.book1').show();
    });
    
    $('.back3').on('click', function() {
        $('.book').hide();
        $('.book1').show();
    });
    
    

function slideGallery() {
        var buttonNext = $('.key');
        var buttonPrev = $('.witaj');
        var pictures = $('li'); 
        var ulSlider = $('ul');
       
        var clone1 = pictures.first().clone();
        var clone2 = pictures.last().clone();
        pictures.last().after(clone1);
        pictures.first().before(clone2);
        
        var imgWidth = pictures.width();
        ulSlider.width(imgWidth * $("img").length);
        var position = - imgWidth;
        ulSlider.css("left", position);
        index = 1;
        
        buttonNext.on("click", function() {
           
            index += 1;
            slide(index);
            if ( index >= $("li").length - 1 ) {
                index = 1;
            };
        });
            
        buttonPrev.on("click", function() {
            
            index -= 1;
            slide(index);
            if ( index <= 0 ) {
                index = $("li").length - 1;
                };
            });   
            
        function slide(i) {
            var slideVal = $("li").eq(i).width() * i;//szerokość obrazka pomnożona przez pozycję w indeksie
            if ( (i > 0) && ( i < $("li").length - 1 ) ) {
                ulSlider.animate({
                    left: -slideVal //przesuwamy na lewo o szerokość obrazków
                });
            } else if ( i <= 0 ) {
                ulSlider.animate({
                    left: -slideVal
                        }, { complete: function() {
                            var positionEnd = -(imgWidth * $("li").length) + (2 * imgWidth);
                            ulSlider.css("left", positionEnd);
                    }});
                }
                else if ( i >= $("li").length - 1 ) {
                    ulSlider.animate({
                        left: -slideVal
                        }, { complete: function() {
                            var position = -($("li").width());
                            ulSlider.css("left", position);
                        }});
                }
            }
        }
    slideGallery();
    
    $('.key').on('click', function() {
        var width = $('body').width();
        if(width<866) {
            $('.harry').fadeToggle(3000).css('display','block');
            $('.witaj').css('display','none');
        } else {
            $('.witaj').css('display','block');
        }
    });
    
});

   

   

    
    
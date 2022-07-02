$( document ).ready(function() {
    if(!$('.menu').hasClass('menu_active')){
        $('ul p').css('display', 'none');
        $('.menu').css('padding-left', '0');
        $('.logo img').css({
            'width': '100%',
            'padding': '10px',
            'margin-bottom': '0'
        });
        $('.secondary_link').css('margin-top', '0');
        $('.secondary_link h6').css('display', 'none');
        $('ul').css('width', '100%');
        $('ul li').css({
            'display': 'flex',
            'justify-content': 'center'
        })
        $('.logo img').css('margin-top', '15px');
        $('footer').css('width', '94%');
    }
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $('.menu').toggleClass('menu_active');
        $('.content').toggleClass('content_active');

        if(!$('.menu').hasClass('menu_active')){
            $('ul p').css('display', 'none').hide().delay(5000);
            $('.menu').css('padding-left', '0');
            $('.logo img').css({
                'width': '100%',
                'padding': '10px',
                'margin-bottom': '0'
            });
            $('.secondary_link').css('margin-top', '0');
            $('.secondary_link h6').css('display', 'none');
            $('ul').css('width', '100%');
            $('ul li').css({
                'display': 'flex',
                'justify-content': 'center'
            });
            $('.logo img').css('margin-top', '15px');
            $('footer').css('width', '94%');
        }else{
            $('ul p').css('display', 'block').show().delay(5000);
            $('.menu').css('padding-left', '8px');
            $('.logo img').css({
                'width': '100px', 
                'margin-bottom': '37px'
            });
            $('.secondary_link').css('margin-top', '38px');
            $('.secondary_link h6').css('display', 'block');
            $('ul').css('width', '90%');
            $('ul li').css({
                'display': 'flex',
                'justify-content': 'flex-start'
            });
            $('.logo img').css('margin-top', '0');
            $('footer').css('width', '80%');
        }
      });
    
});


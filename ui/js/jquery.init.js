/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */

jQuery(function($){


    $('#form1').validate({
        submitHandler: function(form){
            form.submit();
        },
        rules: {
            Field4: "required",
            Field3: "required",
            Field5: {
                required: true,
                email: true
            },
            Field7: {
                required: true,
                minlength: 1
            },
            Field107: {
                required: true,
                minlength: 1
            }
        }
    });

    $('#form1 input').on('keyup blur click', function () { // fires on every keyup & blur
        if ($('#form1').valid()) {                   // checks form for validity
            $('#saveForm').prop('disabled', false);        // enables button
        } else {
            $('#saveForm').prop('disabled', 'disabled');   // disables button
        }
    });

    $('a.signup').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#form').offset().top
        }, 500)
        return false;
    })

    // PARALLAX

    $(document).scroll(function(){
        var nm = $("html").scrollTop();
        var nw = $("body").scrollTop();
        var n = (nm > nw ? nm : nw);

        var neg = $(document).height() - $(window).height() - n - 300;
        if(neg < 0){ neg = 0; }

        $('.anim.l1').css({
            'webkitTransform' : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg * 1.5 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
        });
        $('.anim.l2').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 3 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 3 + 'px, 0)',
        });
        $('.anim.l3').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1 + 'px, 0)',
        });

        $('.anim.r1').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 3 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 3 + 'px, 0)',
        });
        $('.anim.r2').css({
            'webkitTransform' : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg * 1.5 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg * 1.5 + 'px, 0)',
        });
        $('.anim.r3').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1 + 'px, 0)',
        });

    });

    $('#icons li').on('click',function(){
        var id = $(this).data('id');
        $(this).addClass('active').siblings('.active').removeClass('active');
        $('.color').hide();
        $('.color[data-id='+id+']').fadeIn(250).addClass('active');
        var color= $('.color[data-id='+id+']').css('background-color');
        $('#colors').css('background-color',color);
    });

    $('.ds_btn').on('click',function(){
        $('.ds_slider').toggleClass('active');
    })

    $(window).on('load resize',function(){
        if($(window).width() > 960){
            var p = $('#banner #text').outerWidth() * 0.4;
            $('#banner #text').css('padding-left',p+'px');
        }else{
            $('#banner #text').removeAttr('style');
        }

        $("#banner").css('padding-bottom', (9/16) * 100 + '%' );
        if($("#banner").outerHeight() > 800){
            $("#banner").css('padding-bottom','800px');
        }
    })

});

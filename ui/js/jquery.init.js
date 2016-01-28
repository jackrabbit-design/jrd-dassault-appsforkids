/* ========================================================================= */
/* BE SURE TO COMMENT CODE/IDENTIFY PER PLUGIN CALL */
/* ========================================================================= */

jQuery(function($){


    // PARALLAX

    $(document).scroll(function(){
        var nm = $("html").scrollTop();
        var nw = $("body").scrollTop();
        var n = (nm > nw ? nm : nw);

        var neg = $(document).height() - $(window).height() - n;

        $('.anim.l1').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1 + 'px, 0)',
        });
        $('.anim.l2').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 3 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 3 + 'px, 0)',
        });
        $('.anim.l3').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1.5 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
        });

        $('.anim.r1').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 3 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 3 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 3 + 'px, 0)',
        });
        $('.anim.r2').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1 + 'px, 0)',
        });
        $('.anim.r3').css({
            'webkitTransform' : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'MozTransform'    : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'msTransform'     : 'translateY('     + neg / 1.5 + 'px)',
            'OTransform'      : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
            'transform'       : 'translate3d(0, ' + neg / 1.5 + 'px, 0)',
        });
    });

    /* ====== Twitter API Call =============================================
        Note: Script Automatically adds <li> before and after template. Don't forget to setup Auth info in /twitter/index.php */
    /*
    $('#tweets-loading').tweet({
        modpath: '/path/to/twitter/', // only needed if twitter folder is not in root
        username: 'jackrabbits',
        count: 1,
		template: '<p>{text}</p><p class="tweetlink">{time}</p>'
	});
    */

    $('#icons li').on('click',function(){
        var id = $(this).data('id');
        $(this).addClass('active').siblings('.active').removeClass('active');
        $('.color').hide();
        $('.color[data-id='+id+']').fadeIn().addClass('active');
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
    })

});

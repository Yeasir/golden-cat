;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);
    var $body = $('body');

    $doc.ready(function () {

        /**
         * All of the code for your admin-facing JavaScript source
         * should reside in this file.
         *
         * Note: It has been assumed you will write jQuery code here, so the
         * $ function reference has been prepared for usage within the scope
         * of this function.
         *
         * This enables you to define handlers, for when the DOM is ready:
         *
         * $(function() {
         *
         * });
         *
         * When the window is loaded:
         *
         * $( window ).load(function() {
         *
         * });
         *
         * ...and/or other possibilities.
         *
         * Ideally, it is not considered best practise to attach more than a
         * single DOM-ready or window-load handler for a particular page.
         * Although scripts in the WordPress core, Plugins and Themes may be
         * practising this, we should strive to set a better example in our own work.
         */



        // $('.custom-select').select2();


        $('.select-hide-blow').on('change', function() {

        });


        $body.on('click', '.navbar-toggler', function (e) {
            e.preventDefault();
            var dd = $(this).attr('aria-expanded');

            if(dd != 'false' ){
                $(this).find('.fa').removeClass('fa-close');
                $(this).find('.fa').addClass('fa-bars');
                $(this).parents('.header-area').css({backgroundColor: 'transparent'});
            }else{
                $(this).find('.fa').removeClass('fa-bars');
                 $(this).find('.fa').addClass('fa-close');
                $(this).parents('.header-area').css({backgroundColor: 'white'});
            }

        });
        var $status = $('.pagingInfo');



        $('.schedule-slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable:false,
            prevArrow:"<button type='button' class='slick-prev'></button>",
            nextArrow:"<button type='button' class='slick-next'></button> ",
            // autoplay: false,
            // autoplaySpeed: 2000,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrows: true,
                        draggable:false,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                       draggable:true,
                        mobileFirst: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        draggable:true,
                    }
                }

            ]
        });



        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            fade: true,
            asNavFor: '.slider-nav',
            prevArrow:"<button type='button' class='slick-prev'></button>",
            nextArrow:"<button type='button' class='slick-next'></button> "
        });
        $('.slider-nav').slick({
            slidesToShow:2,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });


        $('.slider-for').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);
        });
        //



        var fancyGallery = $(".slider-for").find("a");
        fancyGallery.attr("rel","gallery").fancybox({
            type: "image"
        });
        $('.fullscreen-btn').on('click', function() {
            fancyGallery.eq(0).click();
        });


        $(".register-btn").fancybox({
            touch : false
        });



        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 2000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });





        // $(".form-row input").parents('.form-group').removeClass("form-active");
        // $body.on('blur', '.form-row input' ,function (e) {
        //
        //     $(".form-row input").parents('.form-group').removeClass("form-active");
        //
        //     $(this).parents('.form-group').addClass('form-active');
        // });
        //
        // $('#lPass').on('blur', function() {
        //     alert(1);
        // });




            $(".input-effect input").focusout(function(){
                if($(this).val() != ""){
                    $(this).addClass("has-content");
                }else{
                    $(this).removeClass("has-content");
                }
            })





        var sideNavigation = $(".top-right-side-nfo");
        var  stickyDiv = "active";
        var  banner = $('.banner-area').height();

        $(window).scroll(function(){
            if( $(this).scrollTop() > banner ) {
                sideNavigation.addClass(stickyDiv);
            } else {
                sideNavigation.removeClass(stickyDiv);
            }
        });

    });

})(jQuery, window, document);


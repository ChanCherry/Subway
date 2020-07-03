(function ($) {
    "use strict";
    if ($('.range-slider-price').length) {

        var priceRange = document.getElementById('range-slider-price');

        noUiSlider.create(priceRange, {
            start: [30, 150],
            limit: 200,
            behaviour: 'drag',
            connect: true,
            range: {
                'min': 10,
                'max': 200
            }
        });

        var limitFieldMin = document.getElementById('min-value-rangeslider');
        var limitFieldMax = document.getElementById('max-value-rangeslider');

        priceRange.noUiSlider.on('update', function (values, handle) {
            (handle ? $(limitFieldMax) : $(limitFieldMin)).text(values[handle]);
        });
    };

    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true,
            initval: 1,
            verticalupclass: 'fa fa-caret-up',
            verticaldownclass: 'fa fa-caret-down'
        });
        $('.bootstrap-touchspin-up').text('');
        $('.bootstrap-touchspin-down').text('');
    }
    if ($('.contact-form-vaidated').length) {
        $('.contact-form-vaidated').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject: {
                    required: true
                },
                booking_date: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).parent().find('.result').append(response);
                    $(form).find('input[type="text"]').val('');
                    $(form).find('input[type="email"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
    if ($('.datepicker').length) {
        $('.datepicker').datepicker();
    }
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function () {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function () {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)

            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
    if ($('.main-navigation .navigation-box').length) {
        var subMenu = $('.main-navigation .submenu');
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        var mainNavToggler = $('.header-navigation .menu-toggler');
        var subNavToggler = $('.main-navigation .sub-nav-toggler');
        mainNavToggler.on('click', function () {
            var Self = $(this);
            var menu = Self.closest('.header-navigation').find(Self.data('target'));
            $(menu).slideToggle();
            $(menu).toggleClass('showen');
            return false;
        });
        subNavToggler.on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.submenu').slideToggle();
            return false;
        });
    }

    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    }
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

            return false;

        });
    }
    if ($('.search-popup__toggler').length) {
        $('.search-popup__toggler').on('click', function (e) {
            $('.search-popup').addClass('active');
            e.preventDefault();
        });
    }

    if ($('.search-popup__overlay').length) {
        $('.search-popup__overlay').on('click', function (e) {
            $('.search-popup').removeClass('active');
            e.preventDefault();
        });
    }
    $(window).on('scroll', function () {
        if ($('.scroll-to-top').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.scroll-to-top').fadeOut(500);
            }
        }
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });
    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function () {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };


                });
            });
        });

    };

    $(window).on('load', function () {
        if ($('.brand-two__carousel').length) {
            $('.brand-two__carousel').owlCarousel({
                loop: true,
                margin: 120,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 30
                    },
                    480: {
                        items: 3,
                        margin: 40
                    },
                    600: {
                        items: 3,
                        margin: 50
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 5
                    },
                    1200: {
                        items: 5
                    }
                }
            });
        }
        if ($('.testimonials-five__carousel').length) {
            $('.testimonials-five__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                navText: [
                    '<span class="testimonials-one__nav-left"><span class="testimonials-one__nav-text">Prev</span><i class="indext-icon-left-arrow"></i></span>',
                    '<span class="testimonials-one__nav-right"><span class="testimonials-one__nav-text">Next</span><i class="indext-icon-left-arrow"></i></span>',
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }
        if ($('.blog-one__carousel').length) {
            $('.blog-one__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });
        }
        if ($('.service-two__carousel').length) {
            $('.service-two__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    767: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
        if ($('.site-footer__brand-carousel').length) {
            $('.site-footer__brand-carousel').owlCarousel({
                loop: true,
                margin: 55,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 2,
                        margin: 30
                    },
                    480: {
                        items: 3,
                        margin: 40
                    },
                    600: {
                        items: 3,
                        margin: 50
                    },
                    991: {
                        items: 4
                    },
                    1000: {
                        items: 6
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
        if ($('.testimonials-two__carousel').length) {
            $('.testimonials-two__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                items: 1
            });
        }
        if ($('.testimonials-four__carousel').length) {

            $('.testimonials-four__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    ' ',
                    ' ',
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });


        }
        if ($('.testimonials-three__carousel').length) {

            $('.testimonials-three__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    ' ',
                    ' ',
                ],
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    }
                }
            });


        }
        if ($('.testimonials-one__carousel').length) {
            if ($('.testimonials-one__carousel').data('carousel-margin') !== undefined) {
                var testicarouselMargin = $('.testimonials-one__carousel').data('carousel-margin');
            } else {
                var testicarouselMargin = 80;
            }
            var testiOneCarousel = $('.testimonials-one__carousel').owlCarousel({
                loop: true,
                margin: testicarouselMargin,
                nav: true,
                navText: [
                    '<span class="testimonials-one__nav-left"><span class="testimonials-one__nav-text">Prev</span><i class="indext-icon-left"></i></span>',
                    '<span class="testimonials-one__nav-right"><span class="testimonials-one__nav-text">Next</span><i class="indext-icon-left"></i></span>',
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });

            $('.testimonials-one__navbtn-left').on('click', function () {
                testiOneCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.testimonials-one__navbtn-right').on('click', function () {
                testiOneCarousel.trigger('prev.owl.carousel');
                return false;
            });

        }
        if ($('.preloader').length) {
            $('.preloader').fadeOut('slow');
        }

        if ($('.custom-cursor__overlay').length) {

            // / cursor /
            var cursor = $(".custom-cursor__overlay .cursor"),
                follower = $(".custom-cursor__overlay .cursor-follower");

            var posX = 0,
                posY = 0;

            var mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function () {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 22,
                            top: posY - 22
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });

                }
            });

            $(document).on("mousemove", function (e) {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                mouseX = e.pageX;
                mouseY = e.pageY - scrollTop;
            });
            $("button, a").on("mouseenter", function () {
                cursor.addClass("active");
                follower.addClass("active");
            });
            $("button, a").on("mouseleave", function () {
                cursor.removeClass("active");
                follower.removeClass("active");
            });
            $(".custom-cursor__overlay").on("mouseenter", function () {
                cursor.addClass("close-cursor");
                follower.addClass("close-cursor");
            });
            $(".custom-cursor__overlay").on("mouseleave", function () {
                cursor.removeClass("close-cursor");
                follower.removeClass("close-cursor");
            });
        }

        if ($('.slider-one__carousel').length) {
            var slideOneWrap = $('.slider-one');
            var slideOneCarousel = $('.slider-one__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 7000
            });
            slideOneWrap.find('.slide-one__left-btn').on('click', function (e) {
                slideOneCarousel.trigger('next.owl.carousel');
                e.preventDefault();
            });
            slideOneWrap.find('.slide-one__right-btn').on('click', function (e) {
                slideOneCarousel.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }

        if ($('.slider-two__carousel').length) {
            var slideTwoWrap = $('.slider-two');
            var slideTwoCarousel = $('.slider-two__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 7000
            });
            slideTwoWrap.find('.slide-two__left-btn').on('click', function (e) {
                slideTwoCarousel.trigger('next.owl.carousel');
                e.preventDefault();
            });
            slideTwoWrap.find('.slide-two__right-btn').on('click', function (e) {
                slideTwoCarousel.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }
        if ($('.masonary-layout').length) {
            $('.masonary-layout').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item',

            });
        }
        if ($('.masonary-layout-no-grid-width').length) {
            $('.masonary-layout-no-grid-width').isotope({
                layoutMode: 'masonry',
                itemSelector: '.masonary-item'
            });
        }

        if ($('.post-filter').length) {
            var postFilterList = $('.post-filter li');
            // for first init
            $('.filter-layout').isotope({
                filter: '.filter-item',
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            // on click filter links
            postFilterList.children('span').on('click', function () {
                var Self = $(this);
                var selector = Self.parent().attr('data-filter');
                postFilterList.children('span').parent().removeClass('active');
                Self.parent().addClass('active');


                $('.filter-layout').isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        }

        if ($('.post-filter.has-dynamic-filter-counter').length) {
            // var allItem = $('.single-filter-item').length;

            var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

            activeFilterItem.each(function () {
                var filterElement = $(this).data('filter');
                var count = $('.gallery-content').find(filterElement).length;
                $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
            });
        }

        if ($('.team-three__carousel').length) {

            var teamThreeCarousel = $('.team-three__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    991: {
                        items: 2
                    },
                    1200: {
                        items: 2
                    },
                    1440: {
                        items: 3
                    }
                }
            });
            $('.team-three__btn-left').on('click', function () {
                teamThreeCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.team-three__btn-right').on('click', function () {
                teamThreeCarousel.trigger('prev.owl.carousel');
                return false;
            });
        }

        if ($('.related-product__carousel').length) {
            $('.related-product__carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                navText: [
                    '<i class="fa fa-long-arrow-left"></i>',
                    '<i class="fa fa-long-arrow-right"></i>'
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }

        if ($('.project-two__carousel').length) {
            $('.project-two__carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    991: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }

        if ($('.project-one__carousel').length) {
            if ($('.project-one__carousel').data('carousel-margin') !== undefined) {
                var projectCarouselMargin = $('.project-one__carousel').data('carousel-margin');
            } else {
                var projectCarouselMargin = 0;
            }
            $('.project-one__carousel').owlCarousel({
                loop: true,
                margin: projectCarouselMargin,
                nav: false,
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }

    });

})(jQuery);
$(document).ready(function(){
    // $('.mob_main_menu').hide();
    // $('.mob_sub_menu').hide();
    // $('.mob_peta_menu').hide();

    $('.menu_icon').click(function(){
        $('.mob_main_menu').slideToggle();
        $('.open_menu').toggleClass('fa-times fa-bars')
    })
    $('.main_menu > li > a').click(function(){
        $(this).parent('li').find('.sub_menu').slideToggle();
    })
    // $('.mob_sub_menu > li > a').click(function(){
    //     $(this).parent('li').find('.mob_peta_menu').slideToggle();
    // })

    
        $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    });

    $(document).ready(function () {
        // init Isotope
        var $grid = $('.grid').isotope({
            // options
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });

            $('button').removeClass('active');
            $(this).addClass('active');
        });
    })


    
})


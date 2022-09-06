$(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    var swiper2 = new Swiper(".day_box", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".day_next",
            prevEl: ".day_prev"
        }
    });
    
    var swiper3 = new Swiper(".photo_box", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".photo_next",
            prevEl: ".photo_prev"
        }
    });


        $('.noti_menu>h2').click(function () {
    
            $('.noti_menu>h2').removeClass('on')
            $(this).addClass('on')
    
            let idx = $(this).index()
            console.log(idx)
            $('.noti_text').removeClass('on')
            $('.noti_text').eq(idx).addClass('on')
        })
    
    
})
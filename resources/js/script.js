$(document).ready(function(){
  
    $('.js--section--features').waypoint(function(direction){
      
        if(direction=="down"){
       
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky')
        }
    }, {
             offset: '60px'
           })

    // this is for scrolling animation on click
    $('.js--scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop:$('.js--section-plans').offset().top},1000)
    })

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop:$('.js--section--features').offset().top},500)
    })

    // this if for scrolling animation on anchor click

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animations on scroll

    $('.js--section--features').waypoint(function(direction){
      
    // $('.js--wp--1').addClass('animate__fadeIn');
     const element = document.querySelector('.js--wp--1');
     element.classList.add('animate__animated', 'animate__fadeIn');
    })

           $('.js--section--steps').waypoint(function(direction){
      
            // $('.js--wp--1').addClass('animate__fadeIn');
             const element = document.querySelector('.js--wp--Mobile');
             element.classList.add('animate__animated','animate__fadeInUp');
            })

            $('.js--section--cities').waypoint(function(direction){
      
                // $('.js--wp--1').addClass('animate__fadeIn');
                 const element = document.querySelector('.js--wp--city');
                 element.classList.add('animate__animated','animate__fadeInUp');
                })

              $('.js--section-plans').waypoint(function(direction){
      
                // $('.js--wp--1').addClass('animate__fadeIn');
                 const element = document.querySelector('.js--wp--plan');
                 element.classList.add('animate__animated','animate__tada');
                })

            // mobile navigation

            $(".js--nav--icon").click(()=>{
                let nav = $(".js--main--nav");

                let icon =$(".js--nav--icon ion-icon")

                if(icon.attr('name')=='reorder-three-outline')
                {
                    icon.attr('name', 'close-outline');
                }else{
                    icon.attr('name', 'reorder-three-outline');
                }
                nav.slideToggle(200);
            })
})
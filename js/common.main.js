(function() {
  $('.main-nav .nav ul.ulslick').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow:4,
        infinite: false
      }
    },
    {
      breakpoint: 1480,
      settings: {
        slidesToShow:4,
        infinite: false
      }
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow:3,
        infinite: false
      }
    },
  ]
  });


    $('.top-slick ul').slick({
    slidesToShow: 1,
    dots: true,
  });


  $('.box-sertificates ul').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }
  ]
  });

    $('.news-slick ul').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
  });



  // $('.language, #city').on('click',function(){
  //   $(this).addClass('hover');
  // })



  $(document).on('click', '.language .current, #city .current,.language .label, #city .label',function(e){
      
        $(this).parent().toggleClass('hover')
      
  })

  $(document).on('click',function(e){

    if(!$(e.target).closest('.language').length){

      $('.language').removeClass('hover');


    } 


     if(!$(e.target).closest('.city').length){

      $('.city').removeClass('hover');


    } 

  })

  $('#city .list a').on('click',function(e){
    e.stopPropagation();
    e.preventDefault();
    $('#city .current').text($(this).text());
    $('#city').removeClass('hover');
  })

  $('.language .list a').on('click',function(e){
    e.stopPropagation();
    e.preventDefault();
    $('.language .current').text($(this).text());
    $('.language').removeClass('hover');
  })

  $(window).scroll(function(){
    $('#city,.language').removeClass('hover');
  })


  $('.tabs .nav a').click(function(e) {
    var elem, target;
    e.preventDefault();
    elem = $(this);
    target = elem.attr('href');
    elem.parent().addClass('active');
    elem.parent().siblings().removeClass('active');
    $('.tabs .content').children().not(target).removeClass('active');
    return $(target).addClass('active');
  });

  $('.box-content table').wrap('<div class="table-wrapper scroll-pane horizontal-only"></div>');




  $('.catalog-toggle').on('click', function(){
    $('.category-nav').slideToggle()

    $(this).toggleClass('open')
  })
  $('.mobile-toggle').on('click', function(){
    $(this).next().slideToggle()
  })



  $('.scroll-pane').jScrollPane({
    autoReinitialise: true
  });



$(window).resize(function(){
  if($(window).width() > 767){
     $('.category-nav').show()

  } else {
     $('.category-nav').hide()
  }
})


$('.show-more').on({
  click: function(e){


    e.preventDefault()

    function openMore(elem){

      elem.addClass('open');
      $('.part-visible').next().slideDown();

      elem.text(elem.data('alt'));

    }

    function closeMore(elem){

      elem.removeClass('open');
      $('.part-visible').next().slideUp();
      elem.text(elem.data('def'));

    }


    var action = (!$(this).hasClass('open')) ? openMore : closeMore;

    action($(this));
  }
})


$(window).on('load resize',function(){


if($(this).width() < 768){

    

    if(!$('.header-top').length){

      $('.header-bottom').before('<div class="header-top"></div>');

      $('.header-top').append($('.header-bottom .nav-container').clone(true))

      
    }
    if(!$('.header-top #city').length){
      $('.header-top').append($('<div class="city-container">').append($('.header-bottom #city').clone(true)))
    }

  } else  if($(this).width() < 1919){

    if(!$('.header-top').length){

      $('.header-bottom').before('<div class="header-top"></div>');

     
    }

    if(!$('.header-top .nav-container').length){
       $('.header-top').append($('.header-bottom .nav-container').clone(true)).append($('.header-bottom .lang-container').clone(true).toggleClass('pull-left pull-right'))
   }

   if(!$('.header-top .lang-container').length){
       $('.header-top #mobile-search').before($('.header-bottom .lang-container').clone(true).toggleClass('pull-left pull-right'))
   }

  } else {

    if($('.header-top').length){
      $('.header-top').remove();
    }

  }


})



$(window).on('load resize',function(){

  if($(this).width() < 1279){

    if($('.header-top .sitenav ').length) return;

    $('.header-top').prepend('<div class="mobile-nav"></div>');

    var activeClass= '',sitenavClass='';

    if( $('.header-top .nav-container li.active').length){
            sitenavClass = 'current active';
    }


    if($('.main-nav .ulslick .slick-slide.current.active').length){
      activeClass = 'current active';
      sitenavClass = '';
    }

    

    var mobileListTpl = '<div class="mobile-toggle"></div><div class="mobile-list"><ul><li class="sitenav '+sitenavClass+'"><a>[+sitenav+]</a><ul></ul></li><li class="mainnav '+activeClass+'"><a>[+mainnav+]</a><ul></ul></li></ul></div>';

    if(mobileNavTitle !== undefined){
      var endTpl = mobileListTpl.replace('[+sitenav+]', mobileNavTitle);
    } else {
      var endTpl = mobileListTpl.replace('[+sitenav+]', 'Навигация по сайту');
    }

    if(mobileNavTitle !== undefined){
      var endTpl = endTpl.replace('[+mainnav+]', mobileMainNavTitle);
    } else {
      var endTpl = endTpl.replace('[+mainnav+]', 'Виды металлопроката');
    }


    $('.mobile-nav').append(endTpl);
    var topNavList = $('.header-top .nav-container li').clone();

    var mainNavList = $('.main-nav .ulslick .slick-slide').not('.slick-cloned').clone().removeClass('slick-slide');

    $('.header-top .sitenav ul').append(topNavList);
  

    mainNavList.each(function(){

      var elem = this;
    

      $('.header-top .mainnav > ul').append(elem);
      

    })

    $('.mobile-list').addClass('scroll-pane').height( $(window).height() - $('.header-top').height() );


    $('.mobile-list').jScrollPane({
      autoReinitialise: true,
      height: $(window).height() - $('.header-top').height() + 'px',
    });

    $('.mobile-list li').each(function(){
      if($(this).children("ul").length){
        $(this).addClass('parent')
      }
    })



    $('.mobile-nav').after($('.question').clone(true));

    if($('.city-container').next('#mobile-search').length){
      
      

       $('.header-top .city-container').after($('.header-bottom .lang-container').clone(true).toggleClass('pull-left pull-right'))

       $('.header-top .lang-container').after($('.city-container').next('#mobile-search'))

    } else {
      $('.header-top .lang-container').after($('#search').clone(true).attr('id','mobile-search'))
    }

    



  } 

  if($(this).width() < 768){
    if(!$('#mobile-search').length){
       $('.header-top .city-container').after($('#search').clone(true).attr('id','mobile-search'))
    }
  }

  $('.sitenav  i,.parent > i').click(function(e){
    e.preventDefault();
    $(this).closest('.sitenav,.parent').toggleClass('active');
    $(this).closest('.sitenav,.parent').siblings().removeClass('active');
  })

   $('.sitenav  > a,.mainnav > a').click(function(e){
    e.preventDefault();
    $(this).closest('.sitenav,.parent').toggleClass('active');
    $(this).closest('.sitenav,.parent').siblings().removeClass('active');
  })


  $('.mobile-toggle').click(function(){
    $('.mobile-list').toggleClass('active')
    $(this).toggleClass('active');
  })


  $('#mobile-search').on('click',function(){

    if(!$(this).hasClass('active')){

        $(this).addClass('active');

    } 

  })

  $(document).on('click',function(e){

    if(!$(e.target).closest('#mobile-search').length){
       $('#mobile-search').removeClass('active');
    }
  })

  

})

$('.lang-mobile .label').on('click',function(){
   

    $('.lang-mobile').toggleClass('active')

})



$(document).on('click',function(e){
  if(!$(e.target).closest('.lang-mobile').length){
       $('.lang-mobile').removeClass('active');
    }
})



$('.main-nav .slick-slide').on('hover',function(){
       if($('.floatUl').length){
          $('.floatUl').remove();
        } 
});

$('.main-nav .slick-arrow').on('click',function(){
       if($('.floatUl').length){
          $('.floatUl').remove();
        } 
});


$('.main-nav .slick-slide').hover(function(e){


  var mainNavTop    = $('.main-nav').offset().top;
  var mainNavHeight = $('.main-nav').outerHeight();


  e.preventDefault();
  var elem = $(this);

   if($('.floatUl').length){
    $('.floatUl').remove();
  } 

  var eOl = elem.offset().left;

  var childList = elem.children('ul').clone();

  var elemBG = elem.children('ul').data('bg');

  if(!childList.length) return ;
  

  if(!$('.floatUl').length){
    $('body').prepend('<div class="floatUl">');
  } 

  if($('.floatUl').length){

    $('.floatUl').empty().append(childList).css({'top':mainNavTop + mainNavHeight,'left': eOl,'backgroundImage': 'url('+ elemBG +')'});
    $('.floatUl').show();


  }

  $('.floatUl').mouseleave(function(){

   if($('.floatUl').length){
      $('.floatUl').remove();
    } 

})

  $('.header-bottom').add($('.main-nav').next()).hover(function(){
    if($('.floatUl').length){
        $('.floatUl').remove();
      } 
  })

  $(window).scroll(function(){
     if($('.floatUl').length){
        $('.floatUl').remove();
      } 
  })

  $(window).resize(function(){
     if($('.floatUl').length){
        $('.floatUl').remove();
      } 
  })

  $(document).click(function(e){
    if(!$(e.target).closest('.floatUl').length){
      $('.floatUl').remove();
    }
  })

})


// Height change
// var maxHeight = 0;
// $(window).on('load resize',function(){


//   var compareElems = {
//   news: $('.box-news'),
//   calc: $('.box-calculator'),
//   };

// if($(window).width() < 1200){


//   for (var elem in compareElems ){

//   compareElems[elem].css('height','auto')

//   }

//   return;

// }





// for (var elem in compareElems ){

//   var elemHeight = compareElems[elem].height();

//   if( elemHeight > maxHeight ) {
//     maxHeight = elemHeight;
//   }

// }

// if(maxHeight != 0){

//   for (var elem in compareElems ){

// compareElems[elem].outerHeight(maxHeight)

// }

// }

// })


$(window).on('load resize',function(){
  if($('.main-nav .slick-arrow').length){
    $('.ulslick').addClass('show_buttons');
  } else {
    $('.ulslick').removeClass('show_buttons');
  }
})

// toggle the phone numbers while city changing
var phonesList = $('.phones ul');
var cityButtons = $('#city .list ul');

$('a',cityButtons).on('click',function(){

  $('li',phonesList).not('.'+$(this).data('city')).removeClass('active');
  $('.'+$(this).data('city')).addClass('active');

})
// toggle the phone numbers while city changing

}).call(this);

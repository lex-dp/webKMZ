// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(function(){

    $('.modal-open').on('click',function(e){

        e.preventDefault();

        $($(this).data('target')).show();
        $('body').addClass('overflowHidden')
    })

    $('.modal-img-open').on('click',function(e){

        e.preventDefault();

        $($(this).data('target')).show();
        var imgSrc = $(this).attr('href');

        $('img',$(this).data('target')).attr('src', imgSrc)
        $('body').addClass('overflowHidden')
    })


     $('.modal-close').on('click',function(){
        $(this).parents('.modal').hide();
        $('body').removeClass('overflowHidden')
    })

    // console.log($('.box-content p').width()) 
    // $('.table-wrapper').slimScroll({
    //     width: $('.box-content p').width(),
    //     height: $('.table-wrapper').height()
    // });
});

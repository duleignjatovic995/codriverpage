$(function () {
    $('#slides').superslides({
        hashchange: true,
        play: 2500,
        animation: 'fade' //po default-u je slide, treba da odlucimmo koji nam je lepsi model
    });

    $('#slides').on('mouseenter', function () {
        $(this).superslides('stop');
        console.log('Stopped')
    });
    $('#slides').on('mouseleave', function () {
        $(this).superslides('start');
        console.log('Started')
    });
});

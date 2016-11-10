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

function initMap() {
    var uluru = {lat: 44.7726008, lng: 20.4751682};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 10,
        draggable: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    marker.setMap(map);
}
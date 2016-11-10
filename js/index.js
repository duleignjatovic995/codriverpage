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
        center: {lat: 44.7726008, lng: 20.4751682},
        zoom: 15,
        draggable: true
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    marker.setMap(map);
}

/* jQuery for sign up form */

$(document).ready(function () {
    var datum = new Date();
    document.getElementById("datum").innerHTML = datum.toDateString();
});

$(document).ready(function () {

    $(".onclick").click(function () {
        $("#contactdiv").css("display", "inline-block");
        $(".navbar").css("z-index", "-1");
    });
    $("#contact-form #cancel-img").click(function () {
        $(".navbar").css("z-index", "9999");
        $(this).parent().parent().hide();
    });
    $("#contact-form #cancel").click(function () {
        $(".navbar").css("z-index", "9999");
        $(this).parent().parent().hide();
    });
// Contact form popup send-button click event.
    $("#send").click(function () {
        var name = $("#name-field").val();
        var email = $("#email-field").val();
        var contact = $("#contactno").val();
        var message = $("#message").val();
        if (name == "" || email == "" || contactno == "" || message == "") {
            alert("Please fill in all fields");//TODO
        } else {
            if (validateEmail(email)) {
                $(".navbar").css("z-index", "9999");
                $("#contactdiv").css("display", "none");
            } else {
                $("#email-field").css("border-color", "red");
            }
            function validateEmail(email) {
                var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                if (filter.test(email)) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    });
// Login form popup login-button click event.
    $("#loginbtn").click(function () {
        var name = $("#username").val();
        var password = $("#password").val();
        if (username == "" || password == "") {
            alert("Username or Password was Wrong");
        } else {
            $("#logindiv").css("display", "none");
        }
    });
});
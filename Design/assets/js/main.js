$(function () {
    $('a.item').click(function () {

        $('.item').removeClass('active');
        $(this).addClass('active');
    });

    $('.accordion').accordion();

    $('.submit').click(function () {
        $('.modal').modal('show');
    });

});
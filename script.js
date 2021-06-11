$(document).ready(function() {
    $(".text .line span").on('click', function() {
        $('.img .front, .img .back').css('transform', 'scale(0.3)');

        var imgSrc = $(this).attr('data-src');
        setTimeout(function(){
            $('.img .front, .img .back').css('transform', 'scale(1)');
            $('.img .front, .img .back').attr('src', imgSrc);
        }, 700);
    });
});
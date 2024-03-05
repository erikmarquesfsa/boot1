$(document).ready(function () {
    //esconder e mostrar o botão
    $(window).scroll(function () { //distancia que rola para aparecer
        if ($(this).scrollTop() > 160) {
            $('.go-top').fadeIn(250);
        } else {
            $('.go-top').fadeOut(250);
        }
    });

    //manda para o topo
    $('.go-top').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},1200);
    });
});
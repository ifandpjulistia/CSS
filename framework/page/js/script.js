$('.page-scroll').on('click', function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('body').animate({
        ScrollTop: elemenTujuan.offset().top - 50
    });

    e.preventDefault();
});
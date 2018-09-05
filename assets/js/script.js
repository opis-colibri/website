(function($){

    $(document).ready(function(){
        var visible = false;
        $(window).scroll(function(){
            var top = $(this).scrollTop();

            if (top >= 100 && !visible) {
                visible = true;
                $('#back-to-top').fadeIn().show();
            }
            if(top < 100 && visible){
                visible = false;
                $('#back-to-top').fadeOut();
            }
        });

        $('#back-to-top').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });

    });

    $('h2[id],h3[id],h4[id],h5[id],h6[id]').each(function () {
        var child = $('<a href="#' + this.getAttribute('id') + '" class="ml-1 text-dark link-anchor"><span class="fas fa-hashtag"></span></a>');
        this.appendChild(child.get(0));
    });

    $('[data-toggle=tooltip]').tooltip();
})(jQuery);
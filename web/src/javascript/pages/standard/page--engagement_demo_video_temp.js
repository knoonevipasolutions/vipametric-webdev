jQuery(function($) {

    var $engagementCont = $('.view-engagement'),
        $engagementName = $engagementCont.find('.engagement-name');

    if($engagementName.text() == 'Video Demo')
    {
        $.fancybox({
            href: 'https://www.youtube.com/v/0yeMNIJxIfs?rel=0&amp;controls=0&amp;showinfo=0',
            type: 'iframe'
        });
    }

});
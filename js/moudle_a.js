define(['jquery'], function($) {
    function alertElement() {

        var btn = $('#btn').on('click', function() {
            // console.log(1);
            $('body').css('background', 'red');
        })

    }
    return {
        a: alertElement
    }
})
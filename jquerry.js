$(function () {
    $('#changeButton')
        .css({
            'margin-left': '20px',
            'margin-bottom': '20px'
        })
        .click(function () {
            /*$('.news-comments-count').each(function () {
                if ($(this).text() >= 20) {
                    $(this).css('color', 'red');
                }
            });*/

            /*$('.news-item').first().html('<small>Мелккий текст</small>');*/

            $('#left-column h2').remove();
/*            $('#left-column').prepend('<h2>Новый заголовок новостей</h2>');*/

            //prepend - добавляет в начало, append - добавляет в конец

            let newElement = $('<h2></h2>');
            newElement.text('Срочные новости').css('color', 'red').css('margin-left', '20px');
            $('#left-column').prepend(newElement);
            // Вариант 1 - на JQuery

/*            let newElement = document.createElement('h2');
            newElement.innerHTML = 'New header';
            newElement.styleColor = 'red';
            let leftcolumn = document.getElementById('left-column');
            leftcolumn.insertBefore(newElement, leftcolumn.firstChild);
            // Вариант 2 - на JS* + отсутствует margin-left/


        });

    $('.news-time').click(function(){
/*        $(this).parents('.news-item').css('border', '1px solid red');*/

/*        $('#left-column').children().css('border', '1px solid red');*/
    });
});
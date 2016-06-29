
'use strict';

$(function() {

    var $html = $('#test').html();

    var $info = {
        header: 'Тест по программированию',
        questions: [{
            title: 'Вопрос №1',
            radioname: 'first',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 2
            },
            {
            title: 'Вопрос №2',
            radioname: 'second',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 2
            },
            {
            title: 'Вопрос №3',
            radioname: 'third',
            id: ['1','2','3'],
            answers:['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'],
            correct: 2
      }],

        submit: 'Проверить мои результаты'



    };

    localStorage.setItem('test', JSON.stringify($info));

    var $data = JSON.parse(localStorage.getItem('test'));


    var $content = tmpl($html, $data);

    $('.wrapper').append($content);


    function showModal(e) {
        e.preventDefault();


        var $modal = $('<div class="modal"></div>');
        var $result = 0;
        var $answer = $('input:checked');
        var $correct = [];

        for (var i = 0; i<$data.questions.length; i++) {
                $correct[i] = $data.questions[i].correct;
            if ($($answer[i]).attr('id') == $correct[i]) {
                $result += 1;


                $modal.append('<p class="correct">Ответ на ' + (i+1) + ' вопрос <b>правильный</b></p>');
            } else {
                $modal.append('<p class="incorrect">Ответ на ' + (i+1) + ' вопрос <b>неправильный</b></p>');
            }
        }


        $modal.append('<h4 class="result">Всего правильных ответов: ' + $result + '</h4><hr>');

        if ($result == $data.questions.length) {
            $modal.append('<h>Вы успешно прошли тест!</h4>');
        } else {
            $modal.append('<h4>Tест не пройден</h4>');
        }

        $modal.append('<button>Начать заново</button>');
        $('body').append($modal);

        $('button').one('click', function (e) {
            e.preventDefault();
            $modal.detach();
            $('input').attr('checked', false);
        })
    }

    $('button').on('click', showModal);

    return this;
});

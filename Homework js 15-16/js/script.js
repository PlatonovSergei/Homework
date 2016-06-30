$(function () {

    $('.button').on('click', search);

    $('.search').keypress(function () {
        if (event.keyCode == 13) {
            search;
        } else return;
    });

    function search(e) {
        e.preventDefault();
        $('img').remove();
        var $searchInfo = $('.search').val();

        $.ajax({
          url: 'https://pixabay.com/api/?key=2842512-2b073a9dedf303b614df7c2ec&q=' + $searchInfo + '&image_type=photo',
          dataType: 'jsonp',
          success: function (data) {
              var $results = data.hits;
              for (var i = 0; i < data.hits.length; i++) {
                    $('.result').append('<img src="' + $results[i].previewURL + '">');
                }

            },
            error: function () {
                alert('Error!');
            }
        });

        $('.search').val('');
    };

  //  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    function Human(name, age, gender, height, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;


    Human.prototype.does = function() {
        console.log('Занятие: ' + this.work);
    }


    function Worker(name, age, gender, height, weight, placework, salary) {
        Human.apply(this, arguments);
        this.placework = placework;
        this.salary = salary;
        this.work = 'Я работаю!';
    }

    function Student(name, age, gender, height, weight, study, scholarship) {
        Human.apply(this, arguments);
        this.study = study;
        this.scholarship = scholarship;
        this.work = 'Смотрю сериалы';
    }


    var rita = new Worker('Rita', 12, 'female', 195, 100, 'magazin', 400);
    console.log(rita);
    rita.does();

    var stepan = new Worker('Stepan', 99, 'male', 132, 190, 'plant', 200);
    console.log(stepan);
    stepan.does();

    var zina = new Student('Zina', 48, 'female', 155, 59, 'school', 900);
    console.log(zina);
    zina.does();

    var petro = new Student('Petro', 9, 'male', 179, 30, 'university', 10);
    console.log(petro);
    petro.does();

});

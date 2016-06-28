(function() {

  document.addEventListener('DOMContentLoaded', contentResume);

 function contentResume() {

      var info = {
      header: 'Платонов Сергей Викторович',
      photo: 'img/img.jpg ',
      line1: 'Работаю в ресторанной сфере',
      line2: 'Хочу учить фронтенд,потому что:',
      line3: 'Работа в ресторанной сфере не очень перспективна',
      line4: 'Денег не достаточно',
      line5: 'Жить хорошо хочется',
      line6: 'Мой контактный телефон',
      contact: '+380507124406',
      line7: 'Мой профиль вкотакте',
      line8: 'https://vk.com/id85341111Vkontakte',
      link: 'Vkontakte',
      line9: 'Мой фидбек:',
      line10: 'Сделаю хороший сервис на любом мероприятии'
    };

      var addResume = document.getElementById('addResume');
  		var tmpl = _.template(document.getElementById('resume').innerHTML);

    addResume.innerHTML = tmpl(info);
};
})();

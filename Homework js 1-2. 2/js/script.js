var arr = [];
for(var i = 0; i < 5; i++) {
  arr.push(prompt('Введите' + (i+1) + '-е имя'));
}

var userName = prompt('Введите имя пользователя');

var rightName = false;
for(var i = 0; i < arr.length; i++) {
  if(arr[i] == userName) {
    rightName = true;
    break;
  }
}
if (rightName) {
  alert(userName + ',Вы успешно вошли');
}
  else {
  alert('Указанного пользователя не существует!');
}

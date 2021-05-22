// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает 
// кнопку Создать, после чего рендерится коллекция.При нажатии 
// на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 
// параметр amount - число.Функция создает столько div, сколько 
// указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше 
// предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputEl = document.querySelector('#controls > input');
const CreateBtn = document.querySelector('#controls > button[data-action="render"]');
const destroyBtn = document.querySelector('#controls > button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');

inputEl.addEventListener('input', function (event) {
  let inputValue = Number.parseInt(event.currentTarget.value);
        let WidthAtribute = 20;
      let HeightAtribute = 20;
    for (let i = 1; i <= inputValue; i += 1){
      const box = document.createElement('div');
      WidthAtribute += 10;
      HeightAtribute += 10;
      box.style.width = WidthAtribute + 'px';
      box.style.height = HeightAtribute + 'px';
      box.style.backgroundColor = randomColor(inputValue);

      CreateBtn.addEventListener('click', function () {
  boxesEl.appendChild(box);
});
      // boxesEl.appendChild(box);
    }
});


const randomColor = () => {
  return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
}
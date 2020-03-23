window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'), // Кнопки  для переключения...
      info = document.querySelector('.info-header'), // Родитель кнопок выше
      tabContent = document.querySelectorAll('.info-tabcontent'); // Сами элементы, статьи в нашем случае, которые будем переключать.

  // Функция, которая будет скрывать табы.  
  function hideTabContent(a) { // Вспомогательная переменная a, нужна для того чтобы знать какой именно элемент мы будем удалять, а
                               // так как мы хотим оставить только один, то используем цикл.
    for(let i = a; i < tabContent.length; i++) { // Начиная с a-го, то есть, как например внизу с 1-го, то есть со второго так как массивы с 0-ля                                      
      tabContent[i].classList.remove('show'); // удалить класс 'show'
      tabContent[i].classList.add('hide'); // добавить класс 'hide' для того чтоб полностью скрыть элемент.
    }
  }
  
  hideTabContent(1); // Удалятся все кроме 1-го.

  // Функция, которая будет добавлять табы. 
  function showTabContent(b) {
    if(tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide'); // Делаем обратное предыдущей функции.
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function(e) {
    let target = e.target; // Куда нажали.

    if(target && target.classList.contains('info-header-tab')) { // в условии мы проверям, что то куда мы нажали, то есть тот элемент содержит класс
                                                                 // info-header-tab. То есть это и есть наш кнопки, которые находятся в переменной tab
      for(let i = 0; i < tab.length; i++) { // Проходим по тому циклу и смотрим. На какую именно кнопку мы нажали.
        if(target == tab[i]) { // И если то куда мы нажали совпадает с кнопкой на которую мы нажали, то мы её и активируем. Связь кнопок с элементами, которые хотим убрать.
          hideTabContent(0); // Cкрыть все элементы. Теперь у всех элементов есть класс 'hide'
          showTabContent(i); // Добавить
          break;
        }
      }
    }
  });
});
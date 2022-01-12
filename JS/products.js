//Добавляем слушателя по клику
/*const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const remaveListenerBtn = document.querySelector('.js-remove-listener');


targetBtn.addEventListener('click', OnTargetButtonClick); 
console.log('click')


function handleTargetButtonCLick(){
    console.log('клик');
}

function targetButtonClickHandler() {
    console.log('клик');
}

function OnTargetButtonClick() {
    console.log('клик');
}

function logMessage() {
    console.log('клик по целевой кнопке')
}*/


/*// При клике на одну кнопку добавляю слушателя на другую

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const remaveListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', () =>{
    console.log('вешаю слушателя событий');
    targetBtn.addEventListener('click', () => {
        console.log('клик по целевой кнопке');
    });
});
function logMessage() {
    console.log('клик по целевой кнопке')
}*/

/*//снимаем слушателя событий

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const remaveListenerBtn = document.querySelector('.js-remove-listener');

addListenerBtn.addEventListener('click', (event) =>{
    console.log(event)
    console.log('вешаю слушателя событий');

    targetBtn.addEventListener('click', onTargetBtnClick);
});

remaveListenerBtn.addEventListener('click', () => {
    console.log(event)
    console.log('снимаем слушателя событий c целевой кнопки');

    targetBtn.removeEventListener('click', onTargetBtnClick);
})
function onTargetBtnClick(event) {
    console.log('клик по целвой кнопке');
}


function logMessage(event) {
    console.log(event)
    console.log('клик по целевой кнопке');
};*/

/*const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);*/

export const products = [
    {
      id: 1,
      title: 'Macbook',
      imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG35.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga autem maxime dolorum velit similique aliquid incidunt, delectus dolore facilis.',
    },
    {
      id: 2,
      title: 'Player',
      imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG35.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga autem maxime dolorum velit similique aliquid incidunt, delectus dolore facilis.',
    },
    {
      id: 3,
      title: 'Tetris',
      imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG35.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga autem maxime dolorum velit similique aliquid incidunt, delectus dolore facilis.',
    },
    {
      id: 4,
      title: 'Phone',
      imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG35.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga autem maxime dolorum velit similique aliquid incidunt, delectus dolore facilis.',
    },
    {
      id: 5,
      title: 'Playstation',
      imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG35.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga autem maxime dolorum velit similique aliquid incidunt, delectus dolore facilis.',
    },
  ];


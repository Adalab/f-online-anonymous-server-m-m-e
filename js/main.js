'use strict';

const header = document.querySelector('.page__header');
const nav = document.querySelector('.nav-active');

const changeButtonImage = event => {
  const target = event.currentTarget;
  const classes = target.childNodes[0].classList;
  if (classes[0] ==='nav__button-trigger'){
    classes.remove('nav__button-trigger');
    classes.add('nav__button-close');
  } else {
    classes.remove('nav__button-close');
    classes.add('nav__button-trigger');
  }
}

const addMenuButton = container => {
  const newContainer = document.createElement('div');
  newContainer.classList.add('nav__button-container');
  newContainer.addEventListener('click', changeButtonImage);

  const newButton = document.createElement('img');
  newButton.classList.add('nav__button-trigger');
  
  newContainer.appendChild(newButton);
  container.appendChild(newContainer);
}


addMenuButton(header);

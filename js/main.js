'use strict';

const header = document.querySelector('.page__header');

const addMenuButton = () => {
  const newContainer = document.createElement('div');
  newContainer.classList.add('nav__trigger-container');

  const newButton = document.createElement('img');
  newButton.classList.add('nav__trigger-image');
  
  newContainer.appendChild(newButton);
  header.appendChild(newContainer);
}

addMenuButton();
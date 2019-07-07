'use strict';

const menuTrigger = document.querySelector('.nav-trigger');
const menuClose = document.querySelector('.nav-close');
const menu = document.querySelector('.nav');


const handleMenu = () => {
  menu.classList.toggle('active');
  menuTrigger.classList.toggle('hidden');
} 

menuTrigger.addEventListener('click', handleMenu);
menuClose.addEventListener('click', handleMenu);
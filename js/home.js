"use strict";

const navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close'),
  navBar = document.querySelector('.nav');

navToggle.addEventListener('click', function(){
  navBar.classList.toggle('nav-open');
});

navClose.addEventListener('click', function(){
  navBar.classList.toggle('nav-open');
});
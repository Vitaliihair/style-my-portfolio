// import { gsap } from 'gsap-core';
ymaps.ready(Init);

// let center = [43.5951976893704,39.717826278298716];

function Init(){
    let map = new ymaps.Map('map', {
        center: [43.5951976893704,39.717826278298716],
        zoom: 18
    });

    let placemark = new ymaps.Placemark ([43.5951976893704,39.717826278298716], {}, {
       searchControlProvider: 'yandex#search'
    });


    map.geoObjects.add(placemark);

    map.geoObjects.add(placemark);

}

const button = document.getElementById('btn');
// const button = document.getElementById("myButton");


function shakeButton() {
    let button = document.getElementById('btn');
    
    // Трясем кнопку 4 раза
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        button.style.transform = 'translate(3px, 0)';
      }, i * 100);
      setTimeout(() => {
        button.style.transform = 'translate(-3px, 0)';
      }, (i * 100) + 50);
      setTimeout(() => {
        button.style.transform = 'translate(0, 0)';
      }, (i * 100) + 100);
    }
  
    // Задержка перед следующим тряском
    setTimeout(() => {
      shakeButton();
    }, 2000);
  }
  
  shakeButton();


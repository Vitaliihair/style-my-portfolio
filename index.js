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

}

// ymaps.ready(init);

// function init() {
//     var myMap = new ymaps.Map('map', {
//             center: [55.76, 37.64],
//             zoom: 10
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//     // Создаем геообъект с типом геометрии "Точка".
//         myGeoObject = new ymaps.GeoObject({
//             // Описание геометрии.
//             geometry: {
//                 type: "Point",
//                 coordinates: [55.8, 37.8]
//             },
//             // Свойства.
//             properties: {
//                 // Контент метки.
//                 iconContent: 'Я тащусь',
//                 hintContent: 'Ну давай уже тащи'
//             }
//         }, {
//             // Опции.
//             // Иконка метки будет растягиваться под размер ее содержимого.
//             preset: 'islands#blackStretchyIcon',
//             // Метку можно перемещать.
//             draggable: true
//         }}
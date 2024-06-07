let center = [43.5951976893704,39.717826278298716];

function Init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 18
    });

    let mark = new ymaps.placemark (center, {}, {});

    map.cotrols.remove('geolocationControl');
    map.cotrols.remove('searchControl');
    map.cotrols.remove('zoomControl');
    map.cotrols.remove('scrollZoom');
    map.cotrols.remove('rulerControl');

}
ymaps.ready(Init);

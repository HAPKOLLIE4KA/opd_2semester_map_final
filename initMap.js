var myMap

ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [56.473936, 84.949873],
        zoom: 15
    },
    {
        restrictMapArea: [
            [56.696908, 84.632895],
            [56.322786, 85.269268]
        ]
    },)  
}   



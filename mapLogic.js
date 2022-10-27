var $ = require('jquery')

ymaps.ready(init);

function init() {
    var clickYmapsNode = undefined // отвечает за фокус

    $('.switch-text-menu').on('click', (event) => {
       myMap.geoObjects.removeAll();
        var id = event.target.id //получаю id элемента DOM-дерева       
       
        
        if (event.target === clickYmapsNode) //если пользователь жмёт на одну и ту же кнопку, то карта просто очищается от меток
        {
            clickYmapsNode = undefined 
            
        } else {

            clickYmapsNode = event.target //записываю в переменную тот элемент, на который нажали

            $.post (             //запрос в БД
                'arrayPlacemarkSql.php',
                {type: id},     //передача id, полученного выше, в php-файл
                (data) => {     //data - результат из БД в json-формате
                        
                    for(let object of JSON.parse(data))  //object - каждый объект из массива данных. Обязательно нужно распарсить
                    {
                    
                    const myPlacemark = new ymaps.Placemark(  //создаю метку на карте
                        [object["lat"], object["lon"]], //координаты метки
                        {
                            iconCaption: object["nameObject"], //название объетка
                        },
                        {
                            preset: iconYmaps[id] //иконка метки
                        }
                        
                    )

                    myPlacemark.events.add('click', (event) => {     //добавление события клика на какую-либо метку на карте
                        const coordinates = event.get("target").geometry.getCoordinates(); //получение координат метки, на которую кликнули
                        

                        $.post(
                            'informaitionPlacemarkSql.php',
                            {coordinates: coordinates},
                            (strHTML) => {
                                menuInfo.style.display = 'block'
                                

                                //menuInfo.innerHTML += strHTML
                                blockInfo.innerHTML = strHTML
                            }
                        )
                    })
                    
                    myMap.geoObjects.add(myPlacemark)  //добавление метки на карту
                    
                    }
                } 
            )
        } 
    })

   
    
}



const textMenuList = document.querySelectorAll(".switch-text-menu") //заголовки выбора
const textHeaderMenu = document.querySelectorAll(".header-text-menu") //заголовки меню
const headerLine = document.querySelector("hr")  //линия
const itemSwitchStyle = document.querySelector(".slider") //ползунок, меняющий тему
const bodyWeb = document.querySelector("body") //тело 
const menuSelectors = document.querySelectorAll(".menu") //менюшка
const menuInfo = document.querySelector(".information-block")
const blockInfo = document.querySelector(".block-info")
const closeIcon = document.querySelector(".close") //иконка крестика


let clickNode = undefined 
let switchStyle = false

//объект, хранящий цвета для светлой и тёмной темы + шрифты
let themeStyle = {
    bodyBackgroundColor: "white",
    menuBackgroundColor: "white",
    buttonWebColor: "white",

    textSwitchColor: "black",
    textHeaderColor: "rgb(32, 29, 29)",
    defaultTextColor: "black",

    defaultFontSize: "16px",
    clickFontSize: "17px",
    mousedownFontSize: "14px",

    lineColor: "gray",
}

//объект хранящий иконки для меток на яндекс карте

const iconYmaps = {
    "Памятник":'islands#blueCircusIcon',
    "Корпус": "islands#blueEducationIcon",
    "Архитектура": 'islands#blueWorshipIcon',
    "Общежитие": 'islands#blueHotelIcon',
    "Студенческие отряды": 'islands#bluePersonIcon',
    "Клуб по интересам": 'islands#blueInfoIcon',
    "Спортивный клуб": 	'islands#blueSportIcon',
    "Около общежитий": 'islands#blueFoodIcon',
    "Около корпусов": 'islands#blueFoodIcon',
    "Парк": 'islands#blueVegetationIcon',
    "Кинотеатр": 'islands#blueCinemaIcon',
    "Музей": 'islands#blueLeisureIcon'
}
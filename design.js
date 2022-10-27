//обновление цветов для светлой и тёмной темы
function updateColor(object, switchStyle)
{
    object.bodyBackgroundColor = switchStyle ? "rgb(18, 18, 20)" : "white"
    object.menuBackgroundColor = switchStyle ? "rgb(37, 36, 39)" : "white"
   

    object.textSwitchColor = switchStyle ? "white" : "black"
    object.textHeaderColor = switchStyle ? "white" : "rgb(32, 29, 29)"
    object.defaultTextColor = switchStyle ? "white" : "black"
    
    object.lineColor = switchStyle ? "black" : 'gray'
    return object
}


//обработка событий для пунктов выбора из меню
for (let textMenu of textMenuList)
{
    
    //фокус на выбор из меню
    textMenu.addEventListener("mouseover", 
        (event) => {
            event.target.style.color = "rgb(255,51,153)"
        }
    )

    // потеря фокуса на выбор из меню    
    textMenu.addEventListener("mouseout", 
        (event) => {
            event.target.style.color = themeStyle.defaultTextColor
        }
    )

    // клик выбора из меню
    textMenu.addEventListener("click",
    (event) => {
        
        
        if (clickNode === event.target) //нажатие на выбранный пункт
        {

            clickNode = undefined
            event.target.style.fontWeight = "500"
            event.target.style.fontSize = themeStyle.defaultFontSize
        }
        else if (clickNode !== undefined) //нажатие на другой пункт
        {
            clickNode.style.fontWeight = "500"
            clickNode.style.fontSize = themeStyle.defaultFontSize
        
            event.target.style.fontWeight = "bold"
            event.target.style.fontSize = themeStyle.clickFontSize
            clickNode = event.target
        }
        else {       //если пользователь не выбирал пункты
            clickNode = event.target
            event.target.style.fontSize = themeStyle.clickFontSize
            event.target.style.fontWeight = "bold"
            }
        }

        
    )

        //кнопка мыши внизу -> поднимается вверх
    textMenu.addEventListener("mousedown", 
        (event) => {
            event.target.style.fontSize = themeStyle.mousedownFontSize
        } 
    )

    textMenu.addEventListener("mouseup", 
        (event) => {
            event.target.style.fontSize = themeStyle.defaultFontSize
        }
    )
}

//изменение темы при нажатии на слайдер
itemSwitchStyle.addEventListener("click", 
    () => {
        
        switchStyle = !switchStyle
        themeStyle = updateColor(themeStyle, switchStyle)

        bodyWeb.style.backgroundColor = themeStyle.bodyBackgroundColor
        
        headerLine.style.backgroundColor = themeStyle.lineColor
        

        for (let item of textMenuList)
        {
            item.style.color = themeStyle.textSwitchColor
        }

        for (let item of textHeaderMenu)
        {
            item.style.color = themeStyle.textHeaderColor
        }

        for (let menu of menuSelectors)
        {
            menu.style.backgroundColor = themeStyle.menuBackgroundColor
            menu.style.boxShadow = switchStyle ? "0px 5px 20px black" : "0px 5px 20px silver"
        }

        
    }
)

closeIcon.addEventListener("click", () => {
    menuInfo.style.display = "none"
    console.log("tap")
}) 
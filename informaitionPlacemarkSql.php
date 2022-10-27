<?php 

    $address = "localhost";
    $name = "root";
    $pass = "";
    $namedb = "datamapobject";

    $coordinates = $_POST['coordinates'];

    $link = mysqli_connect($address, $name, $pass, $namedb); //подключение
    $sql = "SELECT `description`,`nameObject`,`address`, `mail`, `telephone`, `vk`, `inst`, `offsite` FROM `objects` WHERE `lat` = \"$coordinates[0]\" AND `lon` = \"$coordinates[1]\"";
    if ($link == FALSE) {       //проверка на успешность подключения
        echo "Error connecting to database".misqli_connect_error(); //подключение не удалось вывод последней ошибки
    } else {
        //echo "Connecting";
        mysqli_set_charset($link,'utf8'); //сразу после подключения устанавливается кодировка

        $resultQuiry = mysqli_query($link, $sql); //возращает ссылку на результат запроса

        $rows = mysqli_fetch_all($resultQuiry, MYSQLI_ASSOC); //получение массива данных
        
        $strHTML = "";

        $row = $rows[0];
        if ($row['nameObject'] != '') {
            $strHTML .= "<div class='div-text-info'>  
            <span class='name-object'> $row[nameObject] </span>
        </div>";
        }

        if ($row['description'] != '') {
            $strHTML .= "<div class='div-text-info'>  
                <span class='description'> $row[description] </span>
            </div>";
        }

        if ($row['mail'] != '' || $row['offsite'] != ''|| $row['telephone'] != ''|| $row['vk'] != '' || $row['inst'] != '') {

            $strHTML .= "<hr/>
            <div class='composite-block div-text-info'>
                <div>
                    <img width='16' height='16' src='https://cdn-icons-png.flaticon.com/512/2343/2343736.png'>
                </div>
                <div class='rigth-composite'>
                    <span class='span-header-text-info span-text-info'> Контакты </span>";
                

            if ($row['mail'] != '') $strHTML .= "<span class='span-text-info'> email: $row[mail] </span>";
            if ($row['offsite'] != '') $strHTML .= "<span class='span-text-info'> Оф. сайт: $row[offsite] </span>";
            if ($row['vk'] != '') $strHTML .= "<span class='span-text-info'> VK: $row[vk] </span>";
            if ($row['inst'] != '') $strHTML .= "<span class='span-text-info'> inst: $row[inst] </span>";
            if ($row['telephone'] != '') $strHTML .= "<span class='span-text-info'> Телефон: $row[telephone] </span>";

            $strHTML .= "</div> </div> ";
        }

        

        if ($row['address'] != '') {
            $strHTML .= "<hr/>
            <div class='composite-block div-text-info'> 
                <div> 
                    <img width='16' height='16' src = 'https://cdn-icons-png.flaticon.com/512/15/15979.png'>
                </div> 

                <div class='rigth-composite'>
                    <span class='span-header-text-info span-text-info'> Адрес </span>
                    <span class='span-text-info'> $row[address] </span>
                </div>
                
            </div>";
        }
        
        
        echo $strHTML;
    }

?>
<?php
    $address = "localhost";
    $name = "root";
    $pass = "";
    $namedb = "datamapobject";
    
    $type = htmlentities($_POST['type']);
    

    $link = mysqli_connect($address, $name, $pass, $namedb); //подключение
    $sql = "SELECT `lat`,`lon`, `nameObject` FROM `objects` WHERE `typeObject` = \"$type\" ";
    if ($link == FALSE) {       //проверка на успешность подключения
        echo "Error connecting to database".misqli_connect_error(); //подключение не удалось вывод последней ошибки
    } else {
        mysqli_set_charset($link,'utf8'); //сразу после подключения устанавливается кодировка

        $resultQuiry = mysqli_query($link, $sql); //возращает ссылку на результат запроса

        $rows = mysqli_fetch_all($resultQuiry, MYSQLI_ASSOC); //получение массива данных
        
        echo json_encode($rows);  //отправка данных   
    }
?>
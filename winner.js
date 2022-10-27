var $ = require('jquery')

$('.switch-text-menu').on('click', (event) => {
    var id = event.target.id
    
    $.post (
        'sql.php',
        {type: id},
        (data) => {   
            for(let object of JSON.parse(data))
            {
                console.log(object);
            }
        } 
    )   
})


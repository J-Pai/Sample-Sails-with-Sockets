var listPeople = $('#list-people');

io.socket.post('/people/join',
    function (data, jwres) {
        console.log(data);
        listPeople.html("");
        $.post('/people/findAll',
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    listPeople.append('<li>' + data[i].name + '</li>');
                }
            }
        );
    }
);

io.socket.on('update', 
    function(msg){
        console.log(msg);
        
        listPeople.html("");
        $.post('/people/findAll', 
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    listPeople.append('<li>' + data[i].name + '</li>');
                }
            }
        );
    }
);



$('#person-data').submit(function(e) {
    e.preventDefault();

    $.post(
        "/people/create",
        $('#person-data').serialize(),
        function(message){
        
        }
    );
    $('#person-data')[0].reset();
});


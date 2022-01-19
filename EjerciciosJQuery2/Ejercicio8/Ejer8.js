$('button:eq(0)').click(function(){
        $('div').append('<form><label>Correo</label><br/><input type="text"/><br/><label>Contraseña</label><br/><input type="password"/><br/>');
    })
    $('button:eq(1)').click(function(){
        alert($('input:eq(0)').val()+$('input:eq(1)').val())

})

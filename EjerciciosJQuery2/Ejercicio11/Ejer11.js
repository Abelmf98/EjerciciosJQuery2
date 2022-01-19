$(document).mousemove(function(e){
        $('span:eq(0)').text(e.pageX)
        $('span:eq(1)').text(e.pageY)
})

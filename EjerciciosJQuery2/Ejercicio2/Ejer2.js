let colores = ['red', 'green', 'yellow', 'steelblue', 'cyan']

for (let i = 0; i <5; i++) {
    $(`table tr:nth-child(${i+1})`).click(function () {
        $(this).css('background-color', colores[i])
    })
}
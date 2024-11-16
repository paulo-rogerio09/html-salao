window.addEventListener('load', function(){
    MascaraTele();
});

function MascaraTele(){
    var teleMask = IMask(
        document.getElementById('telefone'), {mask:'(00) 00000-0000' }
    )
}


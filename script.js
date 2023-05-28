function verificarDia() {
    var dia = document.getElementById('dia').value.toLowerCase();

    var mensaje = '';

    switch (dia) {
        case 'lunes':
            mensaje = 'Hoy es lunes.';
            break;
        case 'viernes':
            mensaje = 'Hoy es viernes.';
            break;
        case 'sábado':
        case 'sabado':
        case 'domingo':
            mensaje = 'Hoy es fin de semana.';
            break;
        default:
            mensaje = 'Hoy no es ni lunes, ni viernes, ni fin de semana.';
            break;
    }

    document.getElementById('mensaje').textContent = mensaje;
    document.getElementById('resultado').classList.remove('hidden');
}

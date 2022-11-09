const Ticket=200;

function resumen() {
    var cantidadTicket=document.getElementById('inputCantidad').value;
    var descuento=document.getElementById('inputCategoría').value;
    var precio=cantidadTicket * (Ticket - ((Ticket * descuento)/100));
    document.getElementById('compraTotal').value= 'Total a pagar: $'+precio;
}

function BuscarText(texto, buscar) {
  var regex = new RegExp(buscar, 'gi');
  return texto.replace(regex, match => "<font color=red>"+match+"</font>");
}

function validar(){
    var parrafo = document.getElementById("parrafo").value;
    var texto = document.getElementById("texto").value;
    var busqueda = BuscarText(parrafo, texto);

    document.getElementById('respuesta').innerHTML=busqueda;
}
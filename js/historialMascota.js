let btnVerTablaHis = document.getElementsByClassName("btn-historial");
let tableHis = document.getElementById("table-historial");

let tableMascotas = document.getElementById("table-mascotas");


let inputNomMascota = document.getElementById("nomMascota");

/*for (let i = 0; i < btnVerTablaHis.length; i++) {


    btnVerTablaHis[i].addEventListener("click", function(e) {


    })

}*/



/*$('#productList').find('tr').find('.btn-edit').each(function(index) {
    $(this).on("click", function() {
        alert(index);
    });
});*/







for (let i = 0; i < btnVerTablaHis.length; i++) {

    btnVerTablaHis[i].addEventListener("click", function(e) {

        var rowId = e.target.parentNode.parentNode.id;
        //this gives id of tr whose button was clicked
        var data = document.getElementById(rowId).querySelectorAll(".row-data");

        var name = data[0].innerHTML;
        inputNomMascota.setAttribute("value", name);
        tableHis.style.display = "block";

    });
}



/*window.onload = function() {

    // creamos los eventos para cada elemento con la clase "boton"
    let elementos = document.getElementsByClassName("boton");
   
}

window.onload = function() {

    // creamos los eventos para cada elemento con la clase "boton"
    for (let i = 0; i < btnVerTablaHis.length; i++) {

        // cada vez que se haga clic sobre cualquier de los elementos,
        // ejecutamos la función obtenerValores()

        btnVerTablaHis[i].addEventListener("click", obtenerValores);
    }
}*/

/*function obtenerValores(e) {
    var valores = "";

    // vamos al elemento padre (<tr>) y buscamos todos los elementos <td>
    // que contenga el elemento padre
    var elementosTD = e.srcElement.parentElement.getElementsByTagName("td");

    // recorremos cada uno de los elementos del array de elementos <td>
    for (let i = 0; i < elementosTD.length; i++) {

        // obtenemos cada uno de los valores y los ponemos en la variable "valores"
        valores += elementosTD[i].innerHTML + "\n";
        inputNomMascota.setAttribute("value", valores);
    }

    alert(valores);
}*/
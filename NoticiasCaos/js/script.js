$(document).ready(function () {

    $("#error1").hide()

    $("#exampleInputUsuario").blur(function () {
        console.log("exampleInputUsuarioperdió el foco")

        //VALIDACIÓN
        if ($("#exampleInputUsuario").val().indexOf("@", 0) == -1 || $("#exampleInputUsuarioil").val().indexOf(".", 0) == -1) {
            $("#error1").html("Ingrese de manera correcta su correo electrónico")
            $("#error1").fadeIn()
        }


    });
    $("#exampleInputUsuario").focus(function () {
        console.log("exampleInputUsuario ganó el foco")
        $("#error1").fadeOut()
    });
    $("input[type=password]").keyup(function () {

        var pswd = $(this).val();
        // Validación Cantidad de Caracteres
        if (pswd.length < 8) {
            $("#length").removeClass("valid").addClass("invalid");
        } else {
            $("#length").removeClass("invalid").addClass("valid");
        }
        //Validación al menos una letra
        if (pswd.match(/[A-z]/)) {//match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
            $("#letter").removeClass("invalid").addClass("valid");
        } else {
            $("#letter").removeClass("valid").addClass("invalid");
        }
        //Validar mayúsculas
        if (pswd.match(/[A-Z]/)) {
            $("#capital").removeClass("invalid").addClass("valid");
        } else {
            $("#capital").removeClass("valid").addClass("invalid");
        }
        //Validar número
        if (pswd.match(/\d/)) {
            $("#number").removeClass("invalid").addClass("valid");
        } else {
            $("#number").removeClass("valid").addClass("invalid");
        }
    }).focus(function () {
        $("#password-info").show();
    }).blur(function () {
        $("#password-info").fadeOut();
    });
});



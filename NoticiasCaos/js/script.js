$(document).ready(function () {

    $("#error-usuario").hide()

    $("#inicio-correo").blur(function () {
        console.log("inicio-correo perdió el foco")

        //VALIDACIÓN INICIO DE USUARIO
        if ($("#inicio-correo").val().indexOf("@", 0) == -1 || $("#inicio-correoil").val().indexOf(".", 0) == -1) {
            $("#error-usuario").html("Ingrese de manera correcta su correo electrónico")
            $("#error-usuario").fadeIn()
        }


    });
    $("#inicio-correo").focus(function () {
        console.log("inicio-correo ganó el foco")
        $("#error-usuario").fadeOut()
    });
    //Validación contraseña

    $("#form1").submit(function () {
        console.log("Submit")

        var pass = $("#inicio-pswd").val()

        if (pass.length < 8) {
            $("#error-inicio-pswd").html("Contraseña debe tener 8 caracteres")
            event.preventDefault()
        }


    });
    //VALIDACIONES REGISTRO


    //VALIDACIÓN REGISTRO USUARIO
    $("#error-rgtro-usuario").hide()

    $("#rgtro-usuario").blur(function () {
        console.log("rgtro-usuario perdió el foco")


        if ($("#rgtro-usuario").val().length < 3) {
            $("#error-rgtro-usuario").html("Nombre debe ser mayor a 2 caracteres")
            $("#error-rgtro-usuario").fadeIn()
        }


    });

    $("#rgtro-usuario").focus(function () {
        console.log("rgtro-usuario ganó el foco")
        $("#error-rgtro-usuario").fadeOut()
    });

    //VALIDACIÓN REGISTRO DE CORREO

    $("#error-rgtro-correo").hide()

    $("#rgtro-correo").blur(function () {
        console.log("rgtro-correo perdió el foco")


        if ($("#rgtro-correo").val().indexOf("@", 0) == -1 || $("#rgtro-correoil").val().indexOf(".", 0) == -1) {
            $("#error-rgtro-correo").html("Ingrese de manera correcta su correo electrónico")
            $("#error-rgtro-correo").fadeIn()
        }

    });

    $("#rgtro-correo").focus(function () {
        console.log("rgtro-correo ganó el foco")
        $("#error-rgtro-correo").fadeOut()

    });
    $("input[type=password]").keyup(function () {

        var pswd = $(this).val();
        // Validación Cantidad de Caracteres
        if (pswd.length < 8) {
            $("#length-rgtro").removeClass("valid").addClass("invalid");
        } else {
            $("#length-rgtro").removeClass("invalid").addClass("valid");

        }
        //Validación al menos una letra
        if (pswd.match(/[A-z]/)) {//match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.
            $("#letter-rgtro").removeClass("invalid").addClass("valid");
        } else {
            $("#letter-rgtro").removeClass("valid").addClass("invalid");


        }
        //Validar mayúsculas
        if (pswd.match(/[A-Z]/)) {
            $("#capital-rgtro").removeClass("invalid").addClass("valid");
        } else {
            $("#capital-rgtro").removeClass("valid").addClass("invalid");

        }
        //Validar número
        if (pswd.match(/\d/)) {
            $("#number-rgtro").removeClass("invalid").addClass("valid");
        } else {
            $("#number-rgtro").removeClass("valid").addClass("invalid");
        }
    }).focus(function () {
        $("#pswd-inf-rgtro").show();
    }).blur(function () {
        $("#pswd-inf-rgtro").fadeOut();

    });
    //VALIDACIÓN CONTACTO

    //VALIDACIÓN NOMBRE CONTACTO

    $("#error-nombre-contacto").hide()

    $("#nombre-contacto").blur(function () {
        console.log("nombre-contacto perdió el foco")


        if ($("#nombre-contacto").val().length < 6) {
            $("#error-nombre-contacto").html("Nombre debe ser mayor a 6 caracteres")
            $("#error-nombre-contacto").fadeIn()
        }


    });

    $("#nombre-contacto").focus(function () {
        console.log("nombre-contacto ganó el foco")
        $("#error-nombre-contacto").fadeOut()
    });






    $("#error-correo-contacto").hide()

    $("#correo-contacto").blur(function () {
        console.log("inicio-correo perdió el foco")


        if ($("#correo-contacto").val().indexOf("@", 0) == -1 || $("#correo-contactoil").val().indexOf(".", 0) == -1) {
            $("#error-correo-contacto").html("Ingrese de manera correcta su correo electrónico")
            $("#error-correo-contacto").fadeIn()
        }


    });
    $("#correo-contacto").focus(function () {
        console.log("correo-contacto ganó el foco")
        $("#error-correo-contacto").fadeOut()

    });
    //VALIDACIÓN CONSULTA-RECLAMO
    $("#error-consulta").hide()

    $("#consulta").blur(function () {
        console.log("consulta perdió el foco")


        if ($("#consulta").val().length < 50) {
            $("#error-consulta").html("Debe tener más de 50 caracteres")
            $("#error-consulta").fadeIn()
        }


    });

    $("#consulta").focus(function () {
        console.log("consulta ganó el foco")
        $("#error-consulta").fadeOut()
    });

});



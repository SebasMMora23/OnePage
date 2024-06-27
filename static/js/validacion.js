document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let isValid = true;
        
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const genderMale = document.getElementById("male");
        const genderFemale = document.getElementById("female");
        const terms = document.getElementById("terms");
        const image = document.getElementById("image");
        const message = document.getElementById("message");

        //valida nombre
        if (name.value.trim() === "") {
            isValid = false;
            alert("El nombre es obligatorio");
        }

        //valida email
        if (!validateEmail(email.value)) {
            isValid = false;
            alert("El correo electrónico no es válido");
        }

        //valida selección de servicio
        if (service.value === "") {
            isValid = false;
            alert("Debe seleccionar un servicio");
        }

        //valida género
        if (!genderMale.checked && !genderFemale.checked) {
            isValid = false;
            alert("Debe seleccionar un género");
        }

        //valida aceptar de términos
        if (!terms.checked) {
            isValid = false;
            alert("Debe aceptar los términos y condiciones");
        }

        //valida imagen
        if (image.files.length === 0) {
            isValid = false;
            alert("Debe subir una imagen");
        }

        //valida mensaje
        if (message.value.trim() === "") {
            isValid = false;
            alert("El mensaje es obligatorio");
        }

        if (isValid) {
            alert("Formulario enviado correctamente");
            form.submit();
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

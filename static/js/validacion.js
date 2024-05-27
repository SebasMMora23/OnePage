document.getElementById('contactForm').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = true;

    // Validación de campos
    var fields = ['name', 'email', 'service', 'message'];
    fields.forEach(function(field) {
        var input = document.getElementById(field);
        if (!input.value.trim()) {
            isValid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '1px solid #ccc';
        }
    });

    // Validación de género
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        isValid = false;
        document.getElementById('male').parentElement.style.color = 'red';
    } else {
        document.getElementById('male').parentElement.style.color = '#323337';
    }

    // Validación de términos y condiciones
    var terms = document.getElementById('terms');
    if (!terms.checked) {
        isValid = false;
        terms.parentElement.style.color = 'red';
    } else {
        terms.parentElement.style.color = '#323337';
    }

    // Validación de imagen
    var image = document.getElementById('image');
    if (!image.files.length) {
        isValid = false;
        image.style.border = '2px solid red';
    } else {
        image.style.border = '1px solid #ccc';
    }

    if (!isValid) {
        event.preventDefault();
        alert('Por favor, completa todos los campos obligatorios.');
    }
});

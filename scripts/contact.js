(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('ly3HRv4UR8fqjzOmK');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                document.getElementById('sent-message').style.color = 'green';
                document.getElementById('sent-message').innerHTML = `Mensaje enviado exitosamente!`;
            }, function(error) {
                console.log('FAILED...', error);
                document.getElementById('sent-message').style.color = 'red';
                document.getElementById('sent-message').innerHTML = `Mensaje no enviado`;
            });
    });
}
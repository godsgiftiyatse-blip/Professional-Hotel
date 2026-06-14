document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector("textarea").value;

    const text =
`Name: ${name}
Email: ${email}
Message: ${message}`;

    window.open(
        `https://wa.me/2348123456789?text=${encodeURIComponent(text)}`,
        "_blank"
    );

});

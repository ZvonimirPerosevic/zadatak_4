document.getElementById('bookingForm').addEventListener('submit', (event) => {
    const apiURL = 'http://localhost:3000/api/bookings';
   
   
   
   fetch(`${apiURL}/bookings`, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get('firstName');

    localStorage.setItem('firstName', firstName);

    window.location.href = 'kartica.html';
})
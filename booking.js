document.getElementById('bookingForm').addEventListener('submit', (event) => {
    const apiURL = 'http://localhost:3000/api';

    const fullname = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phoneNumber').value;
    const card = document.getElementById('cardNumber').value;
    const date = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    const flightId = localStorage.getItem('selectedFlight');

    fetch(`${apiURL}/bookings`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "userInfo": {
                  "email": email,
                  "phoneNumber": phone,
                  "fullName": fullname
                },
                "cardInfo": {
                  "cardNumber": card,
                  "expirationDate": date,
                  "cvv": cvv
                },
                "offerId": flightId
              }
        )
        })
        .then(response => response.json())
        .then(bookings => {
            const bookingSelect = document.getElementById('bookingSelect');
            bookings.forEach((booking) => {
                const option = document.createElement('option');
                option.value = booking.userInfo.email;
                option.text = booking.userInfo.fullName;
                bookingSelect.add(option);
            });
        });

    event.preventDefault();

    window.location.href = 'prijava.html';
});
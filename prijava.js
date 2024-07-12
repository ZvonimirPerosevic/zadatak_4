document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const flightsContainer = document.getElementById('flightsContainer');
    const flightList = document.getElementById('flightList');
    const apiURL = 'http://localhost:3000/api/bookings';

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const email = formData.get('email');

        fetch(`${apiURL}/${email}`)
            .then(response => response.json())
            .then(flights => {
                flightList.innerHTML = ''; 
                if (flights.length > 0) {
                    flights.forEach(flight => {
                        const flightDiv = document.createElement('div');
                        flightDiv.classList.add('flight');
                        flightDiv.innerHTML = `
                            <h3>Flight ID: ${flight.flightId}</h3>
                            <p><strong>Departure Time:</strong> ${new Date(flight.departureTime).toLocaleString()}</p>
                            <p><strong>Arrival Time:</strong> ${new Date(flight.arrivalTime).toLocaleString()}</p>
                            <p><strong>Price:</strong> ${flight.price} ${flight.currency}</p>
                        `;
                        flightList.appendChild(flightDiv);
                    });
                    flightsContainer.classList.remove('hidden');
                } else {
                    flightList.innerHTML = '<p>No flights found for this email.</p>';
                    flightsContainer.classList.remove('hidden');
                }
            })
            .catch(error => {
                //console.error('Error fetching flights:', error);
                flightList.innerHTML = '<p>There was an error fetching your flights. Please try again later.</p>';
                flightsContainer.classList.remove('hidden');
            });
    });
});
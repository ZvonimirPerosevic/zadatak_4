document.addEventListener('DOMContentLoaded', () => { 

    setTimeout(() => {
        const loaderContainer = document.querySelector('.loader-container');
        const contentContainer = document.querySelector('.content-container');


        loaderContainer.style.display = 'none';
        contentContainer.classList.remove('hidden');

        const flightInfo = {
            flightId: 'FL123',
            departureTime: '12:00 PM',
            arrivalTime: '2:30 PM',
            price: '250',
            currency: 'USD'
        };

        const flightInfoContainer = document.getElementById('flightInfo');
        flightInfoContainer.innerHTML = `
            <p><strong>Flight ID:</strong> ${flightInfo.flightId}</p>
            <p><strong>Departure Time:</strong> ${flightInfo.departureTime}</p>
            <p><strong>Arrival Time:</strong> ${flightInfo.arrivalTime}</p>
            <p><strong>Price:</strong> ${flightInfo.price} ${flightInfo.currency}</p>
        `;

    }, 3000);
});

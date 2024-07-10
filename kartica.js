document.addEventListener('DOMContentLoaded', () => {
    const firstName = localStorage.getItem('firstName');
    if (firstName) {
        document.getElementById('greeting').innerText = `Bok ${firstName}!!!`;
    } else {
        window.location.href = 'index.html';
    }

    document.getElementById('cardForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const cardNumber = document.getElementById('cardNumber').value;
        if (cardNumber) {
            window.location.href = 'ucitavanje.html';
        } else {
            alert('Molimo unesite broj kartice!');
        }
    });
});
document.getElementById('bookButton').addEventListener('click', bookTrip);

function bookTrip() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destinationSelect').value;
    const date = document.getElementById('date').value;

    if (name && email && destination && date) {
        alert(`Thank you, ${name}! Your trip to ${destination} on ${date} has been booked.`);
    } else {
        alert("Please fill in all fields.");
    }
}
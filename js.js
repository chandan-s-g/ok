document.getElementById('refreshFieldBtn').addEventListener('click', function() {
    // Simulate fetching data from the backend or an API
    fetchFieldData();
});

function fetchFieldData() {
    // Simulate an API call
    fetch('https://api.example.com/field-data') // Replace with actual API endpoint
    .then(response => response.json())
    .then(data => {
        // Update the DOM with new field data
        document.getElementById('fieldData').textContent = `Soil Moisture: ${data.soilMoisture}%, Temperature: ${data.temperature}°C`;
    })
    .catch(error => {
        document.getElementById('fieldData').textContent = 'Error loading field data!';
        console.error('Error fetching field data:', error);
    });
}

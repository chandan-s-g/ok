document.addEventListener('DOMContentLoaded', () => {
    const refreshFieldBtn = document.getElementById('refreshFieldBtn');
    const fieldData = document.getElementById('fieldData');
    const livestockData = document.getElementById('livestockData');
    const financialData = document.getElementById('financialData');
    const weatherCondition = document.getElementById('weatherCondition');
    const totalCrops = document.getElementById('totalCrops');
    const livestockCount = document.getElementById('livestockCount');

    // Example data to simulate refresh
    const updatedData = {
        field: 'Corn field: Harvest due in 5 days. Soil moisture: 40%',
        livestock: 'Cows: 30, Sheep: 20. Feeding schedule: Twice a day.',
        financial: 'Income: $30,000, Expenses: $12,000, Profit: $18,000',
        weather: 'Rainy, 22°C',
        crops: 350,
        livestockCount: 55
    };

    // Update field data on button click
    refreshFieldBtn.addEventListener('click', () => {
        fieldData.innerHTML = updatedData.field;
        livestockData.innerHTML = updatedData.livestock;
        financialData.innerHTML = updatedData.financial;
        weatherCondition.innerHTML = updatedData.weather;
        totalCrops.innerHTML = updatedData.crops;
        livestockCount.innerHTML = updatedData.livestockCount;
    });
});

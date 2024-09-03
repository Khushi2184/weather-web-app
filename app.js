document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const searchButton = document.getElementById('search-button');
    const currentLocationButton = document.getElementById('current-location-button');
    const weatherInfo = document.getElementById('weather-info');
    const summaryInfo = document.getElementById('summary-info');
    const hourlyInfo = document.getElementById('hourly-info');
    const forecastInfo = document.getElementById('forecast-info');
    const monthlyForecastInfo = document.getElementById('monthly-forecast-info');
    const weatherTrendsInfo = document.getElementById('weather-trends-info');
    const additionalInfo = document.getElementById('additional-info');
    const historicalInfo = document.getElementById('historical-info');

    // Mock Data
    const mockWeatherData = {
        city: 'New York',
        temperature: '22°C',
        weather: 'Clear Sky',
        icon: 'fas fa-sun',
        humidity: '55%',
        pressure: '1012 hPa',
        dewPoint: '16°C',
        sunsetTime: '19:45',
        sunriseTime: '06:15',
        cloudCover: '10%',
        moonPhase: 'Full Moon',
        weatherTrends: {
            hottestMonth: 'July',
            coldestMonth: 'January',
            windiestMonth: 'March'
        },
        hourlyForecast: [
            { time: '08:00', temperature: '18°C', weather: 'Clear Sky' },
            { time: '12:00', temperature: '22°C', weather: 'Clear Sky' },
            { time: '16:00', temperature: '20°C', weather: 'Clear Sky' },
            { time: '20:00', temperature: '17°C', weather: 'Clear Sky' }
        ],
        forecast: [
            { day: 'Monday', temperature: '23°C', weather: 'Sunny' },
            { day: 'Tuesday', temperature: '24°C', weather: 'Partly Cloudy' },
            { day: 'Wednesday', temperature: '22°C', weather: 'Cloudy' },
            { day: 'Thursday', temperature: '21°C', weather: 'Rainy' },
            { day: 'Friday', temperature: '23°C', weather: 'Sunny' }
        ],
        monthlyForecast: [
            { month: 'January', averageTemp: '5°C', weather: 'Cold' },
            { month: 'February', averageTemp: '8°C', weather: 'Cold' },
            { month: 'March', averageTemp: '12°C', weather: 'Mild' }
            // Add more months as needed
        ],
        additional: {
            airQuality: 'Good',
            sunIndex: 'Moderate',
            windSpeed: '10 km/h',
            rain: '0 mm'
        },
        historical: {
            highestTemperature: '35°C',
            lowestTemperature: '-10°C'
        }
    };

    function updateWeatherDashboard(data) {
        weatherInfo.innerHTML = `
            <div class="weather-info">
                <h2>${data.city}</h2>
                <i class="${data.icon} weather-icon"></i>
                <p>Temperature: ${data.temperature}</p>
                <p>Weather: ${data.weather}</p>
                <p>Humidity: ${data.humidity}</p>
                <p>Pressure: ${data.pressure}</p>
                <p>Dew Point: ${data.dewPoint}</p>
                <p>Sunset Time: ${data.sunsetTime}</p>
                <p>Sunrise Time: ${data.sunriseTime}</p>
                <p>Cloud Cover: <span class="cloud-cover-animation"></span> ${data.cloudCover}</p>
                <p>Moon Phase: ${data.moonPhase}</p>
            </div>
        `;

        summaryInfo.innerHTML = `<div class="weather-info"><h3>Today's Summary</h3><p>${data.weather}</p></div>`;

        hourlyInfo.innerHTML = `
            <div class="weather-info">
                <h3>Hourly Forecast</h3>
                <ul>
                    ${data.hourlyForecast.map(item => `
                        <li>${item.time} - ${item.temperature} - ${item.weather}</li>
                    `).join('')}
                </ul>
            </div>
        `;

        forecastInfo.innerHTML = `
            <div class="weather-info">
                <h3>5-Day Forecast</h3>
                <ul>
                    ${data.forecast.map(item => `
                        <li>${item.day} - ${item.temperature} - ${item.weather}</li>
                    `).join('')}
                </ul>
            </div>
        `;

        monthlyForecastInfo.innerHTML = `
            <div class="weather-info">
                <h3>Monthly Forecast</h3>
                <ul>
                    ${data.monthlyForecast.map(item => `
                        <li>${item.month} - Avg Temp: ${item.averageTemp} - ${item.weather}</li>
                    `).join('')}
                </ul>
            </div>
        `;

        weatherTrendsInfo.innerHTML = `
            <div class="weather-info">
                <h3>Weather Trends</h3>
                <p>Hottest Month: ${data.weatherTrends.hottestMonth}</p>
                <p>Coldest Month: ${data.weatherTrends.coldestMonth}</p>
                <p>Windiest Month: ${data.weatherTrends.windiestMonth}</p>
            </div>
        `;

        additionalInfo.innerHTML = `
            <div class="weather-info">
                <h3>Additional Information</h3>
                <p>Air Quality: ${data.additional.airQuality}</p>
                <p>Sun Index: ${data.additional.sunIndex}</p>
                <p>Wind Speed: ${data.additional.windSpeed}</p>
                <p>Rain: ${data.additional.rain}</p>
            </div>
        `;

        historicalInfo.innerHTML = `
            <div class="weather-info">
                <h3>Historical Data</h3>
                <p>Highest Temperature: ${data.historical.highestTemperature}</p>
                <p>Lowest Temperature: ${data.historical.lowestTemperature}</p>
            </div>
        `;
    }

    function getMockCityData(city) {
        return mockWeatherData;
    }

    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            const data = getMockCityData(city);
            updateWeatherDashboard(data);
        } else {
            alert('Please enter a city name.');
        }
    });

    currentLocationButton.addEventListener('click', () => {
        const data = getMockCityData('Current Location');
        updateWeatherDashboard(data);
    });

    // Initial load
    updateWeatherDashboard(mockWeatherData);
});

export const dewConverter = (temp = 0, humidity = 0, isFahrenheit = false) => {
  // Convert to Celsius if input is in Fahrenheit
  const tempCelsius = isFahrenheit ? (temp - 32) * (5 / 9) : temp;

  // Calculate dew point in Celsius
  const dewPointCelsius = tempCelsius - (100 - humidity) / 5;

  // Convert back to Fahrenheit if the input was in Fahrenheit
  return isFahrenheit ? `${Math.round(((dewPointCelsius * 9) / 5 + 32).toFixed(1))} °F` : `${Math.round(dewPointCelsius.toFixed(1))} °C`;
};


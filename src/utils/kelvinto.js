export const kelvintocelcious = (kelvin) => `${(kelvin - 273.15).toFixed(1)}`;

export const kelvintoFahrenheit = (kelvin) =>
  `${((kelvin - 273.15) * (9 / 5) + 32).toFixed(1)}`;

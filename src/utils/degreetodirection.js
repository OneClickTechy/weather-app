export const deg2dir = (deg) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const step1 = deg / 22.5;
  const step2 = Math.round(step1);
  const step3 = step2 % 16;
  const step4 = directions[step3]
  return step4;
};


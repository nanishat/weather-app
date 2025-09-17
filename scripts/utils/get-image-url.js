export function getImageURL(weatherStatus) {
  let icon = undefined;
  switch (weatherStatus) {
    case 'Clear':
      icon = 'Image/weather-status/clear.png';
      break;
    case 'Clouds':
      icon = 'Image/weather-status/clouds.png';
      break;
    case 'Drizzle':
      icon = 'Image/weather-status/drizzle.png';
      break;
    case 'Haze':
      icon = 'Image/weather-status/haze.png';
      break;
    case 'Rain':
      icon = 'Image/weather-status/rain.png';
      break;
    case 'snow':
      icon = 'Image/weather-status/snow.png';
      break;
    default:
      icon = 'Image/weather-status/default.png';
      break;
  }
  return icon;
}
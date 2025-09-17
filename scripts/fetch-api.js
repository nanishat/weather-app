export async function fetchAPI(city) {

  const apiKey = "3ae1f8eccc81ba3b9e1bba103aa12fe7";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (!response.ok) {
      throw new Error(
        `API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log('API call successful!');
    return data;

  } catch (error) {
    console.log('Unexpected error. Try again later.');
    console.log(error);
  }
}
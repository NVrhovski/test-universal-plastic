const API_KEY = '249efd60e5021ba25f979f2caac2b853';

const weatherService = {
    getWeather(latitude: number, longitude: number): Promise<Response>
    {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    }
}

export default weatherService
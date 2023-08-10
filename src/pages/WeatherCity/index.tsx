import CitySelector from '../../components/CitySelector';
import WeatherInfo from '../../components/WeatherInfo';
import styles from './WeatherCity.module.scss';
import { locations } from '../../data/test_locations';
import { useEffect, useState } from 'react';
import weatherService from '../../services/weather.service';
import { weather } from '../../interfaces/weather';
import Loader from '../../components/Loader';

const WeatherCity = () => {

    const [selectedWeather, setSelectedWeather] = useState<weather | undefined>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        getWeather(locations[0].location.coordinates[1], locations[0].location.coordinates[0])
    },[])

    const getWeather = async (lat: number, long: number) => {
        setLoading(true);
        try {
            const rawData = await weatherService.getWeather(lat, long)
            const json = await rawData.json();
            setSelectedWeather(json);
        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false);
        }
    }

    const handleLocationChange = (value: string): void => {
        const selectedLocation = locations.find((el) => el.id == parseInt(value))
        getWeather(selectedLocation?.location.coordinates[1] || 0, selectedLocation?.location.coordinates[0] || 0)
    }
 
    return(
        <>
        <div className={styles.mainContainer}>
            <h1>Weather City</h1>
            <CitySelector locations={locations} handleLocationChange={handleLocationChange}/>
            <WeatherInfo selectedWeather={selectedWeather}/>
        </div>
        {loading ? 
        <Loader/> : ''}
        </>
    )
}

export default WeatherCity
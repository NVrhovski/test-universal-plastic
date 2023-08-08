import styles from './WeatherInfo.module.scss';
import { weather } from '../../interfaces/weather';
import moment from 'moment';

interface PropsWeatherInfo{
    selectedWeather: weather | undefined
}

const WeatherInfo = ({selectedWeather}: PropsWeatherInfo) => {
   
    return(
        <div className={styles.mainContainer}>
            <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                    <img src={`https://openweathermap.org/img/wn/${selectedWeather?.weather[0].icon}@2x.png`}/>
                </div>
                <div className={styles.headerInfo}>
                    <span>Weather</span>
                    <p>{selectedWeather?.weather[0].main}</p>
                </div>
                <div className={styles.headerInfo}>
                    <span>Description</span>
                    <p>{selectedWeather?.weather[0].description}: {selectedWeather?.clouds.all}%</p>
                </div>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.bodyLocationInfo}>
                    <div className={styles.bodyInfo}>
                        <span>Sunset</span>
                        <p>{moment((selectedWeather?.sys.sunset || 0) * 1000).format('HH:mm')}</p>
                    </div>
                    <div className={styles.bodyInfo}>
                        <span>Sunrise</span>
                        <p>{moment((selectedWeather?.sys.sunrise || 0) * 1000).format('HH:mm')}</p>
                    </div>
                    <div className={styles.bodyInfo}>
                        <span>Location</span>
                        <a href={`https://maps.google.com/?q=${selectedWeather?.coord.lat},${selectedWeather?.coord.lon}`} target='_blank'>
                            <p><img src='/assets/icons/map-pin.png' alt='Map pin'/>{selectedWeather?.name}</p>
                        </a>
                    </div>
                </div>
                <div className={styles.bodyTempInfo}>
                    <div className={styles.bodyInfo}>
                        <span>Temperature</span>
                        <p>{selectedWeather?.main.temp}</p>
                    </div>
                    <div className={styles.bodyInfo}>
                        <span>Feels like</span>
                        <p>{selectedWeather?.main.feels_like}</p>
                    </div>
                </div>
                <div className={styles.humidityContainer}>
                    <span>{selectedWeather?.main.humidity}% humidity</span>
                    <div className={styles.humidityBar}>
                        <div className={styles.humidityBarFill} style={{width: `${selectedWeather?.main.humidity}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo
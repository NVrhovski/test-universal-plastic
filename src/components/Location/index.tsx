import styles from './Location.module.scss';
import { Coordinates } from '../../interfaces/coordinates';

interface PropsLocation{
    coordinates: Coordinates,
    handleCordsChange: (input: string, value: React.FocusEvent<HTMLInputElement, Element>) => void
}

const Location = ({coordinates, handleCordsChange}: PropsLocation) => {
    
    return(
        <div className={styles.mainContainer}>
            <h2>Location</h2>
            <div className={styles.locationContainer}>
                <span>Latitude</span>
                <span>Longitude</span>
                <div className={styles.cordContainer}>
                    <input type='number' min="-90" max="90" defaultValue={coordinates.latitude} onBlur={((event) => {handleCordsChange('latitude', event)})}/>
                </div>
                <div className={styles.cordContainer}>
                    <input type='number' min="-180" max="180" defaultValue={coordinates.longitude} onBlur={((event) => {handleCordsChange('longitude', event)})}/>
                </div>
            </div>
        </div>
    )
}

export default Location
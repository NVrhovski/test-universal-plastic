import { locations } from '../../interfaces/locations';
import styles from './CitySelector.module.scss';

interface PropsCitySelector {
    locations: locations[],
    handleLocationChange: (value: string) => void
}
const CitySelector = ({locations, handleLocationChange}: PropsCitySelector) => {
    
    return(
        <div className={styles.mainContainer}>
            <h2>City</h2>
            <select className={styles.citySelector} onChange={((event) => {handleLocationChange(event.target.value)})}>
                {locations.map((location: locations) => {
                    return(
                        <option key={location.id} value={location.id}>{location.city}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CitySelector
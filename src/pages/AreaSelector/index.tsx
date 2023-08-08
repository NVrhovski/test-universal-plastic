import styles from './AreaSelector.module.scss';
import Location from '../../components/Location';
import Area from '../../components/Area';
import { useEffect, useState } from 'react';
import { Coordinates } from '../../interfaces/coordinates';
import ErrorMessage from '../../components/ErrorMessage';

const AreaSelector = () => {

    const [coordinates, setCoordinates] = useState<Coordinates>({latitude: 0, longitude: 0});
    const [radius, setRadius] = useState<number>(1000);
    const [renderLocation, setRenderLocation] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates({latitude: position.coords.latitude, longitude: position.coords.longitude});
            setRenderLocation(true);
        });
    },[]);

    const handleCordsChange = (input: string, event: React.FocusEvent<HTMLInputElement, Element>): void => {

        const value = parseFloat(event.target.value);

        if(input === 'latitude')
        {
            if(value < -90 || value > 90)
            {
                event.target.value = coordinates.latitude.toString();
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 7000)
            }else
            {
                setCoordinates({latitude: value || 0, longitude: coordinates.longitude});
            }
        }else
        {
            if(value < -180 || value > 180)
            {
                event.target.value = coordinates.longitude.toString();
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 7000)
            }
            else
            {
                setCoordinates({latitude: coordinates.latitude, longitude: value || 0})
            }
        }
        if(!event.target.value)
        {
            event.target.value = '0';
        }
    }

    const handleAreaChange = (value: string): void => {
        setRadius(parseInt(value) * 1000)
    }

    return(
        <div className={styles.mainContainer}>
            <h1>Area selector</h1>
            {renderLocation ? <Location coordinates={coordinates} handleCordsChange={handleCordsChange}/> : ''}
            <Area coordinates={coordinates} radius={radius} handleAreaChange={handleAreaChange}/>
            <ErrorMessage showError={showError}/>
        </div>
    )
}

export default AreaSelector
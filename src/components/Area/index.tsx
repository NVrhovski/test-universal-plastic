import styles from './Area.module.scss';
import { MapContainer, TileLayer, Marker, Circle } from 'react-leaflet';
import { Coordinates } from '../../interfaces/coordinates';
import ChangeView from '../ChangeView';

interface PropsArea{
    coordinates: Coordinates,
    radius: number,
    handleAreaChange: (value: string) => void
}

const Area = ({coordinates, radius, handleAreaChange}: PropsArea) => {

    return(
        <div className={styles.mainContainer}>
            <div className={styles.areaHeader}>
                <h2>Area</h2>
                <span>Max 20 km</span>
            </div>
            <div className={styles.inputContainer}>
                <div className={styles.rangeShadow} style={{width: `${((radius / 1000) * 100) / 20}%`}}></div>
                <div></div>
                <input defaultValue={1} min={1} max={20} type='range' onChange={((event) => {handleAreaChange(event.target.value)})}/>
                <div></div>
            </div>
            <div className={styles.mapContainer}>
                <MapContainer center={[coordinates.latitude, coordinates.longitude]} zoomSnap={0.1} zoom={0} scrollWheelZoom={false} style={{height: 180}}>
                    <ChangeView coordinates={[coordinates.latitude, coordinates.longitude]} radius={radius}/>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[coordinates.latitude, coordinates.longitude]}></Marker>
                    <Circle center={[coordinates.latitude, coordinates.longitude]} radius={radius}></Circle>
                </MapContainer>
            </div>
        </div>
    )
}

export default Area
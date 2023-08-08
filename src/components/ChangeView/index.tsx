import { LatLngTuple } from 'leaflet';
import { useMap } from 'react-leaflet';

interface PropsChangeView {
    coordinates: LatLngTuple,
    radius: number
}

const ChangeView = ({coordinates, radius}: PropsChangeView) => {

    const scaleZoom = (radius: number): number => {
        return 21 - ((radius / 1000) / 5 + 9)
    }
    const map = useMap();
    map.setView(coordinates, scaleZoom(radius))
    return (
        <></>
    )
}

export default ChangeView
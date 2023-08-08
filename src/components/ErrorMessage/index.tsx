import { useEffect, useRef } from 'react';
import styles from './ErrorMessage.module.scss';

interface PropsErrorMessage{
    showError: boolean
}
const ErrorMessage = ({showError}: PropsErrorMessage) => {

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(showError)
        {
           if(modalRef.current)
           {
            modalRef.current.style.opacity = '1'
           }
        }else
        {
            if(modalRef.current)
            {
                modalRef.current.style.opacity = '0'
            }
        }
    },[showError])

    return(
        <div className={styles.mainContainer} ref={modalRef}>
            <p>Latitude must be a value between -90 & 90 <br/>Longitude must be a value between -180 & 180</p>
        </div>
    )
}

export default ErrorMessage
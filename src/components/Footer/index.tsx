import { Dispatch, useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import { useLocation, Link } from 'react-router-dom'

const Footer = () => {

    const route =  useLocation();
    const [isMap, setIsMap] = useState<boolean>(true);
    
    useEffect(() => {
        route.pathname == '/weather' ? setIsMap(false) : setIsMap(true)
    },[route])

    return(
        <footer className={styles.pageFooter}>
            {isMap ? 
            <>
            <div className={styles.iconContainer}>
                <Link to={'/map'}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#42C3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" stroke="#42C3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <span>.</span>
            </div>
            <div className={styles.iconContainer}>
                <Link to={'/weather'}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5 10.001H17.24C16.2004 5.97489 12.2499 3.4164 8.15079 4.11456C4.05168 4.81273 1.17084 8.53475 1.52271 12.678C1.87458 16.8212 5.34185 20.0041 9.49998 20.001H18.5C21.2614 20.001 23.5 17.7624 23.5 15.001C23.5 12.2396 21.2614 10.001 18.5 10.001Z" stroke="#C4ECFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <span style={{display: 'none'}}>.</span>
            </div>
            </>
            :
            <>
            <div className={styles.iconContainer}>
                <Link to={'/map'}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z" stroke="#C4ECFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 15C14.1569 15 15.5 13.6569 15.5 12C15.5 10.3431 14.1569 9 12.5 9C10.8431 9 9.5 10.3431 9.5 12C9.5 13.6569 10.8431 15 12.5 15Z" stroke="#C4ECFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <span style={{display: 'none'}}>.</span>
            </div>
            <div className={styles.iconContainer}>
                <Link to={'/weather'}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.5 10.001H17.24C16.2004 5.97489 12.2499 3.4164 8.15079 4.11456C4.05168 4.81273 1.17084 8.53475 1.52271 12.678C1.87458 16.8212 5.34185 20.0041 9.49998 20.001H18.5C21.2614 20.001 23.5 17.7624 23.5 15.001C23.5 12.2396 21.2614 10.001 18.5 10.001Z" stroke="#42C3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>
                <span>.</span>
            </div>
            </>}
        </footer>
    )
}

export default Footer
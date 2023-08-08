import styles from './Loader.module.scss';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
    return(
        <div className={styles.loaderMainContainer}>
            <ClipLoader
                loading={true}
                color='#42C3EE'
                size={100}
            />
        </div>
    )
}

export default Loader
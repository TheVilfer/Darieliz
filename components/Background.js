import Image from 'next/image'
import styles from './Background.module.css';

function Background() {
    return (
        <div className={styles.background}>
            <Image src={"https://source.unsplash.com/random/1920x1080/?forest"} layout='fill' priority />
        </div>
    )
}

export default Background;
import styles from './Background.module.css';
import getAspectRation from '../libs/client-side/windowsSize';

import Image from 'next/image'
import { useState, useEffect } from 'react';

function Background() {
    const [aspectRation, setAspectRatio] = useState(`5616x3744`);
    useEffect(() => {
        setAspectRatio(getAspectRation())
        console.log(aspectRation);
    }, []);
    return (
        <Image className={styles.background} src={`https://source.unsplash.com/random/${aspectRation}/?forest`} layout='fill' quality={80} priority />
    )
}

export default Background;
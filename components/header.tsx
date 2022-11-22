import Image from 'next/image'
import styles from './header.module.scss'
import LogoWheel from './logoWheel'

export default function Header() {
    return (
        <header className={styles.header} id='header'>
            <div className={styles.call_div}>
                <div className={styles.phone_div}>
                    <Image 
                        src='/img/phone.svg'
                        alt='phone'
                        width={17}
                        height={25}
                        className={styles.img}
                        loading='lazy'
                    />
                    <span className={styles.span}>+7 (8412) 33-33-33</span>
                </div>
                <button className={styles.button}>
                    <span className={styles.span}>позвоните мне</span>
                </button>
            </div>
            <LogoWheel />
        </header>
    )
}
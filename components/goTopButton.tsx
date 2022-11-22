import Image from "next/image"
import styles from './goTopButton.module.scss'

export default function GoTopButton() {
    return (
        <button className={styles.button} onClick={() => document.getElementById('header')?.scrollIntoView()}>
            <Image
                src='/img/top.svg'
                alt='go top'
                width={40}
                height={40}
                loading='lazy'
                className={styles.img}
            />
        </button>
    )
}
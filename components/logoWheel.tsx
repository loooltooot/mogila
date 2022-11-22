import Image from 'next/image'
import styles from './logoWheel.module.scss'

export default function LogoWheel() {
    return (
        <div className={styles.logoWheel}>
            <Image 
                src='/img/wheel.png'
                alt='wheel'
                width={239}
                height={239}
                style={{width: '12.45vw', height: '12.45vw'}}
            />
            <Image 
                src='/img/My-Giro.svg'
                alt='My-Giro'
                width={128}
                height={58}
                style={{width: '6.67vw', height: '3.02vw'}}
            />
            <h1 style={{display: 'none'}}>My-Giro магазин гироскутеров и электросамокатов</h1>
        </div>
    )
}
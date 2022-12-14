import styles from './benefitSlide.module.scss'

interface IBenefitCard {
    img: string
    title: string
    content: string
}

export default function BenefitSlide({img, title, content}: IBenefitCard) {
    return (
        <div className={styles.item}>
            {/* Фон слайда */}
             <img src={img} className={'img-fluid ' + styles.img} alt="..." /> 

             {/* Контент слайда */}
             <div className={styles.text}>
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
             </div>
        </div>
    )
}
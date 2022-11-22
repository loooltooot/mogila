import Card from "./card";
import styles from './assortimentItem.module.scss'

interface IAssotrimentItem {
    img: string
    maxSpeed: string
    avgPrice: string
    category: string
}

export default function AssortimentItem({img, maxSpeed, avgPrice, category}: IAssotrimentItem) {
    return (
        <Card className={styles.card}>
            <img
                src={img}
                alt="electro scooter"
                className={styles.img}
            />
            <span>{maxSpeed}</span>
            <span>{avgPrice}</span>
            <h3>{category}</h3>
        </Card>
    )
}
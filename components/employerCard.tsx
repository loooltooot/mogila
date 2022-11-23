import Card from "./card";
import styles from './employerCard.module.scss'
import Image from "next/image";

interface IEmployerCard {
    img: string
    name: string
    occupation: string
}

export default function EmployerCard({img, name, occupation}: IEmployerCard) {
    return (
        <Card className={styles.card}>
            <Image 
                src={img}
                alt='employer'
                width={350}
                height={350}
                loading='lazy'
            />

            <h3>{name}</h3>
            <span>{occupation}</span>
        </Card>
    )
}
import Card from "./card"
import styles from './questionCard.module.scss'
import Image from "next/image"
import { useState } from "react"

interface IQuestionCard {
    title: string
    content: string
    id: string
    show?: boolean
}

export default function QuestionCard({title, content, id, show}: IQuestionCard) {
    const [seen, setSeen] = useState(show)

    return (
        <Card className={styles.card}>
            {/* Шапка вопроса, при нажатии на которую раскрывается описание вопроса */}
            <button 
                onClick={() => setSeen(!seen)} 
                className={styles.header} 
                id={'header-' + id} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target={'#' + id} 
                aria-expanded={show} 
                aria-controls={id}
            >
                <h3>{title}</h3>
                <Image 
                    src='/img/triangle.svg'
                    alt="Посмотреть подробности"
                    width={25}
                    height={25}
                    loading='lazy'
                    className={styles.img + ' ' + (seen ? styles.show : '')}
                />
            </button>
            <p className={'collapse' + (show ? ' show' : '')} id={id} aria-labelledby={'header-' + id}>
                {content}
            </p>
        </Card>
    )
}
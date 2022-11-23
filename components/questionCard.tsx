import Card from "./card"
import styles from './questionCard.module.scss'

interface IQuestionCard {
    title: string
    content: string
}

export default function QuestionCard({title, content}: IQuestionCard) {
    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <h3>title</h3>
                {/* todo: triangle */}
            </div>
            <p>
                {content}
            </p>
        </Card>
    )
}
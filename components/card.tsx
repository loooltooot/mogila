interface ICard {
    children: React.ReactNode
    className?: string
}

export default function Card({children, className}: ICard) {
    // Добавляем класс, который был передан
    const classes = 'card ' + (className ?? '')

    return (
        <div className={classes}>
            {children}
        </div>
    )
}
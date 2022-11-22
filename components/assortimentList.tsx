import AssortimentItem from "./assortimentItem";

export default function AssortimentList() {
    return (
        <section id="assortiment">
            <AssortimentItem 
                img="/img/scooter.png"
                maxSpeed="40 км/ч"
                avgPrice="12900 ₽"
                category="Электросамокаты"
            />
            <AssortimentItem 
                img="/img/gyro.png"
                maxSpeed="20 км/ч"
                avgPrice="4900 ₽"
                category="Гироскутеры"
            />
            <AssortimentItem 
                img="/img/segway.png"
                maxSpeed="60 км/ч"
                avgPrice="26900 ₽"
                category="Сигвеи"
            />
        </section>
    )
}
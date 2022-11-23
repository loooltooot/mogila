import EmployerCard from "./employerCard";

export default function EmployersList() {
    return (
        <section id="employers-section" className="margin-top">
            <h2 style={{marginBottom: '5.81vw'}}>Наши сотрудники</h2>
            <div className="flex-row-container" >
                <EmployerCard 
                    img="/img/emp-photo.png"
                    name="Ева Якетюк"
                    occupation="главная по колесам"
                />
                <EmployerCard 
                    img="/img/emp-photo-1.png" 
                    name="Станислав Куцаев"
                    occupation="младший по колесам"
                />
                <EmployerCard 
                    img="/img/emp-photo-2.png" 
                    name="Имир Дорохов"
                    occupation="инвалид-колясочник"
                />
            </div>
        </section>
    )
}
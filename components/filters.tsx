import styles from './filters.module.scss'

interface IFilters {
    onChange: Function
}

export default function Filters({onChange}: IFilters) {
    return (
        <div id='filters'>
            <form className={styles.form}>
                <div>
                    <input type="radio" name="category" value='' id='filter-all' onChange={(e) => e.target.checked ? onChange(e.target.value) : ''}/>
                    <label htmlFor="filter-all">все</label>
                </div>
                <div>
                    <input type="radio" name="category" value='gyro' id='filter-gyros' onChange={(e) => e.target.checked ? onChange(e.target.value) : ''}/>
                    <label htmlFor="filter-gyros">гироскутеры</label>
                </div>
                <div>
                    <input type="radio" name="category" value='scooter' id='filter-scooters' onChange={(e) => e.target.checked ? onChange(e.target.value) : ''}/>
                    <label htmlFor="filter-scooters">электросамокаты</label>
                </div>
                <div>
                    <input type="radio" name="category" value='segway' id='filter-segways' onChange={(e) => e.target.checked ? onChange(e.target.value) : ''}/>
                    <label htmlFor="filter-segways">сигвеи</label>
                </div>
            </form>
        </div>
    )
}
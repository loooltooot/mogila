export default function EmailForm() {
    return (
        <div style={{marginTop: '5.05vw'}}>
            <h2>Заполните форму и получите скидку 5%</h2>
            <form>
                <input type="text" name="name" className="field-input" placeholder="ваше имя"/>
                <input type="email" name="email" className="field-input" placeholder="ваш email"/>
                <input type="submit" value='получить скидку' />
            </form>
        </div>
    )
}
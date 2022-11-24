import BenefitSlide from './benefitSlide'
import styles from './slider.module.scss'

export default function Slider() {
    return (
        <section id="slider">
            <div id="carouselBenefits" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{borderRadius: '1.56vw'}}>
                    <div className={'carousel-item active ' + styles.carousel_item}>
                        <BenefitSlide 
                            img="/img/el1.jpg" 
                            title='С нами надежно!' 
                            content='Proident veniam mollit veniam est qui ullamco in dolore officia ea adipisicing consectetur ut sit. Cupidatat tempor commodo fugiat Lorem culpa ullamco ex reprehenderit culpa adipisicing. Mollit anim anim nisi sint laborum id id aliqua et incididunt quis amet elit. Ea laboris magna officia labore do quis duis.' 
                        />
                    </div>
                    <div className={'carousel-item ' + styles.carousel_item}>
                        <BenefitSlide 
                            img="/img/el2.jpg" 
                            title='С нами вкусно!' 
                            content='Officia minim excepteur non nostrud deserunt tempor. Dolore anim non id Lorem elit ut ipsum. Ex irure minim anim ex Lorem anim occaecat Lorem.' 
                        />
                    </div>
                    <div className={'carousel-item ' + styles.carousel_item}>
                        <BenefitSlide 
                            img="/img/el3.jpg" 
                            title='С нами быстро!' 
                            content='Enim ullamco voluptate amet Lorem do duis laboris sunt nisi. Commodo adipisicing voluptate irure occaecat incididunt qui. Irure culpa ut nisi velit pariatur id deserunt ut incididunt laborum deserunt irure ut excepteur. Veniam amet cillum laboris magna velit amet eu mollit mollit.' 
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselBenefits" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselBenefits" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}
import styles from './slider.module.scss'

export default function Slider() {
    return (
        <section id="slider">
            <div id="carouselBenefits" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{borderRadius: '1.56vw'}}>
                    <div className={'carousel-item active ' + styles.carousel_item}>
                        <img src="/img/el1.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className={'carousel-item ' + styles.carousel_item}>
                        <img src="/img/el2.jpg" className="img-fluid" alt="..." />
                    </div>
                    <div className={'carousel-item ' + styles.carousel_item}>
                        <img src="/img/el3.jpg" className="img-fluid" alt="..." />
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
import Image from "next/image"

export default function BrandsSection() {
    return (
        <section id="brands" className="margin-top">
            <h2 style={{marginBottom: '4.21vw'}}>Брендированная техника</h2>
            <div className="flex-row-container" style={{flexWrap: 'wrap'}}>
                <Image 
                    src='/img/smart.png'
                    alt='Smart Balance'
                    width={550} 
                    height={369}
                    style={{width: '28.65vw', height: '19.22vw'}}
                />
                <Image 
                    src='/img/Airwheel.png'
                    alt='AirWheel'
                    width={637}
                    height={220}
                    style={{width: '33.18vw', height: '11.46vw'}}
                />
                <Image 
                    src='/img/segwaylogo.png'
                    alt='Segway'
                    width={1187}
                    height={327}
                    style={{width: '61.82vw', height: '17.03vw', margin: '0 auto'}}
                />
            </div>
        </section>
    )
}
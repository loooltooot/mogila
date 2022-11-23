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
                    style={{width: '22.92vw', height: '15.38vw'}}
                />
                <Image 
                    src='/img/Airwheel.png'
                    alt='AirWheel'
                    width={637}
                    height={220}
                    style={{width: '26.54vw', height: '9.17vw'}}
                />
                <Image 
                    src='/img/segwaylogo.png'
                    alt='Segway'
                    width={1187}
                    height={327}
                    style={{width: '49.46vw', height: '13.63vw', margin: '0 auto'}}
                />
            </div>
        </section>
    )
}
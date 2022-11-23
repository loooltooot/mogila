import Image from "next/image"
import EmailForm from "./emailForm"

export default function Footer() {
    return (
        <footer className="margin-top">
            <Image 
                src='/img/My-Giro-White.svg'
                alt="My-Giro"
                width={306}
                height={138}
                loading='lazy'
                style={{width: '15.94vw', height: '7.19vw'}}
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. 
            </p>
            <EmailForm />
        </footer>
    )
}
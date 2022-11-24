import { IProduct } from "../data/iProduct";
import Card from "./card";
import Image from "next/image";
import styles from './productCard.module.scss'

interface IProductCard {
    product: IProduct
}

export default function ProductCard({product}: IProductCard) {
    let productCategory = convertCategory(product.category)

    return (
        <Card className={styles['card-grid']}>
            {/* Фото продукта */}
            <div className={styles['image-wrapper']}>
                <Image 
                    src={product.img}
                    alt='product'
                    width={192}
                    height={192}
                    loading='lazy'
                />
            </div>

            {/* Контейнер, в котором находятся цена и название продукта */}
            <div className={styles['title-price-wrapper']}>
                <h3>{product.title}</h3>
                <span>{product.price} ₽</span>
            </div>
            <span className={styles['product-category']}>{productCategory}</span>
        </Card>
    )
}

// Функция для конвертации категории продукта в понятный для человека вид
function convertCategory(category: string) {
    let convertedCategory = ''

    switch(category) {
        case 'gyro':
            convertedCategory = 'Гироскутер'        
            break
        case 'scooter':
            convertedCategory = 'Электросамокат'        
            break
        case 'segway':
            convertedCategory = 'Сигвей'        
            break
        default:
            convertedCategory = 'Прочее'
            break
    }

    return convertedCategory
}
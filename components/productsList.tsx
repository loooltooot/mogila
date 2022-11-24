import { IProduct } from "../data/iProduct"
import ProductCard from "./productCard"
import styles from './productsList.module.scss'

interface IProductsList {
    products: IProduct[]
}

export default function ProductsList({products}: IProductsList) {
    return (
        <div className={styles['flex-container']}>
            {/* Перебираем продукты из массива и выводим их */}
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
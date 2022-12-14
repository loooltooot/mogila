import Filters from "./filters";
import ProductsList from "./productsList";
import * as products from '../data/products.json' // Экспортируем JSON файл
import { useEffect, useMemo, useState } from "react";

export default function ProductsSection() {
    const [sort, setSort] = useState('')

    // Убираем последние два элемента из массива JSON файла, потому что это вспомогательные объекты
    const productsList = Object.values(products).slice(0, -2)

    const sortedProducts = useMemo(() => {
        return sort
            ? productsList.filter((product) => product.category === sort)
            : productsList
    }, [productsList, sort])

    return (
        <section id="products" className="margin-top">
            <h2>Наши товары</h2>
            <Filters onChange={setSort} sort={sort}/>
            <ProductsList products={sortedProducts} />
        </section>
    )
}
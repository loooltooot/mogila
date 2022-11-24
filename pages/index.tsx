import Head from "next/head";
import AssortimentList from "../components/assortimentList";
import BrandsSection from "../components/brandsSection";
import EmployersList from "../components/employersList";
import Layout from "../components/layout";
import ProductsSection from "../components/productsSection";
import QASection from "../components/qaSection";
import Slider from "../components/slider";

export default function Home() { 
    return (
        <>
            <Head>
                <title>My-Giro</title>
            </Head>
            <Layout>
                {/* Слайдер с преимуществами компании */}
                <Slider />

                {/* Список характеристик техники */}
                <AssortimentList />

                {/* Список товаров */}
                <ProductsSection />

                {/* Список сотрудников */}
                <EmployersList />

                {/* Список брендов */}
                <BrandsSection />

                {/* Список вопросов */}
                <QASection />
            </Layout>
        </>
    )
}
import AssortimentList from "../components/assortimentList";
import Layout from "../components/layout";
import ProductsSection from "../components/productsSection";
import Slider from "../components/slider";

export default function Home() {
    return (
        <Layout>
            <Slider />
            <AssortimentList />
            <ProductsSection />
        </Layout>
    )
}
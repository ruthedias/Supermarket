import { MainLayout, PageLayout } from "../../components/layout";
import { products } from "../../data/products"
import { CardProduct } from "../../components/home/cards";
import { Banner } from "../../components/imageComponentes";
import { H1 } from "../../components/textComponents";

export default function Screen(){
    return(
        <PageLayout>
            <Banner source={require('../../assets/banner.png')}/>
            <MainLayout>
                <H1>PRODUTOS</H1>
                {products.map((product) => (
                    <CardProduct key={product.id} product={product}/>
                ))}
            </MainLayout>
       </PageLayout>
    );
}
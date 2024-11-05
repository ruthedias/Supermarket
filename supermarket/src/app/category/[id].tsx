import { useLocalSearchParams } from "expo-router";
import { categories, data } from "../../data/products";
import { Product } from "../../types/product";
import { MainLayout } from "../../components/layout";
import { CardProduct } from "../../components/home/cards";
import { H1 } from "../../components/textComponents";

export default function ScreenCategory() {
    const { id } = useLocalSearchParams();
    const categoryId = Number(id);

    console.log("category id: ", categoryId);
    
    const products : Product[] = Array.isArray(data.products)
     ? data.products.filter(product => product.category === categoryId) : [];
    const categoryCurrent = categories.find(category => category.id === categoryId);
     
    return(
        <MainLayout>
            <H1 textStyle={{textAlign: 'center', margin: 10, fontSize: 32}}>{categoryCurrent?.name}</H1>
            { products.length  > 0 ?(
                products.map((product) => (
                    <CardProduct key={product.id} product={product}/>
                ))):(
                    <H1>Não há itens disponíveis :(</H1>
                )}
        </MainLayout>
    );
}

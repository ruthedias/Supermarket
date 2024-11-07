import { MainLayout, PageLayout } from "../../components/Container";
import { products } from "../../data/products"
import { Banner } from "../../components/ImageStyle";
import { H1, TextButton } from "../../components/Text";
import { Button, ButtonCategory, } from "../../components/Button";
import { Alert, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { CartStore } from "../../store/cartStore";
import { Product } from "../../types/product";
import { useState } from "react";
import { Products } from "../../components/Card";

export default function Screen(){
    const cartStore = CartStore();
    const router = useRouter();
    const [areaShow, setAreaShow] = useState(false);

    //Função para carregar para página de detalhes do produto
    const HandleTouchCard = (productId: number) => {
        if(productId){
            const product = products.find(curent => curent.id === productId);
            router.push({
                pathname: `../product/${productId}`,
                params: { product: JSON.stringify(product)},
            });
        }
    }

    //Adicona o produto ao carrinho de compras e exibir mensagem de cobfirmação
    const handleAddToCart = (product: Product) => {
        cartStore.addItem(product);
        Alert.alert("Produto adicionado ao Carrinho", `${product.name}`, [
            {text: "OK"}
        ])
    }
    //Alterna a visualização da área de categorias
    const handleClick = () => {
        setAreaShow(!areaShow);
    }

    //Navega para a categoria selecionada
    const handleCategorySelect = ( id: number ) => {
        router.push(`/category/${id}`);
    }

    return(
        <PageLayout>
            <Banner source={require('../../assets/banner.png')}/>
            <Button buttonStyle={{marginTop: 0, width: '100%', borderRadius: 0, height: 50}}
                    onPress={handleClick}>
                <H1 textStyle={{color:"#ED1105"}}>CATEGORIAS</H1>
            </Button>
            {areaShow && <ButtonCategory onPress={handleCategorySelect}/>}
            <MainLayout>
                <H1>PRODUTOS</H1>
                {products.map((product) => (
                    <TouchableOpacity key={product.id} onPress={() => HandleTouchCard(product.id)}>
                        <Products product={product}>
                            <Button onPress={() => handleAddToCart(product)}>
                                <TextButton textStyle={{color: '#CD1105'}}>Adicionar ao carrinho</TextButton>
                            </Button>
                        </Products>
                    </TouchableOpacity>
                ))}
            </MainLayout>
       </PageLayout>
    );
}
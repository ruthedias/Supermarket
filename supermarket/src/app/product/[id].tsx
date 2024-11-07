import { Alert, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Product } from "../../types/product";
import { CardDetails } from "../../components/Card";
import { MainLayout, PageLayout } from "../../components/Container";
import { Button } from "../../components/Button";
import { TextButton } from "../../components/Text";
import { CartStore } from "../../store/cartStore";

type RouteParams = {
    params: {
        product : string;
    }
}

export default function ScreenDetailsProduct (){
    const route = useRoute<RouteProp<RouteParams, 'params' >>(); //obtém os parametros da rota
    const params = route.params;
    const product : Product | null = params && params.product ? JSON.parse(params.product) : null;
    const cartStore = CartStore();

    //mensagem de erro caso o produto não seja encontrado
    if(!product){
        return <Text>Produto não encontrado.</Text>
    }

    //Adiciona o produto ao carrinho
    const handleAddToCart = (product: Product) => {
        cartStore.addItem(product);
        Alert.alert("Produto adicionado ao Carrinho", `${product.name}`, [
            {text: "OK"}
        ])
    }

    return(
        <PageLayout>
            <MainLayout>
                <CardDetails key={product.id} product={product}>
                    <Button onPress={() => handleAddToCart(product)} 
                            buttonStyle={{width: 300, height: 50}}>
                        <TextButton textStyle={{color: '#CD1105'}}>Adicionar ao carrinho</TextButton>
                    </Button>
                </CardDetails>
            </MainLayout>
        </PageLayout>
    );
}
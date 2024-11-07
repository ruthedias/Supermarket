import { observer } from "mobx-react-lite";
import { MainLayout, PageLayout } from "../../components/Container";
import { CartStore } from "../../store/cartStore";
import { Product } from "../../types/product";
import { TouchableOpacity, View } from "react-native";
import { PriceTotal, Products } from "../../components/Card";
import { useRouter } from "expo-router";
import { products } from "../../data/products";
import { TextButton } from "../../components/Text";
import { Button } from "../../components/Button";

//Componente que exibe as informações do carrinho de compras e que permite aumentar, diminuir e remover itens
const CartScreen = observer(() => {
    const router = useRouter();
    const cartStore = CartStore();

    //Aumenta a quantidade do produto no carrinho 
    const handleIncrease = ( product: Product ) => {
        cartStore.addItem(product);
    };
    //Diminui a quantidade do protudo no carrinho
    const handleDecrease = ( product: Product ) => {
        cartStore.removeUndItem(product);
    };
    //Remove completamente um produto do carrinho
    const handleRemove = ( product: Product ) => {
        cartStore.removeItemCompletely(product);
    };
    //Calcula o resultado total dos itens do carrinho
    const total = cartStore.getTotal();
    
    //Navega para página de detalhes do produto selecionado
    const HandleTouchCard = (productId: number) => {
        if(productId){
            const product = products.find(curent => curent.id === productId);
            router.push({
                pathname: `../product/${productId}`,
                params: { product: JSON.stringify(product)},
            });
        }
    }
    return(
        <View style={{flex: 1, position: 'relative'}}>
        <PageLayout>
            <MainLayout>
            <View style={{marginBottom: 80}}>
                {cartStore.cartItems.map((item) => (
                    <Products key={item.product.id} product={item.product}>
                        <TouchableOpacity onPress={() => HandleTouchCard(item.product.id)}>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                <Button buttonStyle={{width: 32, height: 32, marginHorizontal: 4}} onPress={() => handleDecrease(item.product)}>
                                    <TextButton textStyle={{color: "#ED1105"}}>-</TextButton>
                                </Button>
                                <Button buttonStyle={{backgroundColor: '#F9F9F9', width: 32, height: 32, marginHorizontal: 4}} >
                                    <TextButton textStyle={{color: 'gray', fontSize: 22}}>{item.quantity}</TextButton>
                                </Button>
                                <Button buttonStyle={{width: 32, height: 32}} onPress={() => handleIncrease(item.product)}>
                                    <TextButton textStyle={{color: "#ED1105"}}>+</TextButton>
                                </Button>
                                <Button buttonStyle={{width : 90, height: 32, backgroundColor: 'red', marginHorizontal: 4}} 
                                        onPress={() => handleRemove(item.product)}>
                                    <TextButton textStyle={{color: 'white'}}>Excluir</TextButton>
                                </Button>
                            </View>
                        </TouchableOpacity>
                    </Products>
                ))}
             </View>
            </MainLayout>
        </PageLayout>
            <PriceTotal>Total do Carrinho: R${total.toFixed(2)}</PriceTotal>
        </View>
    );
})

export default CartScreen;
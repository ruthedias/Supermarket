import { observer } from "mobx-react-lite";
import { MainLayout, PageLayout } from "../../components/layout";
import { CartProduct, PriceTotal } from "../../components/shoppingCart/card";
import { CartStore } from "../../store/cartStore";
import { Product } from "../../types/product";
import { View } from "react-native";

const CartScreen = observer(() => {
    
    const cartStore = CartStore();

    const handleIncrease = ( product: Product ) => {
        cartStore.addItem(product);
    };

    const handleDecrease = ( product: Product ) => {
        cartStore.removeUndItem(product);
    };

    const handleRemove = ( product: Product ) => {
        cartStore.removeItemCompletely(product);
    }
    const total = cartStore.getTotal();
    
    return(
        <View style={{flex: 1, position: 'relative'}}>
        <PageLayout>
            <MainLayout>
            <View style={{marginBottom: 80}}>
                {cartStore.cartItems.map((item) => (
                    <CartProduct 
                        key={item.product.id}
                        product={item.product}
                        quantity={item.quantity}
                        onDecrease={() => handleDecrease(item.product)}
                        onIncrease={() => handleIncrease(item.product)}
                        onRemove={() => handleRemove(item.product)}
                        />
                ))} 
                </View>
            </MainLayout>
        </PageLayout>
            <PriceTotal>Total do Carrinho: R${total.toFixed(2)}</PriceTotal>
        </View>
    );
})

export default CartScreen;
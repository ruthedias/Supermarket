import { MainLayout, PageLayout } from "../../components/layout";
import { CartProduct } from "../../components/shoppingCart/card";
import { Text } from "react-native";
export default function CartScreen(){
    return(
        <PageLayout>
            <MainLayout>
                <Text>
                    Carrinho vazio
                </Text>
            </MainLayout>
        </PageLayout>
    );
}
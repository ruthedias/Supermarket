import { useLocalSearchParams, useRouter } from "expo-router";
import { categories, data } from "../../data/products";
import { Product } from "../../types/product";
import { MainLayout } from "../../components/Container";
import { H1, TextButton } from "../../components/Text";
import { Alert, Pressable, TouchableOpacity } from "react-native";
import { Button } from "../../components/Button";
import { CartStore } from "../../store/cartStore";
import { Products } from "../../components/Card";

export default function ScreenCategory() {
    const { id } = useLocalSearchParams(); //Obtem o id da categoria
    const categoryId = Number(id); // Converte o id para number
    const cartStore = CartStore(); //Acessa o store do carrinho
    const router = useRouter(); //Roteador para navegação
    
    //Filtra os produtos pela categoria
    const products : Product[] = Array.isArray(data.products)
     ? data.products.filter(product => product.category === categoryId) : []; 

     //Busca a categoria atual
    const categoryCurrent = categories.find(category => category.id === categoryId);

    //Navega para a página de detalhes do produto
    const HandleTouchCard = (productId: number) => {
        if(productId){
            const product = products.find(curent => curent.id === productId);
            router.push({
                pathname: `../product/${productId}`,
                params: { product: JSON.stringify(product)},
            });
        }
    }
    //Adiciona o produto ao carrinho
    const handleAddToCart = (product: Product) => {
        cartStore.addItem(product);
        Alert.alert("Produto adicionado ao Carrinho", `${product.name}`, [
            {text: "OK"}
        ])
        console.log(product)
    }
     
    return(
        <MainLayout>
            <H1 textStyle={{textAlign: 'center', margin: 10, fontSize: 32}}>{categoryCurrent?.name}</H1>
            { products.length  > 0 ? (
                products.map((product) => (
                    <TouchableOpacity key={product.id} onPress={() => HandleTouchCard(product.id)}>
                        <Products product={product}>
                            <Button>
                                <Pressable onPress={() => handleAddToCart(product)}>
                                    <TextButton textStyle={{color: '#CD1105'}}>Adicionar ao carrinho</TextButton>
                                </Pressable>
                            </Button>
                        </Products>
                    </TouchableOpacity>
                )
                )):(
                    <H1>Não há itens disponíveis :(</H1>
                )}
        </MainLayout>
    );
}

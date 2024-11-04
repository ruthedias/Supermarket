import { Product } from "../../types/product";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { H1, H2, H3, TextButton } from "../textComponents";

type Props = {
    product : Product;
}

export const CardDetails = ({product}: Props) => {
    return(
        <View style={styles.container}>
            <Image style={styles.imageDetails} 
                source={{ uri: product.image }}
                resizeMode="contain"
            />
            <View style={styles.containerDetails}>
                <H1>{product.name}</H1>
                <H2>Por R$: {product.price.toFixed(2)}</H2>
            </View>
            <View style={styles.containerDetails}>
                <H3>{product.description}</H3>
            </View>
            <View style={styles.containerCenter}>
                <Pressable style={styles.buttonToCart}>
                    <TextButton textStyle={{color: '#CD1105'}}>Adicionar ao Carrinho</TextButton>
                </Pressable>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal: 20,
        marginTop: 12,
    },
    imageDetails : {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 5,
    },
    containerDetails : {
        marginVertical: 12,
    },
    buttonToCart: {
        height: 50,
        width: 300,
        backgroundColor: '#FFCD00',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    containerCenter: {
        alignItems: 'center'
    }

});
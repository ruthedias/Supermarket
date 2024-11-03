import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Product } from "../../types/product"
import { H2, H3, TextButton } from "../textComponents";
import { ImageCard } from "../imageComponentes";
import { ButtonCart } from "./button";

type Props = {
    product : Product;
}

export const CartProduct = ({product}: Props) => {
    //criar rota para detalhar o produto
    return(
        <TouchableOpacity>
            <View style={styles.rowView}>
                <ImageCard source={{ uri : product.image }}/>
                <View style={styles.columnView}>
                    <H2>{product.name}</H2>
                    <H3>Por R$: {product.price.toFixed(2)}</H3>
                    <View style={styles.rowViewButton}>
                        <ButtonCart><TextButton>-</TextButton></ButtonCart>
                        <ButtonCart><TextButton>1</TextButton></ButtonCart>
                        <ButtonCart><TextButton>+</TextButton></ButtonCart>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        backgroundColor: '#F9F9F9', 
        padding: 10,
        borderRadius: 8,
        marginTop: 12,
    },
    rowViewButton: {
        flexDirection: 'row',
        marginTop: 10,
    },
    columnView: {
        flexDirection: 'column',
        marginLeft: 8
    }
    
});
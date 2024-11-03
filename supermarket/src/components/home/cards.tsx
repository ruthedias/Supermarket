import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { Product } from "../../types/product"
import { H2, H3, TextButton } from "../textComponents";
import { ButtonCard } from "./buttons";
import { ImageCard } from "../imageComponentes";

type Props = {
    product : Product;
}

export const CardProduct = ({product}: Props) => {
    //criar rota para detalhar o produto
    return(
        <TouchableOpacity>
            <View style={styles.rowView}>
                <ImageCard source={{ uri : product.image }}/>
                <View style={styles.columnView}>
                    <H2>{product.name}</H2>
                    <H3>Por R$: {product.price.toFixed(2)}</H3>
                    <ButtonCard>
                        <TextButton textStyle={{color: '#CD1105'}}>
                            Adicionar ao Carrinho
                        </TextButton>
                    </ButtonCard>
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
    columnView: {
        flexDirection: 'column',
        marginLeft: 8
    }
    
});
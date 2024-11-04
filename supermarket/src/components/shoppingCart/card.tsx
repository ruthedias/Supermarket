import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Product } from "../../types/product"
import { H2, H3, TextButton } from "../textComponents";
import { ImageCard } from "../imageComponentes";
import { ButtonCart } from "./button";

type Props = {
    product : Product;
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
    onRemove: () => void;
}
type PriceProps = {
    children : React.ReactNode;
}

export const CartProduct = ({product, quantity, onDecrease, onIncrease, onRemove}: Props) => {
    //criar rota para detalhar o produto
    return(
        <TouchableOpacity>
            <View style={styles.rowView}>
                <ImageCard source={{ uri : product.image }}/>
                <View style={styles.columnView}>
                    <H2>{product.name}</H2>
                    <H3>Unidade: {product.price.toFixed(2)}</H3>
                    <View style={styles.rowViewButton}>
                        <ButtonCart onPress={onDecrease}>
                            <TextButton textStyle={{color: "#ED1105"}}>-</TextButton>
                        </ButtonCart>
                        <ButtonCart style={{backgroundColor: '#F9F9F9'}}>
                            <TextButton textStyle={{color: 'gray', fontSize: 22}}>{quantity}</TextButton>
                        </ButtonCart>
                        <ButtonCart onPress={onIncrease}>
                            <TextButton textStyle={{color: "#ED1105"}}>+</TextButton>
                        </ButtonCart>
                        <ButtonCart onPress={onRemove} style={{width : 90, backgroundColor: 'red'}}>
                            <TextButton textStyle={{color: 'white'}}>Excluir</TextButton>
                        </ButtonCart>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
export const PriceTotal = ({children} : PriceProps) => {
    return(
        <View style={styles.priceTotal}>
            <H2>{children}</H2>
        </View>
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
    },
    priceTotal: {
        backgroundColor: '#F0F8FF',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'static',
        bottom: 0,
        elevation: 5,
    }
    
});
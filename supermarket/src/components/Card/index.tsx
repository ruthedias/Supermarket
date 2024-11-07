import { Product } from "../../types/product";
import { Image, StyleSheet, View } from "react-native";
import { H1, H2, H3} from "../Text";
import { ImageCard } from "../ImageStyle";

type Props = {
    product : Product;
    quantity?: number;
    children?: React.ReactNode;
}
type PriceProps = {
    children?: React.ReactNode;
}

export const CardDetails = ({product, children}: Props) => {
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
                {children}
            </View>
        </View>
    );
}
export const Products = ({product, children}: Props) => {
    return(
        <View style={styles.rowView}>
            <ImageCard source={{ uri : product.image }}/>
            <View style={styles.columnView}>
                <H2>{product.name}</H2>
                <H3>Por R$: {product.price.toFixed(2)}</H3>
                {children}
            </View>
        </View>
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
    containerCenter: {
        alignItems: 'center'
    },
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
    },
    priceTotal: {
        backgroundColor: 'white',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 10,
    },

});
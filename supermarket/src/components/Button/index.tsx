import { categories } from "../../data/products";
import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { H1 } from "../Text";

type Props = {
    children?: React.ReactNode;
    buttonStyle?: ViewStyle;
    onPress?: () => void;
}
type PropsCategory = {
    onPress: (id: number) => void;
}

export const ButtonCategory = ({onPress}: PropsCategory) => {
    return(
        <View>
            {categories.map((item) => (
                <TouchableOpacity key={item.id} style={styles.row} onPress={() => onPress && onPress(item.id)}>
                <Image style={styles.iamgeDrop} source={{ uri: item.image}}/>
                <H1>{item.name}</H1>
                </TouchableOpacity>
            ))}
        </View>
    );
}

export const Button = ({children, buttonStyle, onPress}: Props) =>{
    return(
        <TouchableOpacity style={[styles.buttonCard, buttonStyle]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iamgeDrop: {
        width: 50,
        height: 50, 
        borderRadius: 12,
        marginRight: 5,
    },
    row: {
        flexDirection: 'row',
        margin: 4,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: '#F9F9F9',
    },
    buttonCard: {
        height: 40,
        width: 220,
        backgroundColor: '#FFCD00',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
});
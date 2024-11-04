import { Pressable, StyleSheet } from "react-native";

type Props = {
    children : React.ReactNode;
    style?: object;
    onPress? : () => void;
}

export const ButtonCart = ({children, style: style, onPress}: Props) => {
    return(
        <Pressable style={[styles.buttonCart, style]} onPress={onPress}>{children}</Pressable>
    );
}

const styles = StyleSheet.create({
    buttonCart:{
        width: 32,
        height: 32,
        backgroundColor: "#FFCD00",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: 4
    }
});
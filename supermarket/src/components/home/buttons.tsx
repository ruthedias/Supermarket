import { Pressable, StyleSheet } from "react-native";

type Props ={
    children : React.ReactNode;
    onPress?: () => void;
}

export const ButtonCard = ({children}: Props) =>{
    return(
        <Pressable style={styles.buttonCard}>{children}</Pressable>
    );
}
const styles = StyleSheet.create({
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
import { TextStyle, Text, StyleSheet } from "react-native";

type textProps = {
    children : React.ReactNode;
    textStyle?: TextStyle;
}

export const H1 = ({ children, textStyle}: textProps) => {
    return <Text style={[styles.h1, textStyle]}>{children}</Text>
}

export const H2 = ({ children, textStyle}: textProps) => {
    return <Text style={[styles.h2, textStyle]}>{children}</Text>
}

export const H3 = ({ children, textStyle}: textProps) => {
    return <Text style={[styles.h3, textStyle]}>{children}</Text>
}

export const TextButton = ({ children, textStyle}: textProps) => {
    return <Text style={[styles.textButton, textStyle]}>{children}</Text>
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    }
});
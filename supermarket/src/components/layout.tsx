import { ScrollView, StyleSheet, View } from "react-native";

type LayoutProps = {
    children : React.ReactNode;
}

export const PageLayout = ({children}: LayoutProps) => {
    return(
        <ScrollView style={styles.pageLayout}>{children}</ScrollView>
    );
}
export const MainLayout = ({children}: LayoutProps) => {
    return(
        <View style={styles.mainLayout}>{children}</View>
    );
}
const styles = StyleSheet.create({
    pageLayout: {
        flex: 1,
        backgroundColor: '#E0E0E0', 
        position: 'relative'
    },
    mainLayout: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 12,
    }
});
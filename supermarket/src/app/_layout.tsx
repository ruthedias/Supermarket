import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack screenOptions={{headerShown: false }}>
            <Stack.Screen name="product/[id]" options={{
                headerShown: true,
                title: "Detalhes do Produto",
                headerStyle : {backgroundColor: '#FFCD00'},
                headerTintColor: '#ED1105',
                headerTitleStyle : {
                    fontWeight: "bold",
                    fontSize: 24,
                },
            }}/>
        </Stack>
    );
}
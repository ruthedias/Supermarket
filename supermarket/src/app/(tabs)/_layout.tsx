import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout(){
    const HandleClick = () => {
        router.navigate('/shoppingCart');
    }
    return(
        <Tabs screenOptions={{
            headerStyle : { backgroundColor: "#FFCD00"},
            headerTintColor: "#ED1105",
            headerTitleStyle : {
                fontWeight: "bold",
                fontSize: 24,
            },
            tabBarActiveTintColor: "#FFCD00",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {backgroundColor: '#ED1105'},
            headerRight : () => 
                <Pressable style={{marginRight: 16}} onPress={HandleClick}>
                    <FontAwesome name="shopping-cart" size={24} color="#ED1105"/>
                </Pressable>
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "REDE MERCADO",
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28} name="home" color={color}
                    />,
                }}
            />
            <Tabs.Screen
                name="shoppingCart"
                options={{
                    headerTitle: "Seu Carrinho",
                    title:"CARRINHO",
                    tabBarIcon: ({ color }) => <FontAwesome
                        size={28} name="shopping-cart" color={color}
                    />
                }}
            />
        </Tabs>
    );
}
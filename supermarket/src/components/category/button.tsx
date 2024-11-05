import React, { useState } from "react";
import { data, categories } from "../../data/products";
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { H1 } from "../textComponents";
import { useRouter } from "expo-router";
import { Category } from "../../types/category";

type Props = {
    category : Category;
}

export const DropdownCategory = () => {
    const [areaShow, setAreaShow] = useState(false);

    const handleClick = () => {
        setAreaShow(!areaShow);
    }
    return(
        <View>
            <Pressable style={styles.buttonDropdown} onPress={handleClick}>
                <H1 textStyle={{color:"#ED1105"}}>CATEGORIAS</H1>
            </Pressable>
            {areaShow &&
                <View>
                    {categories.map((item) => (
                        <ButtonCategory key={item.id} category={item}/>
                    ))}
                </View>
            }
        </View>
    );
}
export const ButtonCategory = ({category}: Props) => {
    const router = useRouter();

    const handleCategorySelect = ( id: number ) => {
        router.push(`/category/${id}`);
        console.log("navegando p", id);
    }

    return(
        <TouchableOpacity style={styles.row} onPress={() => handleCategorySelect(category.id)}>
            <Image style={styles.iamgeDrop} source={{ uri: category.image}}/>
            <H1>{category.name}</H1>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonDropdown:{
        width: '100%',
        height: 50, 
        backgroundColor: '#FFCD00',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
});
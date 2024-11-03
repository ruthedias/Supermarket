import { Image, StyleSheet } from "react-native";

type ImageProps = {
    source: any;
    margin?: number;
};

export const Banner = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageBanner}/>
    );
}

export const ImageCard = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageCard}/>
    );
} 
export const ImageDetails = ({source}: ImageProps) => {
    return(
        <Image source={source} style={styles.imageDetails} resizeMode={"contain"}/>
    );
} 
const styles = StyleSheet.create({
    imageBanner: {
        width: "100%",
        height: 112
    },
    imageCard: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    imageDetails:{
        width: 300,
        height: 300,
    }
});
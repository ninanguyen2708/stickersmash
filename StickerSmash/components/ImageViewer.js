import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PlaceholderImageSource }) {
    return (
        <Image
            style={ styles.image }
            source={ PlaceholderImageSource }
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        margin: 10,
        borderRadius: 18,
    },
});
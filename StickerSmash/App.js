import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View} from 'react-native';

import Button from './components/button';
import ImageViewer from './components/ImageViewer';

const {width, height} = Dimensions.get('window');
const PlaceholderImage = require('./assets/images/background_image.png');
const imagee = require('./assets/images/emoji3.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trending</Text>
      <View style={styles.imageContainer}>
        <ImageViewer PlaceholderImageSource={ imagee } />
        <ImageViewer PlaceholderImageSource={ PlaceholderImage } />
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo" ></Button>
        <Button label="Use this photo" ></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // alignItems: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: width,
    height: height,
  },

  text: {
    color: 'black',
  },

  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    // flex: 1,
    // paddingTop: 58,
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

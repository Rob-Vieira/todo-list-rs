import { Text, View } from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

type Props = {
    text: string;
    counter: string;
    secondaryColor?: boolean;
}

export function Indicator({text, counter, secondaryColor = false} : Props){
    const [ fontLoaded ] = useFonts({
      Inter_400Regular,
      Inter_700Bold
    });
  
    if(!fontLoaded) <AppLoading />
    return (
        <View style={styles.container}>
            <Text style={[styles.text, (secondaryColor ? styles.secondaryText : styles.primaryText)]}>
                {text}
            </Text>
            <View style={styles.counter}>
                <Text style={styles.counterText}>
                    {counter}
                </Text>
            </View>
        </View>
    );    
}
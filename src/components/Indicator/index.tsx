import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    counter: string;
    secondaryColor?: boolean;
}

export function Indicator({text, counter, secondaryColor = false} : Props){
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
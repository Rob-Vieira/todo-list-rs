import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export function EmptyListItem(){
    const [ fontLoaded ] = useFonts({
      Inter_400Regular,
      Inter_700Bold
    });
  
    if(!fontLoaded) <AppLoading />
    
    return (
        <View style={styles.container}>
           <Image 
                style={styles.clipboard} 
                source={require('../../assets/images/clipboard.png')} 
            /> 
           <Text style={styles.textBold}>
                Você ainda não tem tarefas cadastradas
            </Text>
           <Text style={styles.text}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}
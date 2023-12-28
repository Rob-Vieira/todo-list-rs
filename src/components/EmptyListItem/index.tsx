import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyListItem(){
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
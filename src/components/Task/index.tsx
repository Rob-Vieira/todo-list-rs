import { Text, View } from "react-native";

type Props = {
    title: string;
    checked: boolean;
    onPress: () => void;
}

export function Task({title, checked, onPress} : Props){
    return (
        <View>
            {
                checked ? (
                    <Text>Teste</Text> 
                ):(
                    <Text>Teste2</Text> 
                )
            }     
        </View>
    );
}
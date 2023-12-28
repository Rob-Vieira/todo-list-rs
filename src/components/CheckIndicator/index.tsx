import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../theme";

type Props = {
    checked: boolean;
    onCheck: () => void;
}

export function CheckIndicator({checked, onCheck}: Props){
    return (
        <TouchableOpacity 
            onPress={onCheck}
            style={styles.contianer}
        >
            <View style={[styles.iconContainer, checked && styles.iconContainerChecked]}>
                {
                    checked && (<AntDesign name="check" size={16} color={theme.gray100}/>)
                }
            </View>
        </TouchableOpacity>
    );
}
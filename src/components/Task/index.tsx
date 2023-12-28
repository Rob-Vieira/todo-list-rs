import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../theme";
import { CheckIndicator } from "../CheckIndicator";

type Props = {
    title: string;
    checked: boolean;
    onDelete: () => void;
    onCheck: () => void;
}

export function Task({title, checked, onDelete, onCheck} : Props){
    return (
        <View style={[styles.container, checked && styles.containerChecked]}>
            <CheckIndicator 
                checked={checked} 
                onCheck={onCheck} 
            />
            <Text style={[styles.title, checked && styles.titleChecked]}>
                {title}
            </Text>
            <TouchableOpacity 
                onPress={onDelete} 
                style={styles.button}
            >
                <AntDesign name="delete" size={18} color={theme.gray300} />
            </TouchableOpacity>
        </View>
    );
}
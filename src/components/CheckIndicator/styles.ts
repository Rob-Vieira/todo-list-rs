import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    contianer: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        width: 24,
        height: 24,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: theme.blue,
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainerChecked: {
        backgroundColor: theme.purple,
        borderWidth: 0,
    }
});
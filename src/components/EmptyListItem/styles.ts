import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 48,
        borderTopWidth: 1,
        borderColor: theme.gray400
    },
    clipboard: {
        width: 56,
        height: 56,
        marginBottom: 16
    },
    textBold: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        fontWeight: "bold",
        color: theme.gray300
    },
    text: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
        color: theme.gray300
    }
});
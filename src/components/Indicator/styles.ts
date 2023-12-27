import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 8
    },
    text: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        fontWeight: 'bold'
    },
    primaryText: {
        color: theme.blue
    },
    secondaryText: {
        color: theme.purple
    },
    counter: {
        backgroundColor: theme.gray400,
        minWidth: 25,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 999
    },
    counterText: {
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        fontWeight: 'bold',
        color: theme.gray200,
    }
});
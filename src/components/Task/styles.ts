import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        backgroundColor: theme.gray500,
        borderRadius: 6,
        borderColor: theme.gray400,
        borderWidth: 1,
        marginBottom: 8,
        gap: 8
    },
    containerChecked: {
        borderColor: theme.gray500
    },
    titleContainer: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flex: 1
    },
    title: {
        color: theme.gray100,
        fontSize: 14,
        flex: 1
    },
    titleChecked: {
        textDecorationLine: 'line-through'
    },
    button: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center"
    }
});
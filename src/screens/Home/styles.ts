import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.gray700,
        flex: 1,
    },
    header: {
        padding: 24,
        height: 173,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 110,
        height: 32
    },
    listContainer: {
        backgroundColor: theme.gray600,
        flex: 1,
        padding: 24,
        position: 'relative'
    },
    inputContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        top: -28,
        left: 24
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: theme.gray100,
        backgroundColor: theme.gray500,
        borderWidth: 1,
        borderColor: theme.gray700,
        borderRadius: 6,
        paddingHorizontal: 16,
        height: 54,
    },
    inputFocus: {
        borderColor: theme.purpleDark
    },
    button: {
        width: 52,
        height: 52,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.blueDark,
        borderRadius: 6
    },
    buttonText: {

    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingTop: 32,
        paddingBottom: 24,
    }
});
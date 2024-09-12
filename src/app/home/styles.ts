import { StyleSheet } from "react-native";

import { theme } from "@/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_200
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        paddingHorizontal: 24, /*para descolar dos cantos*/
    },
    input: {
        marginBottom: -27, /* metade da altura do input (54), para ficar na entrelinha*/
    },
    section: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        backgroundColor: theme.colors.blue,
        width: 35,
        height: 35,
        color: theme.colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 12,
    },
    contentList:{
        
    }
})
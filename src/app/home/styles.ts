import { StyleSheet } from "react-native";

import { theme } from "@/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        paddingHorizontal: 24, /*para descolar dos cantos*/
    },
    input: {
        marginBottom: 27, /* metade da altura do input (54), para ficar na entrelinha*/
    },
})
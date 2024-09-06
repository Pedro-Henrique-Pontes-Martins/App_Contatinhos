import { View } from "react-native";
import {Feather} from "@expo/vector-icons"

import {styles} from './styles'
import { Input } from "../components/input";
import { theme } from "@/themes";
import { Contact } from "../components/contact";

import { useState } from "react";

export function Home(){
    const [name, setName] = useState("")

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                <Feather name="search" size={16} color={theme.colors.gray_300}>
                </Feather>
                    <Input.Field 
                    placeholder="Pesquisar pelo nome..." onChangeText={setName} value=""/>
                <Feather name="x" size={16} color={theme.colors.gray_300} onPress={() => setName("")}>
                </Feather>
                </Input>
            </View>
            <Contact/>
        </View>
    )
}
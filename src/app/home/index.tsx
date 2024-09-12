import {Alert, View, SectionList, Text,   } from "react-native";
import {Feather} from "@expo/vector-icons"

import {styles} from './styles'
import { Input } from "../components/input";
import { theme } from "@/themes";

import * as Contacts from 'expo-contacts'

import { useState, useEffect, useId} from "react";

import {Contact, ContactProps} from "@/app/components/contact"

type SectionListDataProps = {
    id: string,
    title: string,
    data: ContactProps //Contato já está tipado
}

export function Home(){

    async function fetchContacts() {
        const [contacts, setContacts] = useState<SectionListDataProps[]>([])
        try{
            const {status} = await Contacts.requestPermissionsAsync()
            if(status === Contacts.PermissionStatus.GRANTED){
                const {data} = await Contacts.getContactsAsync()
                const list = data.map((contact) => ({
                    id: contact.id ?? useId(),
                    name: contact.name,
                    image: contact.image,
                })).reduce<SectionListDataProps[]>((acc: any, item) => {
                    const firstLetter = item.name[0].toUpperCase()

                    const existingEntry = acc.find((entry: SectionListDataProps) => 
                    (entry.title === firstLetter))

                    if(existingEntry){
                        existingEntry.data.push(item)
                    } else{
                        acc.push({title: firstLetter, data: [item]})
                    }

                    return acc
                }, [])
                setContacts(list)
            }
            
        } catch(error){
            console.log(error)
            Alert.alert("Contatos", "Não foi possível carregar os contatos...")
        }
    }

    const [name, setName] = useState("")
    const [contacts, setContacts] = useState<SectionListDataProps[]>([])

    useEffect(() =>{
        fetchContacts()
    }, [])
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
            <Contact contact={{
                name: "Pedroso",
                image: require("@/assets/avatar.jpeg")
            }}/>
            <SectionList
                sections={[{title: "R", data: [{id: "1", name: "Heloísa"}] }]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Contact contact={item} />
                )}
                renderSectionHeader = {({section}) => 
                    (<Text style={styles.section}>{section.title}</Text>)}

                contentContainerStyle = {styles.contentList}
            />
        </View>
    )
}
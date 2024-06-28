import { Image, ListRenderItem, Pressable, StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import NavbarScrollView from './components/NavbarScrollView'
import {contacts} from './data/contacts';
import { router } from 'expo-router';



const HomePage = () => {
    return (
        <NavbarScrollView
        title='Settings' 
        hideBackBtn={true}>
            {contacts.map((item, index) => {
                return(
                    <Pressable key={index} onPress={() => {router.push(`/users/${item.id}`)}} >
                        <View style={styles.contactItem}>
                        <Text style={styles.name}>{item.name}</Text>
                        {item.phone && <Text style={styles.phone}>{item.phone}</Text>}
                    </View>
                    </Pressable>)
                    }
                )
            }
        </NavbarScrollView>
  )
}

export default HomePage

const v = StyleSheet.create({})

const styles = StyleSheet.create({
    content: {
        padding: 24,
        paddingTop: 212,
        backgroundColor: '#fff',
    },

    contactItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    phone: {
        fontSize: 16,
        color: '#555',
    }
})
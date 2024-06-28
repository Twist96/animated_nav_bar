import { Image, ListRenderItem, Pressable, StyleSheet, View, Text, FlatList } from 'react-native'
import React from 'react'
import NavbarScrollView from './components/NavbarScrollView'
import {contacts} from './data/contacts';
import AntDesign from '@expo/vector-icons/AntDesign';



const HomePage = () => {
    return (
        <NavbarScrollView
        title='Settings' 
        hideBackBtn={false} 
        trailing={<AntDesign name="setting" size={24} color="black" />}>
            {contacts.map((item, index) => {
                return(
                    <Pressable key={index} >
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
    
    // card: {
    //     flexDirection: 'row',
    //     alignItems: 'stretch',
    //     borderRadius: 12,
    //     marginBottom: 16,
    //     backgroundColor: '#fff',
    // },

    // cardImg: {
    //     width: 120,
    //     height: 154,
    //     borderRadius: 12,
    //   },
})
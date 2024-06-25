import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';


const NavBar
 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <AntDesign name="setting" size={24} color="black" />
        </View>
        <Text style={styles.title}>Title</Text>
        <View style={styles.searchBar}>
            <AntDesign name="search1" size={14} color="black" />
            <TextInput placeholder='Search' style={styles.textInput}/>
            <FontAwesome name="microphone" size={14} color="black" />
        </View>

        <ScrollView>
            
        </ScrollView>
    </View>
  )
}

export default NavBar


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        paddingHorizontal: 8,
        paddingTop: 54,
        paddingBottom: 15,
        height: 202,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFFBF'

    },
    header: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 34,
        fontWeight: '700'
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#7676801F'

    },
    textInput: {
        flex: 1,
        height: 22,
        paddingVertical: 16,
        paddingHorizontal: 4
    }
})
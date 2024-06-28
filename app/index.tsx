import { Image, Pressable, StyleSheet, } from 'react-native'
import React from 'react'
import NavbarScrollView from './components/NavbarScrollView'
import { items } from './data'
import AntDesign from '@expo/vector-icons/AntDesign';

const HomePage = () => {
    return (
        <NavbarScrollView
        title='Settings' 
        hideBackBtn={false} 
        trailing={<AntDesign name="setting" size={24} color="black" />}>
            {items.map((item, index) => {
                return(
                    <Pressable key={index} style={styles.card}>
                        <Image
                        alt=''
                        resizeMode='cover'
                        source={{uri: item.img}}
                        style={styles.cardImg}/>
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
    
    card: {
        flexDirection: 'row',
        alignItems: 'stretch',
        borderRadius: 12,
        marginBottom: 16,
        backgroundColor: '#fff',
    },

    cardImg: {
        width: 120,
        height: 154,
        borderRadius: 12,
      },
})
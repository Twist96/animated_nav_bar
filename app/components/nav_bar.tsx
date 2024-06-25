import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { BlurView } from 'expo-blur';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';


const NavBar = ({headerStyle, show, hide, titleOffset, navHeight}) => {
  return (
    <Animated.View style={[styles.container, navHeight]}>
        <BlurView intensity={80} style={styles.absolute} />
        <Animated.View style={[styles.body, headerStyle]}>
        <View style={styles.header}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Animated.Text style={[styles.miniTitle, hide]}>Title</Animated.Text>
            <AntDesign name="setting" size={24} color="black" />
        </View>
        <Animated.Text style={[styles.title, titleOffset, show]}>Title</Animated.Text>
        <Animated.View style={[styles.searchBar]}>
            <AntDesign name="search1" size={14} color="black" />
            <TextInput placeholder='Search' style={styles.textInput}/>
            <FontAwesome name="microphone" size={14} color="black" />
        </Animated.View>
        </Animated.View>
    </Animated.View>
  )
}

export default NavBar


const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    container: {
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        height: 202,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        // backgroundColor: '#FFFFFFBF'
    },
    body: {
        height: 148,
        // paddingTop: 54,
        marginTop: 54,
        paddingBottom: 15,
        paddingHorizontal: 8,
        justifyContent: 'space-between'
    },
    header: {
        height: 44,
        // marginTop: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        // backgroundColor: '#fff'
    },
    title: {
        // transform: [{translateY: 44}],
        marginTop: 44,
        paddingTop: 8,
        paddingHorizontal: 8,
        height: 58,
        position: 'absolute',
        fontSize: 34,
        fontWeight: '700',
        zIndex: -1,
    },
    miniTitle: {
        fontSize: 17,
        fontWeight: 500
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
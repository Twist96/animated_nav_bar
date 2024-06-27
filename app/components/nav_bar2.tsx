import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const NavBar2 = ({navHeight, hideSearchBar, titleOffset, show, hide}) => {
  return (
    <Animated.View style={[styles.container, navHeight]}>
        <BlurView intensity={80} style={styles.absolute} />
        <View style={styles.header}>
            <View style={styles.controls}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Animated.Text style={[hide]}>Settings</Animated.Text>
                <AntDesign name="setting" size={24} color="black" />
            </View>
        </View>
        <View style={{zIndex: 0}}>
            <Animated.Text style={[styles.title, titleOffset, show]}>Settings</Animated.Text>
            <Animated.View style={[styles.searchBar, hideSearchBar]}>
                <AntDesign name="search1" size={14} color="black" />
                <TextInput placeholder='Search' style={styles.textInput}/>
                <FontAwesome name="microphone" size={14} color="black" />
            </Animated.View>
        </View>
    </Animated.View>
  )
}

export default NavBar2

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        paddingBottom: 15,
        justifyContent: "space-between",
        height: 202,
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    header: {
        height: 98,
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFFBF',
        zIndex: 1
    },
    controls: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 8,
        paddingEnd: 11
    },
    title: {
        paddingTop: 8,
        marginHorizontal: 16,
        height: 58,
        fontSize: 34,
        fontWeight: '700',
        justifyContent: 'center',
        zIndex: 0,
    },
    miniTitle: {
        fontSize: 17,
        fontWeight: 500
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: '#7676801F',
        minHeight: 0,
        overflow: 'hidden'
    },
    textInput: {
        flex: 1,
        height: 22,
        paddingVertical: 16,
        paddingHorizontal: 4
    }
})
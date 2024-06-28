import React, { ReactElement } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from 'react-native-reanimated';


const MIN_HEIGHT = 98;
const MAX_HEIGHT = 202;
const MAX_SEARCH_BAR_HEIGHT = 36;

interface Props {
    title: string,
    hideBackBtn?: Boolean,
    trailing?: ReactElement,
    scrollOffset: SharedValue<number>
}


const NavBar = ({title, hideBackBtn, trailing, scrollOffset}: Props) => {
    const hideSearchBar = useAnimatedStyle(() =>  {
        const height = MAX_SEARCH_BAR_HEIGHT - scrollOffset.value
        if (height >= MAX_SEARCH_BAR_HEIGHT) {
            return {height: MAX_SEARCH_BAR_HEIGHT}
        } else if (height < 0) {
            return {height: 0}
        } else {
            return {height}
        }
    })

    const titleOffset = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollOffset.value,
            [48, 80],
            [0, -48],
            Extrapolation.CLAMP
        )
        return {transform: [{translateY}]}
    })

    const navHeight = useAnimatedStyle(() => {
        const height = MAX_HEIGHT - scrollOffset.value
        return {height: height < MIN_HEIGHT ? MIN_HEIGHT : height}
    })

    const hide = useAnimatedStyle(() => {
        const height = (MAX_HEIGHT - 18) - scrollOffset.value
        return { opacity: height > MIN_HEIGHT ? 0 : 1  }
    })

    const show = useAnimatedStyle(() => {
        const height = (MAX_HEIGHT - 20) - scrollOffset.value
        return { opacity: height < MIN_HEIGHT ? 0 : 1  }
    })
    
  return (
    <Animated.View style={[styles.container, navHeight]}>
        <BlurView intensity={80} style={styles.absolute} />
        <View style={styles.header}>
            <View style={styles.controls}>
                {!hideBackBtn ? <AntDesign name="arrowleft" size={24} color="black" /> : <View/>}
                <Animated.Text style={[styles.miniTitle, hide]}>{title}</Animated.Text>
                {trailing !== undefined ? trailing : <View />}
            </View>
        </View>
        <View style={{zIndex: 0}}>
            <Animated.Text style={[styles.title, titleOffset, show]}>{title}</Animated.Text>
            <Animated.View style={[styles.searchBar, hideSearchBar]}>
                <AntDesign name="search1" size={14} color="black" />
                <TextInput placeholder='Search' style={styles.textInput}/>
                <FontAwesome name="microphone" size={14} color="black" />
            </Animated.View>
        </View>
    </Animated.View>
  )
}

export default NavBar

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
        fontWeight: 600
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
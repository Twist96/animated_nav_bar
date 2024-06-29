import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, ReactNode } from 'react'
import NavBar from './NavBar'
import Animated, { useAnimatedRef, useScrollViewOffset } from 'react-native-reanimated'

interface Props {
    title: string,
    hideBackBtn?: Boolean,
    trailing?: ReactElement,
    children: ReactNode,
    onSearch: (text: string) => void
}

const NavbarScrollView = ({title, hideBackBtn = false, trailing, children, onSearch}: Props) => {
    const animatedRef = useAnimatedRef<Animated.ScrollView>()
    const scrollOffset = useScrollViewOffset(animatedRef);

  return (
    <View>
        <NavBar title={title} hideBackBtn={hideBackBtn} trailing={trailing} scrollOffset={scrollOffset} onSearch={onSearch}/>
        <Animated.ScrollView style={styles.content} ref={animatedRef}>
            {children}
        </Animated.ScrollView>
    </View>
  )
}

export default NavbarScrollView

const styles = StyleSheet.create({
    content: {
        padding: 24,
        paddingTop: 212,
        backgroundColor: '#fff',
    },
})
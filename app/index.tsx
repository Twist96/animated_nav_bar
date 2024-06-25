import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import NavBar from './components/nav_bar'

const HomePage = () => {
  return (
    <View>
        <NavBar />
        <ScrollView style={styles.content}>
            {items.map((item, index) => {
                return(
                    <Pressable key={index} style={styles.card}>
                        <Image
                        alt=''
                        resizeMode='cover'
                        source={{uri: item.img}}
                        style={styles.cardImg}/>

                    </Pressable>
                )
            })}
        </ScrollView>
    </View>
  )
}

export default HomePage


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

const items = [
    {
      img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      name: 'Dubai',
      airport: 'DXB',
      departure: '2022-10-10',
      arrival: '2023-04-01',
      price: 966,
    },
    {
      img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      name: 'Italy',
      airport: 'VCE',
      departure: '2022-10-10',
      arrival: '2023-04-01',
      price: 652,
    },
    {
      img: 'https://images.unsplash.com/photo-1623536167776-922ccb1ff749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=544&q=80',
      name: 'Bosnia',
      airport: 'BNX',
      departure: '2022-10-10',
      arrival: '2023-04-01',
      price: 566,
    },
    {
      img: 'https://images.unsplash.com/photo-1554939437-ecc492c67b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      name: 'Spain',
      airport: 'BCN',
      departure: '2022-10-10',
      arrival: '2023-04-01',
      price: 602,
    },
    {
        img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name: 'Dubai',
        airport: 'DXB',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 966,
      },
      {
        img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
        name: 'Italy',
        airport: 'VCE',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 652,
      },
      {
        img: 'https://images.unsplash.com/photo-1623536167776-922ccb1ff749?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=544&q=80',
        name: 'Bosnia',
        airport: 'BNX',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 566,
      },
      {
        img: 'https://images.unsplash.com/photo-1554939437-ecc492c67b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        name: 'Spain',
        airport: 'BCN',
        departure: '2022-10-10',
        arrival: '2023-04-01',
        price: 602,
      },
  ];

// <Text>Home Page</Text>
//                 <Link href="/users/1">Go to user 1</Link>
//                 <Pressable onPress={() => router.push({
//                     pathname: "/users/[id]",
//                     params: {id: 2}
//                 })}>
//                     <Text>Go to user 2</Text>
//                 </Pressable>
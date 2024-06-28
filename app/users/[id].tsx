import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import NavbarScrollView from '../components/NavbarScrollView'
import { contacts } from '../data/contacts'
import AntDesign from '@expo/vector-icons/AntDesign';

const UserPage = () => {
    const {id} = useLocalSearchParams<{id: string}>()
    const contact = contacts.find((x) => x.id == id)

  return (
    <NavbarScrollView
    title={contact?.name ?? 'User not found'}
    trailing={<AntDesign name="setting" size={24} color="black" />}>
      <View style={{height: 600, justifyContent: 'center', alignItems: 'center'}}>
        <Text>User Page - {id}</Text>
      </View>
    </NavbarScrollView>
  )
}

export default UserPage

const styles = StyleSheet.create({})
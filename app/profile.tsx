import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router/build/exports'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'

// router.push('/profile')

const profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={themeStyle.container}>
        <Text style={themeStyle.textTheme}>Profile</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default profile
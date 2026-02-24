import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/styles/color'
import themeStyle from '@/styles/theme'
import profileStyle from '@/styles/profileStyles'
// import { useRoute } from 'expo-router'

const counter = () => {
//   const route = useRoute();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textTitle]}>Counter</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default counter
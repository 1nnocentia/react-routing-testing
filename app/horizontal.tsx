import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router/build/exports'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import profileStyle from '@/styles/profileStyles'
import colors from '@/styles/color'

// router.push('/horizontal')

const horizontal = () => {
  return (
    <SafeAreaProvider>
          <SafeAreaView style={[themeStyle.container, colors.primary]}>
            <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textTitle]}>Horizontal Gallery</Text>
          </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default horizontal
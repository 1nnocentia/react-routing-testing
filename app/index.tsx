import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'


const index = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <View style={themeStyle.container}>
          <Text style={themeStyle.textTheme}>Welcome To Hogwarts Gallery</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/styles/color'
import themeStyle from '@/styles/theme'
import CustomButton from '@/components/customButton'
import { counterStyles } from '@/styles/counterStyles'
// import { useRoute } from 'expo-router'

const counter = () => {
  const [count, setCount] = useState(0);
//   const route = useRoute();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <View style={[themeStyle.headerContainer]}>
          <Text style={[themeStyle.textTheme, themeStyle.textTitle, colors.textPrimary]}>Counter</Text>
        </View>
        <View style={[themeStyle.bodyContainer]}>
          <Text style={[themeStyle.textTitle, colors.textPrimary]}>Click Count </Text>
          <Text style={[themeStyle.textSubtitle, colors.textPrimary, counterStyles.counterText]}>{count}</Text>
          <CustomButton title="Increment" onPress={() => setCount(count + 1)} />
          <CustomButton title="Reset" onPress={() => setCount(0)} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default counter
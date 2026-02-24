import { Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'
import CustomButton from '@/components/customButton'

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <View style={[themeStyle.headerContainer]}>
          <Text style={[themeStyle.textTheme, themeStyle.textTitle, colors.textPrimary]}>Welcome To Hogwarts Gallery</Text>
        </View>
        <View style={[themeStyle.bodyContainer]}>
          <Text style={[themeStyle.textTheme, themeStyle.textSubtitle, colors.textPrimary]}>Portus</Text>
          <View style={[themeStyle.buttonContainer]}>
            <CustomButton title="Profile" onPress={() => router.push("/profile")} />
            <CustomButton title="Counter" onPress={() => router.push("/counter")} />
            <CustomButton title="Vertical Gallery" onPress={() => router.push('/vertical')} />
            <CustomButton title="Horizontal Gallery" onPress={() => router.push('/horizontal')} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default index
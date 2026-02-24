import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'
import profileStyle from '@/styles/profileStyles'
import { USER_PROFILE } from '@/constant/profileConstant'
import CustomButton from '@/components/customButton'

const profile = () => {
  const { imgSrc, name, userTitle } = USER_PROFILE[0];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <View style={profileStyle.profileContainer}>
          <Image source={imgSrc} style={profileStyle.profilePicture} />
          <View style={profileStyle.descriptionContainer}>
            <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textTitle]}>{name}</Text>
            <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textDescription]}>{userTitle}</Text>
          </View>
          <View style={[themeStyle.buttonContainer]}>
              <CustomButton title="Edit Profile" onPress={() => alert("Edit Profile pressed")} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default profile
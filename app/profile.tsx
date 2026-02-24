import { View, Text, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'
import profileStyle from '@/styles/profileStyles'
import { USER_PROFILE } from '@/constant/profileConstant'
import CustomButton from '@/components/customButton'

const profile = () => {
  const { imgSrc, name, userTitle } = USER_PROFILE[0];

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedTitle, setEditedTitle] = useState(userTitle)

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[themeStyle.container, colors.primary]}>
        <View style={profileStyle.profileContainer}>
          <Image source={imgSrc} style={profileStyle.profilePicture} />
          <View style={profileStyle.descriptionContainer}>
            {isEditing ? (
              <>
                <TextInput
                  value={editedName}
                  onChangeText={setEditedName}
                  style={profileStyle.input}
                />
                <TextInput
                  value={editedTitle}
                  onChangeText={setEditedTitle}
                  style={profileStyle.input}
                />
              </>
            ) : (
              <>
                <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textTitle]}>
                  {editedName}
                </Text>
                <Text style={[themeStyle.textSubtitle, colors.textPrimary, profileStyle.textDescription]}>
                  {editedTitle}
                </Text>
              </>
            )}
          </View>
          <View style={[themeStyle.buttonContainer]}>
              <CustomButton title={isEditing ? "Save Profile" : "Edit Profile"} onPress={() => setIsEditing(!isEditing)} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default profile
import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router/build/exports'

router.push('/profile')

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  )
}

export default profile
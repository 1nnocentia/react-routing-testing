import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

router.push('/vertical')

const vertical = () => {
  return (
    <View>
      <Text>vertical</Text>
    </View>
  )
}

export default vertical
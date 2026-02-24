import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'
import { GALLERY_ITEM_V } from '@/constant/galleryConstant'
import { galleryStyle } from '@/styles/galleryStyles'


const vertical = () => {
  return (
    <SafeAreaProvider>
          <SafeAreaView style={[themeStyle.container, galleryStyle.verticalGalleryContainer,colors.primary]}>
            <FlatList
              data={GALLERY_ITEM_V}
              numColumns={1}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                  <View style={[galleryStyle.container, galleryStyle.imageContainer]}>
                    <Image source={item.imgSrc} style={galleryStyle.image} />
                    <Text style={[galleryStyle.imageText]}>{item.title}</Text>
                  </View>
              )}
            />
          </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default vertical
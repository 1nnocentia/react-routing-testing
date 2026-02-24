import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import themeStyle from '@/styles/theme'
import colors from '@/styles/color'
import { GALLERY_ITEM_H } from '@/constant/galleryConstant'
import { galleryStyle } from '@/styles/galleryStyles'

const horizontal = () => {
  return (
    <SafeAreaProvider>
          <SafeAreaView style={[themeStyle.container, ,colors.primary]}>
            <View style={[galleryStyle.horizontalGalleryContainer]}>
              <FlatList
                data={GALLERY_ITEM_H}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[galleryStyle.container, galleryStyle.imageContainer]}>
                      <Image source={item.imgSrc} style={[galleryStyle.image, galleryStyle.imageHorizontal]} />
                      <Text style={[galleryStyle.imageText]}>{item.title}</Text>
                    </View>
                )}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default horizontal
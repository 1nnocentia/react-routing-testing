import horizontal from '@/app/horizontal';
import { StyleSheet } from 'react-native';

export const galleryStyle = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        opacity: 0.8,
        borderRadius: 10,
    },
    verticalGalleryContainer: {
        padding: 10,
    },
    horizontalGalleryContainer: {
        padding: 10,
    },
    imageContainer: {
        marginVertical: 15,
        marginHorizontal: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    imageHorizontal: {
        width: 150,
    },
    imageText: {
        textAlign: 'center',
        fontSize: 12,
    }
});
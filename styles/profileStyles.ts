import profile from '@/app/profile';
import {StyleSheet} from 'react-native';

const profileStyles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 20,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 80,
    },
    descriptionContainer: {
        gap: 10,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 20,
    },
    textDescription: {
        fontSize: 14,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 4,
        marginBottom: 8,
        color: '#fff',
    }
})

export default profileStyles;
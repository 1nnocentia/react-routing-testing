import {StyleSheet} from 'react-native';

const themeStyle = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    textTheme: {
        fontFamily: 'AlmendraDisplay_400Regular',
        color: '#fff',
    },
    headerContainer: {
        marginVertical: 45,
        marginHorizontal: 30,
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 30,
        textAlign: 'center',
    },
    bodyContainer: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textSubtitle: {
        fontFamily: 'Inter_400Regular',
    },

})

export default themeStyle;
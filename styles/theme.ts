import {StyleSheet} from 'react-native';

const themeStyle = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
    },
    textTheme: {
        fontFamily: 'AlmendraDisplay_400Regular',
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
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
        gap: 20,
    },
    textSubtitle: {
        fontFamily: 'Inter_400Regular',
    },
    buttonContainer: {
        flexWrap: 'wrap',
        width: '80%',
        gap: 10,

    }

})

export default themeStyle;
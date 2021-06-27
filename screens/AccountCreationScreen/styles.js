import React from 'react';
import { StyleSheet } from 'react-native';
import colorConstant from '../../utilities/colorConstant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '80%',
        height: '30%',
        resizeMode: 'contain',
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorConstant.GREY
    },
    subtitle: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 32,
        marginTop:8
    },
    button1: {
        backgroundColor: colorConstant.ON_BOARDING_BUTTON_COLOR,
        width: '80%',
        margin: 16,
        padding:16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32
    },
    haveBankText: {
        color: colorConstant.WHITE,
        fontSize: 16,
        fontWeight: 'bold'
    },
    button2: {
        backgroundColor: colorConstant.ON_BOARDING_BUTTON_COLOR_DESELECTED,
        width: '80%',
        marginHorizontal: 16,
        padding:16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32
    },
    createBankText: {
        color: colorConstant.ON_BOARDING_BUTTON_COLOR,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;
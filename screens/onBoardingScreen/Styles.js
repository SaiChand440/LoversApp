import { StyleSheet } from 'react-native';
import colorConstant from '../../utilities/colorConstant';

const Styles = StyleSheet.create({
    nextButton: {
        backgroundColor: colorConstant.ON_BOARDING_BUTTON_COLOR,
        borderRadius: 32,
        marginBottom: 8,
        marginEnd: 16,
        padding: 16
    },
    textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    dotButton: {
        height: 6,
        marginHorizontal: 3,
        borderRadius:6,
    }
})

export default Styles;
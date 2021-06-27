import React from 'react'
import { View, TouchableOpacity,Text,StyleSheet } from 'react-native'
import Strings from '../../Strings'
import Styles from './Styles'

const NextButtonComponent = (props) => {
    return (
        <View>
            <TouchableOpacity
                {...props}
                style={Styles.nextButton}>
                <View>
                    <Text style={Styles.textStyle}>{Strings.components.onBoardingButton}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

export default NextButtonComponent

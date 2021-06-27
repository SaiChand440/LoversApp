import React from 'react'
import { View, TouchableOpacity,Text } from 'react-native'
import Strings from '../../Strings'
import Styles from './Styles'
import { useNavigation } from '@react-navigation/native';


const DoneButtonComponent = (props) => {
    const navigation = useNavigation(); 
    return (
        <View>
            <TouchableOpacity
                {...props}
                style={Styles.nextButton}
                onPress = {() => navigation.navigate('AccountCreationScreen')}
            >
                <View>
                    <Text style={Styles.textStyle}>{Strings.components.onBoardingDoneButton}</Text>
                </View>
            </TouchableOpacity>    
        </View>
    )
}

export default DoneButtonComponent

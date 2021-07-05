import React, { useState} from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import colorConstant from '../../utilities/colorConstant';

const MyDetailsView = (props) => {
    
    const { Progress,navigation } = props;

    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{ marginTop: 16,fontSize:18,fontWeight:'bold'}}>Bank Creation</Text>
            </View>
            
            <ProgressBar progress={Progress} color={colorConstant.ON_BOARDING_BUTTON_COLOR} style={{ width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }} />
            
            <View style={{ flex: 1, justifyContent: 'space-around', width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }}>
            <Text>step 2/4</Text>
            <Text>Your Information</Text>
            <Text>This is how you'll show up to depositors</Text>
            <TextInput placeholder='Enter your Name' />
            <TouchableOpacity onPress={() => {navigation.navigate('MyPartnerDetailsCreationScreen')}}>
                <Text>Next</Text>
            </TouchableOpacity>   
            </View>

        </View>
    )
}

export default MyDetailsView;

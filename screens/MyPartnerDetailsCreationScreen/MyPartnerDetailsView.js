import React from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import colorConstant from '../../utilities/colorConstant';

const MyPartnerDetailsView = (props) => {
    
    const { Progress,onEnterYourPartnerNameFieldChanged,yourPartnerNameField,onNextButtonClick } = props;

    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{ marginTop: 16,fontSize:18,fontWeight:'bold'}}>Bank Creation</Text>
            </View>
            
            <ProgressBar progress={Progress} color={colorConstant.ON_BOARDING_BUTTON_COLOR} style={{ width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }} />
            
            <View style={{ flex: 1, justifyContent: 'space-around', width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }}>
            <Text>step 3/4</Text>
            <Text>Add your couple</Text>
            <Text>Your couple will be able to edit this Information in thier settings</Text>
                <TextInput placeholder='Enter your Couple name' onChangeText={onEnterYourPartnerNameFieldChanged}/>
            <TouchableOpacity onPress={() => {
                onNextButtonClick(yourPartnerNameField)            
            }}>
                <Text>Next</Text>
            </TouchableOpacity>   
            </View>

        </View>
    )
}

export default MyPartnerDetailsView;

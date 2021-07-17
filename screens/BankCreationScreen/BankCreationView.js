import React, { useState} from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import colorConstant from '../../utilities/colorConstant';

const BankCreationView = (props) => {
    
    const { Progress,navigation,onNextButtonClick,bankNameField,onBankNameChanged,onBankPasswordChanged,bankPasswordField } = props;

    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{ marginTop: 16,fontSize:18,fontWeight:'bold'}}>Bank Creation</Text>
            </View>
            
            <ProgressBar progress={Progress} color={colorConstant.ON_BOARDING_BUTTON_COLOR} style={{ width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }} />
            
            <View style={{ flex: 1, justifyContent: 'space-around', width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }}>
            <Text>step 1/4</Text>
            <Text>Bank Name</Text>
            <Text>This name will be used for entrance to your bank by its depositors</Text>
            <TextInput placeholder='Enter your bank Name' onChangeText={onBankNameChanged}/>
            <TextInput placeholder='Password' onChangeText={onBankPasswordChanged}/>
            <TouchableOpacity onPress={() => {
                onNextButtonClick(bankNameField,bankPasswordField);
                // navigation.navigate('MyDetailsCreationScreen')
            }}>
                <Text>Next</Text>
            </TouchableOpacity>   
            </View>

        </View>
    )
}

export default BankCreationView;

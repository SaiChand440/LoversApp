import React, { useState} from 'react'
import { View,Text,TextInput,TouchableOpacity } from 'react-native'
import { ProgressBar } from 'react-native-paper';
import colorConstant from '../../utilities/colorConstant';

const AdditionalCurrencyView = (props) => {
    
    const { Progress,onEnterAdditionalCurrenyChanged,additionalCurrencyField,onNextButtonClick } = props;

    return (
        <View style={{ flex: 1 }}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{ marginTop: 16,fontSize:18,fontWeight:'bold'}}>Bank Creation</Text>
            </View>
            
            <ProgressBar progress={Progress} color={colorConstant.ON_BOARDING_BUTTON_COLOR} style={{ width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }} />
            
            <View style={{ flex: 1, justifyContent: 'space-around', width: '90%', marginTop: 16, borderRadius: 8, marginHorizontal: 16 }}>
            <Text>step 4/4</Text>
            <Text>Additional Currency</Text>
            <Text>Optional, you can add additional Currency to make your experience better</Text>
                <TextInput placeholder='Additional Currency,e.x. Chocolate' onChangeText={onEnterAdditionalCurrenyChanged}/>
            <TouchableOpacity onPress={() =>
                    onNextButtonClick(additionalCurrencyField)
            }>
                <Text>Create Bank</Text>
            </TouchableOpacity>   
            </View>

        </View>
    )
}

export default AdditionalCurrencyView;

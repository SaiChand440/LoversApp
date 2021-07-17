import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation,useRoute } from '@react-navigation/core';
import MyPartnerDetailsView from './MyPartnerDetailsView';
import firestore from '@react-native-firebase/firestore'

const MyPartnerDetailsScreen = () => {
    const navigation = useNavigation();
    const [Progress, setProgress] = useState(0)
    const [yourPartnerNameField, setyourPartnerNameField] = useState('')
    const route = useRoute()
    const {bankName} = route.params
    
    useEffect(() => {
        setProgress(0.6)
    }, [])

    const onEnterYourPartnerNameFieldChanged = (text) => {
        setyourPartnerNameField(text);
    }

    const addNameOfYourPartner = (myPartnerName) => {
        console.log(bankName)
        firestore().collection('Banks').doc(bankName).set({
            myPartnerName: myPartnerName
        },{merge: true}).then(() => {
            console.log("USER", "User Added");
        })
    }

    const onNextButtonClick = (myPartnerName) => {
        addNameOfYourPartner(myPartnerName)
        navigation.navigate('AdditionalCurrencyCreationScreen',{bankName:bankName})
    }

    return (
        <MyPartnerDetailsView
            Progress={Progress}
            navigation={navigation}
            onEnterYourPartnerNameFieldChanged={onEnterYourPartnerNameFieldChanged}
            yourPartnerNameField={yourPartnerNameField}
            onNextButtonClick={onNextButtonClick}
        />
    )
}

export default MyPartnerDetailsScreen;
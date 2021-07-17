import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation,useRoute } from '@react-navigation/core';
import AdditionalCurrencyView from './AdditionalCurrencyView';
import firestore from '@react-native-firebase/firestore'

const AdditionalCurrencyCreationScreen = () => {
    const navigation = useNavigation()
    const [Progress, setProgress] = useState(0)
    const [additionalCurrencyField, setadditionalCurrencyField] = useState('')
    const route = useRoute()
    const {bankName} = route.params

    useEffect(() => {
        setProgress(0.8)
    }, [])

    const onEnterAdditionalCurrenyChanged = (text) => {
        setadditionalCurrencyField(text);
    }

    const addAdditionalCurrency = (additionalCurrencyName) => {
        console.log(bankName)
        firestore().collection('Banks').doc(bankName).set({
            additionalCurrencyName: additionalCurrencyName
        },{merge: true}).then(() => {
            console.log("USER", "User Added");
        })
    }

    const onNextButtonClick = (additionalCurrencyName) => {
        addAdditionalCurrency(additionalCurrencyName)
        // navigation.navigate('AdditionalCurrencyCreationScreen')
    }

    return (
        <AdditionalCurrencyView
            Progress={Progress}
            navigation={navigation}
            onEnterAdditionalCurrenyChanged={onEnterAdditionalCurrenyChanged}
            additionalCurrencyField={additionalCurrencyField}
            onNextButtonClick={onNextButtonClick}
        />
    )
}

export default AdditionalCurrencyCreationScreen;
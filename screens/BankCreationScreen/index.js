import React,{useState} from 'react';
import { useEffect } from 'react';
import BankCreationView from './BankCreationView';
import { useNavigation } from '@react-navigation/core';
import firestore from '@react-native-firebase/firestore';

const BankCreationScreen = () => {

    const [Progress, setProgress] = useState(0);
    const [bankNameField, setBankNameField] = useState('');
    const [bankPasswordField, setbankPasswordField] = useState('');
    const navigation = useNavigation()

    useEffect(() => {
        setProgress(0.2)
    }, [])

    const addNewBank = (bankName,bankPassword) => {
        firestore().collection('Banks').doc(bankName).set({
            bankName: bankName,
            bankPassword: bankPassword
        }).then(() => {
            console.log("USER", "User Added");
        })
    }

    const onNextButtonClick = (bankName,bankPassword) => {
        addNewBank(bankName, bankPassword)
        navigation.navigate('MyDetailsCreationScreen',{bankName:bankName})
        // navigation.setParams({bankName:bankName})
    }

    const onBankNameChanged = (text) => {
        setBankNameField(text);
    }

    const onBankPasswordChanged = (text) => {
        setbankPasswordField(text);
    }

    return (
        <BankCreationView
            Progress={Progress}
            navigation={navigation}
            onNextButtonClick={onNextButtonClick}
            bankNameField={bankNameField}
            onBankNameChanged={onBankNameChanged}
            onBankPasswordChanged={onBankPasswordChanged}
            bankPasswordField={bankPasswordField}
        />
    )
}

export default BankCreationScreen;
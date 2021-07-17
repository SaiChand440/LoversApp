import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation,useRoute } from '@react-navigation/core';
import MyDetailsView from './MyDetailsView';
import firestore from '@react-native-firebase/firestore'

const MyDetailsScreen = () => {
    const navigation = useNavigation();
    const [Progress, setProgress] = useState(0)
    const [yourNameField, setyourNameField] = useState('')
    const route = useRoute()
    const {bankName} = route.params
    
    useEffect(() => {
        setProgress(0.4)
    }, [])

    const onEnterYourNameFieldChanged = (text) => {
        setyourNameField(text);
    }

    const addNameOfMine = (myName) => {
        console.log(bankName)
        firestore().collection('Banks').doc(bankName).set({
            myName: myName
        },{merge: true}).then(() => {
            console.log("USER", "User Added");
        })
    }

    const onNextButtonClick = (myName) => {
        addNameOfMine(myName)
        navigation.navigate('MyPartnerDetailsCreationScreen',{bankName:bankName})
    }

    return (
        <MyDetailsView
            Progress={Progress}
            navigation={navigation}
            onEnterYourNameFieldChanged={onEnterYourNameFieldChanged}
            yourNameField={yourNameField}
            onNextButtonClick={onNextButtonClick}
        />
    )
}

export default MyDetailsScreen;
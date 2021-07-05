import React,{useState} from 'react';
import { useEffect } from 'react';
import BankCreationView from './BankCreationView';
import { useNavigation } from '@react-navigation/core';

const BankCreationScreen = () => {

    const [Progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        setProgress(0.2)
    }, [])

    return (
        <BankCreationView
            Progress={Progress}
            navigation={navigation}
        />
    )
}

export default BankCreationScreen;
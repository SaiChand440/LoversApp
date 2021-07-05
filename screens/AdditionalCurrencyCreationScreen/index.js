import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import AdditionalCurrencyView from './AdditionalCurrencyView';

const AdditionalCurrencyCreationScreen = () => {

    const [Progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        setProgress(0.8)
    }, [])

    return (
        <
        AdditionalCurrencyView
            Progress={Progress}
            navigation={navigation}
        />
    )
}

export default AdditionalCurrencyCreationScreen;
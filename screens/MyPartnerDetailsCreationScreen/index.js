import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import MyPartnerDetailsView from './MyPartnerDetailsView';

const MyPartnerDetailsScreen = () => {

    const [Progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        setProgress(0.6)
    }, [])

    return (
        <
            MyPartnerDetailsView
            Progress={Progress}
            navigation={navigation}
        />
    )
}

export default MyPartnerDetailsScreen;
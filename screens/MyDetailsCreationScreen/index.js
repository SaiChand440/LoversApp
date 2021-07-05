import React,{useState} from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import MyDetailsView from './MyDetailsView';

const MyDetailsScreen = () => {

    const [Progress, setProgress] = useState(0)
    const navigation = useNavigation()

    useEffect(() => {
        setProgress(0.4)
    }, [])

    return (
        <
            MyDetailsView
            Progress={Progress}
            navigation={navigation}
        />
    )
}

export default MyDetailsScreen;
import React from 'react'
import { View, Image,Text,TouchableOpacity } from 'react-native'
import Strings from '../../Strings'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

const AccountCreationView = (props) => {
    const navigation = useNavigation(); 
    return (
        <View style={styles.container}>
            <Image source={(require('../../assets/images/acastro_191014_1777_google_pixel_0005.0.jpg'))} style={styles.image} />
            <Text style={styles.header}>{ Strings.accountCreationScreen.title}</Text>
            <Text style={styles.subtitle}>{ Strings.accountCreationScreen.subtitle}</Text>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.haveBankText}>{ Strings.accountCreationScreen.haveBankText}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => {navigation.navigate('BankCreationScreen')}}>
                <Text style={styles.createBankText}>{Strings.accountCreationScreen.createBankText }</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccountCreationView

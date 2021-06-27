import React from 'react'
import { Image } from 'react-native' 
import Onboarding from 'react-native-onboarding-swiper'
import Strings from '../../Strings'
import colorConstant from '../../utilities/colorConstant'
import AccountCreationScreen from '../AccountCreationScreen'
import DoneButtonComponent from './DoneButtonComponent'
import DotButtonComponent from './DotButtonComponent'
import NextButtonComponent from './NextButtonComponent'

const OnBoardingView = () => {
    return (
        <Onboarding
            showSkip={false}
            bottomBarColor='#fff'
            NextButtonComponent={NextButtonComponent}
            DotComponent={DotButtonComponent}
            DoneButtonComponent={DoneButtonComponent}
            pages={[
                {
                    backgroundColor: colorConstant.WHITE,
                    image: <Image source={require('../../assets/images/acastro_191014_1777_google_pixel_0005.0.jpg')} style={{width:200,height:200,resizeMode:'contain',marginTop:-200}}/>,
                    title: Strings.onBoardingScreen1.title,
                    subtitle: Strings.onBoardingScreen1.subtitle,
                },
                {
                    backgroundColor: colorConstant.WHITE,
                    image: <Image source={require('../../assets/images/acastro_191014_1777_google_pixel_0005.0.jpg')} style={{width:200,height:200,resizeMode:'contain',marginTop:-200}}/>,
                    title: Strings.onBoardingScreen2.title,
                    subtitle: Strings.onBoardingScreen2.subtitle,
                },
                {
                    backgroundColor: colorConstant.WHITE,
                    image: <Image source={require('../../assets/images/acastro_191014_1777_google_pixel_0005.0.jpg')} style={{width:200,height:200,resizeMode:'contain',marginTop:-200}}/>,
                    title: Strings.onBoardingScreen3.title,
                    subtitle: Strings.onBoardingScreen3.subtitle,
                },
                {
                    backgroundColor: colorConstant.WHITE,
                    image: <Image source={require('../../assets/images/acastro_191014_1777_google_pixel_0005.0.jpg')} style={{width:200,height:200,resizeMode:'contain',marginTop:-200}}/>,
                    title: Strings.onBoardingScreen4.title,
                    subtitle: Strings.onBoardingScreen4.subtitle,
                },
            ]}
        />
    )
}

export default OnBoardingView

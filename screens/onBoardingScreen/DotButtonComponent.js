import React from 'react'
import { View } from 'react-native'
import colorConstant from '../../utilities/colorConstant';
import Styles from './Styles';

const DotButtonComponent = ({ selected }) => {
    let backgroundColor,width;
    width = selected ? 16 : 6;
    backgroundColor = selected ? colorConstant.ON_BOARDING_BUTTON_COLOR : colorConstant.ON_BOARDING_BUTTON_COLOR_DESELECTED
    return (
      <View
        style={{...Styles.dotButton,width,backgroundColor}}
      />
    );
};
  

export default DotButtonComponent

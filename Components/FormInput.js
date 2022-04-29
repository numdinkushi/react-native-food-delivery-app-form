import { View, Text } from 'react-native'
import React from 'react'
import {FONTS, SIZES} from "../constants"
const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  perpendComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  KeyboardType="default",
  autoCompleteType= "off",
  autoCapitalize="none",
  errorMsg= "",

}) => {
  return (
    <View style={{...containerStyle}}>
      {/* label & error message */}
      <View 
        style={{
          flexDirection: "row",
          justifyContent: "center",}
        }
      >
        <Text
          style={{color:COLORS.gray, ...FONTS.body4}}
        >
          {label}
        </Text>
        <Text 
          style={{errorMsg}}
        >
          {errorMsg}
        </Text>
      </View>
      {/* Text Input */}
      <View 
        style={{
          flexDirection:"row",
           height: 55,
           paddingHorizontal:SIZES.padding,
           backgroundColor: COLORS.lightGray2
        }}
      >

      </View>
    </View>
  )
}

export default FormInput
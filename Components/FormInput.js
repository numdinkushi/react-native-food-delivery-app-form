import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {COLORS, FONTS, SIZES} from "../constants"
const FormInput = ({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType="default",
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
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{color:COLORS.gray, ...FONTS.body4}}
        >
          {label}
        </Text>
        <Text 
          style={{color:COLORS.red, ...FONTS.body4}}
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
           marginTop:SIZES.base,
           borderRadius: SIZES.radius,
           backgroundColor: COLORS.lightGray2
        }}
      >
        {prependComponent}
        <TextInput 
            style={{
              flex:1,
              color: COLORS.black,
              ...inputStyle
            }}
            placeholder={placeholder}
             placeholderTextColor={COLORS.gray}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType="default"}
            autoCompleteType={autoCompleteType}
            onChangeText={(text)=> onChange(text)}
        />
        {appendComponent}
      </View>
    </View>
  )
}

export default FormInput
import { View, Text, Image } from 'react-native'
import React, { Children } from 'react'
import { COLORS, FONTS, images, SIZES } from '../../constants'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View 
        style={{
            flex:1,
            paddingVertical:SIZES.padding,
            backgroundColor:COLORS.white
        }}
    >
        <KeyboardAwareScrollView
            keyboardDismissMode ="on-drag"
            contentContainerStyle={ {
                flex:1,
                paddingHorizontal:SIZES.padding
            }}
        >
    {/* App Icon */}
    <View
        style={{
            alignItems:"center"
        }}
    >
        <Image
            source={images.logo_02}
            resizeMode="contain"
            style={{
                height:200,
                width:200
            }}
        >

        </Image>
    </View>
    {/* Title & Subtitle */}
    <View 
    style={{
        marginTop:SIZES.padding,
        ...titleContainerStyle
    }}
    >
        <Text
            style={{
                textAlign: "center",
                ...FONTS.h2
            }}
        >
            {title}
        </Text>
        <Text 
            style={{
                textAlign: "center",
                color: COLORS.darkGray,
                margintTop: SIZES.base,
                ...FONTS.body3
            }}
        >
            {subtitle}
        </Text>
        {children}

    </View>
    {/* Content / children */}
        </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout
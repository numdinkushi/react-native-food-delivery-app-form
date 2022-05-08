import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,

} from 'react-native';
import AuthLayout from './AuthLayout';
import { FormInput, CustomSwitch, TextButton } from '../../Components';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import {utils} from '../../utils';

const SignIn = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    const [emailError, setEmailError] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [saveMe, setSaveMe] = useState(false)

    function isEnableSignin () {
        return email != "" && password !="" && emailError != ""
    }
    return (
        <AuthLayout
            title="Let's Sign You In"
            subtitle="Welcome back, you have been missed"
            >
                <View
                    style={{
                        flex: 1,
                        marginTop:SIZES.padding *2,
                    }}
                >
                    {/* Form input  */}
                    <FormInput
                        label= "Email"
                        keyboardType="email-address"
                        autoCompleteType='email'
                        onChange={(value)=>{
                            //validate email
                            utils.validateEmail(value, setEmailError)
                            setEmail(value)
                        }}
                        errorMsg={emailError}
                        appendComponent={
                            <View
                                style={{
                                    justifyContent: 'center',

                                }}
                            >
                                    <Image 
                                        source={email == "" || (email != "" && emailError=="")? icons.correct : icons.cross}
                                        style={{
                                            height:20,
                                            width:20,
                                        tintColor:email =="" ? COLORS.gray :(email != "" && emailError =="")? COLORS.green : COLORS.red ,
                                        }}
                                    />
                            </View>
                        }
                    />
                    <FormInput 
                        label={"Password"}
                        secureTextEntry={!showPass}
                        autocomplete="password"
                        containerStyle={{
                            marginTop:SIZES.radius,
                        }}
                        onChange={(value)=>{
                            setPassword(value)
                        }}
                        appendComponent={
                            <TouchableOpacity
                                style={{
                                    width:40,
                                    alignItems:"flex-end",
                                    justifyContent:"center",
                                }}
                                onPress={() => setShowPass(!showPass)}
                            >
                                <Image 
                                    source={showPass? icons.eye_close : icons.eye}
                                    style={{height:20,
                                        width:20,
                                    tintColor:COLORS.gray}}
                                />
                            </TouchableOpacity>
                        }
                    />
                    {/* Save me / forgot password */}
                        <View 
                            style={{
                                flexDirection:"row",
                                marginTop:SIZES.radius,
                                justifyContent:"space-between",
                            }}
                        >

                            <CustomSwitch 
                                value={saveMe}
                                onChange={(value)=> setSaveMe(value)}
                            />
                            <TextButton 
                                label="Forgot Password"
                                buttonContainerStyle= {{
                                    backgroundColor:null
                                }}
                                labelStyle= {{
                                    color:COLORS.gray,
                                    ...FONTS.body4,
                                }}
                                onPress={() => navigation.navigate("ForgotPassword") }
                            />
                        </View>
                        {/* Sign in */}
                        <TextButton 
                            label="Sign In"
                            disabled={isEnable}
                            buttonContainerStyle= {{
                                height:55,
                                alignItems:"center",
                                marginTop: SIZES.padding,
                                borderRadius:  SIZES.radius,
                                backgroundColor: COLORS.primary
                            }}
                        />

                    {/* Sing up */}
                </View>
            </AuthLayout>
    )
}

export default SignIn;
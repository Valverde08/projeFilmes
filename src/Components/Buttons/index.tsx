import { View, Text,TouchableOpacity, TouchableOpacityProps,StyleSheet } from 'react-native'
import React from 'react'

interface BtnProps extends TouchableOpacityProps{
    nome:string
}

export default function Btn({nome,onPress}:BtnProps) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={estilos.btnContainer}>
        <Text style={estilos.btntext}>{nome}</Text>
    </TouchableOpacity>
  )
}


const estilos = StyleSheet.create({
    btnContainer:{
        width:250,
        height:50,
        backgroundColor:'#df6025',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    
    btntext:{
        color:'#fff',
        fontSize:24,
        fontWeight:'600'
    }
})
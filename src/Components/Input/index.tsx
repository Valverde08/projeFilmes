import { StyleSheet, TextInput, TextInputProps,View,Text } from 'react-native';

interface textInpt extends TextInputProps{
    placeholder:string,
    valor:number
    label:string


}

export default function Inpt({label,placeholder,valor,onChangeText}:textInpt) {
 return (
    <View>
        <Text style={estilos.txtLabel}>{label}</Text>
        <TextInput
        style={estilos.Inpt}
            value={valor}
            placeholder={placeholder}
            onChangeText={onChangeText}
        />
    </View>
  );    
}


const estilos = StyleSheet.create({
    Inpt:{
        width: '100%',
        height:50,
        borderColor:'#000',
        borderWidth:1,
        backgroundColor:'#fff',
        borderRadius:8  

    },
    txtLabel:{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
    }
})
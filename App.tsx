import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, View,StatusBar,Modal } from 'react-native';
import Btn from './src/Components/Buttons';
import Inpt from './src/Components/Input';
import ResPage from './src/Components/ResPage';

export default function App() {
  const [gaso,setGaso] = useState<number>(0)
  const [alcool,setAlcool] = useState<number>(0)
  const [res,SetRes] = useState<number>(0)
  const [swithcModal,SetSwitchModal] = useState<boolean>(false)


  const calRes = ()=>{
    const valor = alcool / gaso
    SetRes(valor)
    SetSwitchModal(true)

  }

  return (
    
    <View style={styles.container}>
      <View style={{marginHorizontal:35,justifyContent:'center', alignItems:'center'}}>
        <View>
          <Image
          source={require('./src/assets/logo.png')}
          />
          <Text style={styles.text}>
            Qual compensa ?
          </Text>
        </View>
        <View style={styles.inptContainer}>
        
          <Inpt
          label='Gasolina(preço por litro)'
          valor={gaso}
          placeholder='Digite o valor da gasolina'
          onChangeText={(item)=>{
            setGaso(Number(item))
          }}
          />
        
          <Text></Text>
          <Inpt
          label='Álcool(preço por litro)'
          valor={alcool}
          placeholder='Digite o valor da gasolina'
          onChangeText={(item)=>{
            setAlcool(Number(item))
          }}
          />
        </View>
        <Btn
        nome='Calcular'
        onPress={()=>{
          if(gaso > 0 ){
            calRes()
          }else{
            alert('Ddige algum valor..')
          }
        }}
        />
        <ResPage
        modalstate={swithcModal}
        resultado={res}
        gasolina={gaso}
        alcool={alcool}
        Setmodalstate={SetSwitchModal}
        
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight
    
    
  },
  inptContainer:{
    width:'100%',
    margin:20,
},
text:{
  fontSize:24,
  fontWeight:'600',color:'#fff'
}
});

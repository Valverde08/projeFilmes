import { Modal, View,Image,Text, ModalProps, TouchableOpacity, StyleSheet } from 'react-native';

interface Modalpage extends ModalProps{
    resultado:number,
    modalstate:boolean,
    gasolina:number,
    alcool:number,
    Setmodalstate:(item:boolean)=>void
    

}

export default function ResPage({alcool,gasolina,resultado,modalstate,Setmodalstate}:Modalpage) {
 return (
   <Modal visible={modalstate}>
    
    <View style={estilos.modalcontainer}>
         <Image
         source={require('../../assets/gas.png')}
         />
         <View style={estilos.resContainer}>
            {resultado > 0.7 ? (<Text style={estilos.textGaso}>Compensa usar Gasolina</Text>):
            (<Text style={estilos.textAlcool}>Compensa usar Álcool</Text>)}
         </View>
         <View style={estilos.valorescontainer}>
            <Text style={estilos.title}>Com os Preços:</Text>
            <Text style={estilos.txtproduto}>Álcool: R${alcool.toFixed(2)}</Text>
            <Text style={estilos.txtproduto}>Gasolina R${gasolina.toFixed(2)}</Text>
         </View>
         <TouchableOpacity 
         
         style={estilos.btn}
         onPress={()=>{
            Setmodalstate(false)
         }}>
            <Text style={estilos.btnText}>Calcular novamente</Text>
         </TouchableOpacity>
    </View>
    
   
   </Modal>
  );
}

const estilos = StyleSheet.create({
    textGaso:{
        color:'#df6025',
        fontSize:24,
        fontWeight:'600'

    },
    textAlcool:{
        color:'#27AE60',
        fontSize:24,
        fontWeight:'600'

    },
    pageLayout:{
        backgroundColor:'#141414',
    },
    title:{
        fontSize:20,
        fontWeight:'600',
        color:'#fff',

    },
    txtproduto:{
        
        color:'#fff',
    },modalcontainer:{
        justifyContent:'center',
        alignItems:"center",
        gap:50,
        flex:1,
        backgroundColor:'#141414'
    },
    valorescontainer:{
        gap:10,
        justifyContent:'center',
        alignItems:"center",
    },
    resContainer:{
        gap:7
    },
    btn:{
        width:200,
        height:50,
        borderColor:'#df6025',
        borderWidth:1,  
        justifyContent:'center',
        borderRadius:8
        
          
    },
    btnText:{
        color:'#df6025',
        fontWeight:'600',
        textAlign:'center'
        
    },
    
})
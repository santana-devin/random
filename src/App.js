import React, {useState} from 'react';
import {Text,SafeAreaView,StyleSheet,TouchableOpacity} from 'react-native';

const App = () => {

  const [number,setNumber] = useState(0);

  function handleGenerate (){
    const newValue = Math.floor(Math.random() * 1000);
    setNumber(newValue);
  }
  return(
    <SafeAreaView style={style.container}>
      <Text style={style.number}>{number}</Text>
      <TouchableOpacity onPress={handleGenerate} style={style.generate}>
        <Text style={style.txtGenetate}>Gerar Numero</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: '#005AFF',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    padding:30,
  },
  number:{
    fontSize:24,
    fontWeight:'bold',
    paddingVertical:20,
    color:'#FFF',
    
  },
  generate:{
    backgroundColor:'#FFF',
    paddingHorizontal:50,
    paddingVertical:20,
    borderRadius:20,
  },
  txtGenetate:{
    fontSize:20,
    fontWeight:'bold'

  }
});
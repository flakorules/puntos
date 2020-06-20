import React, {useState} from 'react';
import { StyleSheet, View,  Text,Button } from 'react-native';
import {Map,Modal, Panel, Input, List} from './components';


export default function App() { 
  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [visibilityFilter, setvisibilityFilter] = useState('new_punto');//new_punto,all_puntos
  const [pointsFilter, setpointsFilter] = useState(true);

  const [nombre, setNombre] = useState('');
  
  const tooglePointsFilter = ()=> setpointsFilter(!pointsFilter);  
  
  const  handleLongPress= ({nativeEvent})=>
  { 
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
    setvisibilityFilter('new_punto');
  }

  const handleChangeText = text =>
  {
    console.log(text);
    setNombre(text);
  }

  const handleSubmit = ()=>
  {
    const newPunto = {coordinate:puntoTemp,name:nombre};
    console.log(newPunto);
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  }

  const handleCancel = ()=>
  {
    setPuntoTemp ({});
    setVisibility(false);
    setNombre('');
  }

  const handleLista = ()=>
  {
    setvisibilityFilter('all_puntos');
    setVisibility(true);
  }

  return (
    <View style={styles.container}>
      <Map longPress ={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Modal visibility={visibility}>        
        {visibilityFilter === 'new_punto' ? 
        <View style={styles.form}>
        <Input title="Nombre" placeholder="Nombre del Punto" onChangeText={handleChangeText} />
        <View>
          <Button title="Aceptar" onPress={handleSubmit} />
          <Button title="Cancelar" onPress={handleCancel} />
        </View>
        </View>
        : 
        <View>
        <List puntos={puntos}/>
        <Button title="Cancelar" onPress={handleCancel} />
        </View>
        }
        
      </Modal>
      <Panel onPressLeft={handleLista} textLeft="Lista" textRight="Mostrar/Ocultar" onPressRight={tooglePointsFilter}/>
    </View>
  );
}

const styles = StyleSheet.create({  
  form: {
    padding:15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default ({longPress, puntos, pointsFilter})=>{
    return (
        <MapView style={styles.map}
            onLongPress={longPress}>
                {
                   pointsFilter && puntos.map(x=> <Marker key={x.name} coordinate={x.coordinate} title={x.name} /> )
                }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width
      }
});
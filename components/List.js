import React from 'react';
import {View, FlatList, Text, StyleSheet, Dimensions} from 'react-native';

export default ({puntos})=>{
    return (
        <View style={styles.list}>
            <FlatList
                data={puntos.map(x=>x.name)}
                renderItem={ ({item}) => <View style={styles.item}><Text>{item}</Text></View> }
                keyExtractor = {item=>item}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 150
    },
    item:{
        borderBottomWidth:1,
        borderColor: '#ccc',
        height:50,
        justifyContent:'center',
        padding:15

    },
    
});
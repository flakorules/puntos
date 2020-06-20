import React from 'react';
import {StyleSheet,Dimensions,Button,View} from 'react-native';


export default ({onPressLeft, textLeft, textRight, onPressRight})=>{
    return (
        <View style={styles.panel}>
            <Button title={textLeft} onPress={onPressLeft} />
            <Button title={textRight} onPress={onPressRight}/>
        </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex:1,
        flexDirection:'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems:'center'
        
    }
});
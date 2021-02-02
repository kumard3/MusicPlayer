import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

const AudioList = () => {
    return (
        
        <View style={styles.constainer}>
        <Text> Audio List </Text>
    </View>
    )
}

export default AudioList
const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        justifyContent:'center',
        alignIteams: 'center'
    }

})
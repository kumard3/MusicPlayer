import React from 'react'
import { View, Text , StyleSheet  } from 'react-native'

const Player = () => {
    return (
        <View style={styles.constainer}>
        <Text> Player </Text>
        </View>
    )
}

export default Player


const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        justifyContent:'center',
        alignIteams: 'center'
    }

})
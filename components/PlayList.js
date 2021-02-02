import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'

const PlayList = () => {
    return (
        <View style={styles.constainer}>
        <Text> Play List </Text>
    </View>
    )
}

export default PlayList
const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        justifyContent:'center',
        alignIteams: 'center'
    }

})
import React, { Component } from 'react'
import { View, Text ,StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Player from '../components/Player';
import AudioList from '../components/AudioList';
import PlayList from '../components/PlayList';
import {MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()


const AppNavigator= () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name='AudioList' component={AudioList} 
        option={{
            tabBarIcon: ( {color,size}) =>{
                return <MaterialIcons name="headset" size={size} color={color} />
            }
        }}/> 
        <Tab.Screen name='Player' component={Player} 
        option={{
            tabBarIcon: ( {color,size}) =>{
                return <FontAwesome5 name="compact-disc" size={size} color={color} />
            }
        }}/>
        <Tab.Screen name='PlayList' component={PlayList} 
        option={{
            tabBarIcon: ( {color,size}) =>{
                return <MaterialIcons name="libarary-music" size={size} color={color} />
            }
        }}/>
        </Tab.Navigator>
    )
}

export default AppNavigator
const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        justifyContent:'center',
        alignIteams: 'center'
    }

})




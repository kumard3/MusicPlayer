import React, { Component, createContext } from 'react'
import { Alert, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library';

export const AudioContext = createContext()
export class AudioProvider extends Component {
    constructor(props){
        super(props)
    }

    permissionAllert = () => {
        Alert.alert("Permission Required","This app needs to read audio files!", [{
            text: 'I am ready',
            onPress: () => this.getPermission()
        }, {
            text:'cancle',
            onPress: () => this.permissionAllert()
        }])
    }
        getAudioFiles = async () => {
            const media =  await MediaLibrary.getAssetAsync ({
                    mediaType : 'audio'
            })
        }
    getPermission = async () => {
        const permission = await MediaLibrary.getPermissionAsync()
        if(permission.granted){
            this.getAudioFiles()

        }

        // if(!permission.granted){

        // }

        if(!permission.granted && permission.canAskAgain){
            const{ status, canAskAgain } = await MediaLibrary.requestPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync()
            if(status == 'denied' && canAskAgain){
                this.permissionAllert()

            }
            if(status === 'granted'){
                this.getAudioFiles();

            }
            if(status === 'denied' && !canAskAgain){

            }

        }
    }

    componentDidMount(){
        this.getPermission()
    }
    render() {
        return  <AudioContext.Provider value= {{}}>
            {this.props.children}
        </AudioContext.Provider>
    }
}

export default AudioProvider

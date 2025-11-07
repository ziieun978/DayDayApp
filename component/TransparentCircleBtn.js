import { Platform, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/MaterialIcons'

function TransparentCircleBtn({name, color, hasMarginRight, onPress}) {
  return (
    <View style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin]}>
        <Pressable
            style={({pressed}) => [
                styles.iconButton,
                Platform.ox === 'ios' &&
                    pressed && {
                        backgroundColor: '#efefef',
                    },
            ]}
            onPress={onPress}
            android_ripple={{color: '#ededed'}}>
                <Icon name={name} size={24} color={color} />
            </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },

    rightMargin: {
        marginRight: 8,
    }
})

export default TransparentCircleBtn
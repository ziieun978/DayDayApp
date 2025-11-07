import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import TransparentCircleBtn from './TransparentCircleBtn';

function WriteHeader() {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.pop();
    };
  return (
    <View style={styles.block}>
        <View style={styles.iconButtonWraper}>
            <TransparentCircleBtn 
                onPress={onGoBack}
                name="arrow-back" 
                color="#424242" />
        </View>
        <View style={styles.buttons}>
            <TransparentCircleBtn
                name='delete-forever'
                color="#ef5350"
                hasMarginRight
                />
            <TransparentCircleBtn name='check' color='#009688' />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    block: {
        height: 48,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
export default WriteHeader
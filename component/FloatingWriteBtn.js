import { Platform, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

function FloatingWriteBtn() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write');
  };


  return (
    <View style={styles.wrapper}>
      <Pressable style={({pressed}) => [styles.button, Platform.OS === 'ios' && {opacity:pressed ? 0.6 : 1,},]} android_ripple={{color:'white'}} onPress={onPress}>
        <Icon name='add' size={24} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 16,
        right:16,
        width:56,
        height:56,
        borderRadius:28,

        //  ios-shadow
        shadowColor:"#4d4d4d",
        shadowOffset:{width:0, height:4},
        shadowOpacity: 0.3,
        shadowRadius: 4,

        // android-shadow
        elevation:5,
        overflow:Platform.select({android:'hidden'}),
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#6991e9ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white'
    },
})
export default FloatingWriteBtn;
import React from 'react'
import { View, Text, Pressable, Image, Linking } from 'react-native'

import { icons } from '../../../constants'

import styles from './footer.style'

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.likeBtn}>
        <Image 
          source={icons.heartOutline} 
          style={styles.likeBtnImage} 
          resizeMode='contain'
        />
      </Pressable>
      <Pressable 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply Job</Text>
      </Pressable>
    </View>
  );
}

export default Footer
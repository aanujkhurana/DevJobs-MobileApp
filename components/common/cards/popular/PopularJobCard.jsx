import React from 'react'
import { View, Text, Touchable } from 'react-native'

import styles from './popularjobcard.style'
import { TouchableOpacity } from 'react-native-web'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
    style={styles.container(selectedJob, item)}
    onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
      <image source={{uri: item.employer_logo}} 
        resizeMode="contain"
        style={styles.logoImage} />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.job_country}
        </Text>
      </View>
      </TouchableOpacity>
  )
}

export default PopularJobCard
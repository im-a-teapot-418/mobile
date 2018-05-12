import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import MobileScreensButton from '../../ignite/MobileScreens/MobileScreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Text style={styles.logoSubText}>Events, friends & love!</Text>
            <Text style={styles.sectionText}>
              Visit the events you love, make new friends and earn discounts!
            </Text>
          </View>

          <MobileScreensButton />
        </ScrollView>
      </View>
    )
  }
}

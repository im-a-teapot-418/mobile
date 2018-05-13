import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/UserActivitiesScreenStyles'
import SampleList from '../../App/Containers/SampleList'

class UserActivitiesScreen extends React.Component {
  render () {
    return (
      <View style={[styles.container, styles.mainContainer]}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.faq} style={styles.logo} />
            <Text style={styles.titleText}>FAQ</Text>
          </View>
          <SampleList />
        </ScrollView>
      </View>
    )
  }
}

export default UserActivitiesScreen

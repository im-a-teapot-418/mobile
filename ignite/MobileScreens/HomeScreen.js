import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
// Screens
import ComponentCheckInScreen from './ComponentCheckInScreen'
import UserActivitiesScreen from './UserActivitiesScreen'

// Styles
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends React.Component {
  openCheckIn = () => {
    this.props.navigation.navigate('ComponentCheckInScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.igniteClear} style={styles.logo} />
          </View>

          <Text style={styles.sectionText}>
            Default screens for development, debugging, and alpha testing
            are available below.
          </Text>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openComponents} style={styles.componentButton} image={Images.api} text='Activities' />
            <ButtonBox onPress={this.openCheckIn} style={styles.usageButton} image={Images.deviceInfo} text='Check In!' />
          </View>
        </ScrollView>
        <View style={styles.banner}>
          <Text style={styles.bannerLabel}>Made with ❤ by I'm A Teapot - 418</Text>
        </View>
      </View>
    )
  }
}

export default StackNavigator({
  HomeScreen: {screen: HomeScreen},
  ComponentCheckInScreen: {screen: ComponentCheckInScreen},
  UserActivitiesScreen: {screen: UserActivitiesScreen},
}, {
  cardStyle: {
    opacity: 1,
    backgroundColor: '#3e243f'
  },
  initialRouteName: 'HomeScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})

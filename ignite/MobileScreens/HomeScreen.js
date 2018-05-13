import React from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import ButtonBox from './ButtonBox'
import { StackNavigator } from 'react-navigation'
import API from '../../App/Services/Api'
// Screens
import ComponentCheckInScreen from './ComponentCheckInScreen'
import UserActivitiesScreen from './UserActivitiesScreen'
import ComponentActivitiesNearMe from './ComponentActivitiesNearMe'

// Styles
import styles from './Styles/HomeScreenStyles'

class HomeScreen extends React.Component {
  api = {}

  state = {
    user: []
  }

  constructor(props) {
    super(props)

    this.api = API.create()
  }

  openCheckIn = () => {
    this.props.navigation.navigate('ComponentCheckInScreen')
  }

  openActivities = () => {
    this.props.navigation.navigate('UserActivitiesScreen')
  }

  componentWillMount() {
    this.api.getUserData(2).then((response) => {
      this.setState({ user: response.data })
    })
  }

  openActivitiesNearMe = () => {
    this.props.navigation.navigate('ComponentActivitiesNearMe')
  }

  render () {
    const user = this.state.user;

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
            <Image source={Images.logo} style={styles.logo} />
          </View>

          <Text style={styles.greetingText}>
            Hello, {user.first_name} {user.last_name}! You have collected {user.points} so far!
          </Text>

          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openActivities} style={styles.componentButton} image={Images.api} text='Activities' />
            <ButtonBox onPress={this.openCheckIn} style={styles.usageButton} image={Images.deviceInfo} text='Check In!' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openActivitiesNearMe} style={styles.apiButton} image={Images.api} text='Activities Near Me' />
            <ButtonBox onPress={this.openActivitiesNearMe} style={styles.apiButton} image={Images.api} text='Activities Near Me' />
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
  ComponentActivitiesNearMe: {screen: ComponentActivitiesNearMe},
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

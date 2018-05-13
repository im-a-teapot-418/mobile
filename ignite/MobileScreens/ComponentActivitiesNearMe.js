// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/ComponentCheckInScreenStyles'
import { Permissions, MapView } from 'expo'

class ComponentActivitiesNearMe extends React.Component {
  render() {
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
        <View>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </View>
    );
  }
}

export default ComponentActivitiesNearMe

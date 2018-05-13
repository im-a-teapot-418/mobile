// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/ComponentCheckInScreenStyles'
import { MapView } from 'expo'

class ComponentActivitiesNearMe extends React.Component {
  render() {
    return (
        <MapView
          style={{ flex: 1 }}
          onPress={(e) => this.props.navigation.goBack()}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    );
  }
}

export default ComponentActivitiesNearMe

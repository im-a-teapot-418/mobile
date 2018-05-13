// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/ComponentCheckInScreenStyles'
import { MapView } from 'expo'

import API from '../../App/Services/Api'

class ComponentActivitiesNearMe extends React.Component {
  api = {}

  state = {
    data: []
  }

  constructor(props) {
    super(props)

    this.api = API.create()
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  componentWillMount() {
    this.api.getFacilities().then((response) => {
      this.setState({ data: response.data })
    })
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        onPress={(e) => this.props.navigation.goBack()}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
        {this.state.data.map(marker => (
          <MapView.Marker
            coordinate={ { latitute: marker.latitude, longitude: marker.longitude } }
            title={marker.name}
          />
        ))}
      </MapView>
    );
  }
}

export default ComponentActivitiesNearMe

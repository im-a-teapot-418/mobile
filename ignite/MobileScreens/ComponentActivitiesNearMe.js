// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/ComponentCheckInScreenStyles'
import { Permissions, MapView, Location } from 'expo'

import API from '../../App/Services/Api'

class ComponentActivitiesNearMe extends React.Component {
  api = {}

  state = {
    data: []
  }

  constructor(props) {
    super(props)

    this.onRegionChange = this.onRegionChange.bind(this)
    this.api = API.create()
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        region,
      });
    }

    let l = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        longitude: l.coords.longitude,
        latitude: l.coords.latitude, 
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },
    });
  };

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
        onPress={(e) => this.props.navigation.goBack(null)}
        region={this.state.region}
        onRegionChange={ () => this.onRegionChange() }
      >
        {this.state.data.map((marker, i) => (
          <MapView.Marker
            key={i}
            coordinate={ { latitude: marker.latitude, longitude: marker.longitude } }
            title={marker.name}
            showsUserLocation={true}
            followsUserLocation={true}
          />
        ))}
      </MapView>
    );
  }
}

export default ComponentActivitiesNearMe

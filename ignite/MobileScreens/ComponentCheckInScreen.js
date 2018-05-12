// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/ComponentCheckInScreenStyles'
import { BarCodeScanner, Permissions } from 'expo'
import API from '../../App/Services/Api'

function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), time);
  });
}

class ComponentCheckInScreen extends React.Component {
  api = {}

  state = {
    hasCameraPermission: null,
  }

  constructor(props) {
    super(props)

    this.api = API.create()
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
  }

  render () {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={[styles.container, styles.mainContainer]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
            position: 'absolute',
            paddingTop: 30,
            paddingHorizontal: 5,
            zIndex: 10
          }}>
            <Image source={Images.backButton} />
          </TouchableOpacity>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = async ({ type, data }) => {
    await delay(500)
    this.api.postCheckIn(2, data).then((response) => {
      this.props.navigation.goBack()
      if(!response.data.success) {
        alert(response.data.error.message)
      }
    })
  }
}

export default ComponentCheckInScreen

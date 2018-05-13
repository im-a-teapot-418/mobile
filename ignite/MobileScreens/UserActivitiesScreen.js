import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { Images } from './MobileTheme'
import styles from './Styles/UserActivitiesScreenStyles'
import SampleList from '../../App/Containers/SampleList'
import API from '../../App/Services/Api'
import { Container, Content } from 'native-base'


class UserActivitiesScreen extends React.Component {
  api = {}

  state = {
    data: []
  }

  constructor(props) {
    super(props)

    this.api = API.create()
  }

  componentWillMount() {
    this.api.getUserActivities(2).then((response) => {
      this.setState({ data: response.data })
    })
  }

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

        <Container>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.api} style={styles.logo} />
            <Text style={styles.titleText}>User Activities</Text>
          </View>
          <Content>
            <SampleList data={this.state.data} />
          </Content>
        </Container>
      </View>
    )
  }
}

export default UserActivitiesScreen

import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Body, Text } from 'native-base';
import { connect } from 'react-redux'
import { AppLoading } from 'expo';

class SampleList extends React.PureComponent {

  state = {
    dataObjects: [
      {title: 'First Title', description: 'First Description'},
      {title: 'Second Title', description: 'Second Description'},
      {title: 'Third Title', description: 'Third Description'},
      {title: 'Fourth Title', description: 'Fourth Description'},
      {title: 'Fifth Title', description: 'Fifth Description'},
      {title: 'Sixth Title', description: 'Sixth Description'},
      {title: 'Seventh Title', description: 'Seventh Description'}
    ],
    fontsAreLoaded: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  keyExtractor = (item, index) => index

  renderItem = ({ item }) => (
    <ListItem>
      <Body>
        <Text>{item.title}</Text>
        <Text note>{item.description}</Text>
      </Body>
    </ListItem>
  )

  render () {
    const { fontsAreLoaded } = this.state
    return !fontsAreLoaded ? <AppLoading /> : (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.dataObjects}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </List>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleList)

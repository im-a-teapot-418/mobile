import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Body, Text, Right, Left, Icon } from 'native-base';
import { connect } from 'react-redux'

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
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem icon>
      <Left>
        <Icon name="plane" style={{color: 'green'}} />
      </Left>
      <Body>
        <Text style={{color: '#fff'}}>{item.facility.name}</Text>
        <Text note>+100 pts</Text>
      </Body>
      <Right>
        <Text note>{item.human_date}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  )

  render () {
    const data = this.props.data;

    return (
      <List>
        <FlatList
          data={data}
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

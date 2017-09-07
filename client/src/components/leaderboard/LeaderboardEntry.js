import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { ListItem, Left, Thumbnail, Text, Right, Button, Body, Separator, Container } from 'native-base';
import { Actions } from 'react-native-router-flux';


class LeaderboardEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  onUserEntryClick(user) {
    console.log(`LeaderBoardEntry - onUserEntryClick()`)
    Actions.userprofile({user})
  }

  render() {
    return (
      <ListItem avatar onPress={() => {this.onUserEntryClick(this.props.player)}}>
        <Left>
        <Text style={styles.rank}>{this.props.index + 1}</Text>
        </Left>
        <Body>
        <Thumbnail source={{uri: this.props.player.profilePicture}} />
        <Text style={styles.text}>{this.props.player.username}</Text>
        </Body>
        <Right>
        <Text style={styles.text}>{this.props.player.rewardPoints + " points"}</Text>
        </Right>
      </ListItem>
    );
  }
}


const styles = StyleSheet.create({
  rank: {
    fontSize: 25
  },

})

export default LeaderboardEntry;
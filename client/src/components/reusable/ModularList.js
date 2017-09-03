import React, { Component } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import ModularListEntry from './ModularListEntry'

const window = Dimensions.get('window');


export default class ModularList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [],
      list: [
        {
          image: 'https://placekitten.com/200/240',
          text: 'Chloe',
        },
        {
          image: 'https://placekitten.com/200/201',
          text: 'Jasper',
        },
        {
          image: 'https://placekitten.com/200/202',
          text: 'Pepper',
        },
        {
          image: 'https://placekitten.com/200/203',
          text: 'Oscar',
        }
      ]
    }

    
  }


  componentWillReceiveProps(nextProps) {
    //console.log('ModularList willreceiveProps, nextProps is: ', nextProps);
  
    this.setState({
      games: nextProps
    })
  }

  componentDidMount() {
    //console.log('ModularList state mounted, state is: ', this.state)
  }




  render() {
    return (
      <View>
        <Text>Hello Modular List</Text>
        {this.props.data.map((listEntry, index) => {
          return (
            <ModularListEntry key={index} listentry={listEntry} buttontext={this.props.viewmode} buttonaction={this.props.buttonaction}/>
          )
        })}

      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },

  title: {
    fontSize: 20,
    paddingVertical: 10,
    color: '#999999',
  },

  list: {
    flex: 1,
  },

  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      }
    })
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
    borderRadius: 4,
    

    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    })
  },

  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },

  text: {
    fontSize: 24,
    color: '#222222',
  },
});

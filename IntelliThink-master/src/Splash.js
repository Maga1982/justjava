import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class Splash extends React.Component {

  static navigationOptions = {
    header:null
  }

  constructor(props){
    super(props);
  }

  async componentDidMount(){
  setInterval(()=>{
      this.props.navigation.navigate('login');
  },6000)
}

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'http://www.bigthink.co.in/wp-content/uploads/2018/04/INTELLI-THINK.jpg'}} style={{width: 300, height: 300}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent:'center'
  },
});
